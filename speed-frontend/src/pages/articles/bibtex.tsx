import { ChangeEventHandler, useState } from 'react';
import axios from "axios";
const bibtexParse = require('bibtex-parse');


function BibtexParser() {
  const [bibtexData, setBibtexData] = useState(''); // Initialize with an empty string

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files;

    //check if there is a file and file contents.
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        //Initialise contents
        const contents = e.target?.result as string | null;

        
        //Set bibtexData as fetched from .bib file.
        if (contents) {
          setBibtexData(contents);
        }
      };

      reader.readAsText(file);
    }
  };

  const parseBibtex = () => {
    if (bibtexData) {
      //Read .bib file in a structure way.
      const parsedData = bibtexParse.entries(bibtexData)
      
      //Read through the file
      parsedData.forEach(async (entry: any) => {
        //Populate data
        const populatedData = {
          title: entry.TITLE,
          authors: entry.AUTHORS,
          source: entry.SOURCE,
          pubyear: entry.PUBYEAR,
          doi: entry.DOI,
          claim: entry.CLAIM,
          evidence: entry.EVIDENCE
        }

        try {
          //Sends data into server-side API
          const responseData = await axios.post("http://localhost:3032/article/create", populatedData)
      
          console.log("Response from DB", responseData);
        } catch (error) {
          console.log('Error: ', error);
        }
      });
    } else {
      // Handle the case when no BibTeX data is available
    }
  };

  return (
    <div>
      <input type="file" accept=".bib" onChange={handleFileChange} />
      <button onClick={parseBibtex}>Submit BibTeX</button>
    </div>
  );
}

export default BibtexParser;
