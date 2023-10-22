import { ChangeEventHandler, SetStateAction, useState } from "react";
import formStyles from "../../../styles/Form.module.scss";
import axios from "axios";
import PopupMessage from "../../components/pop-up/PopupMessage";
const bibtexParse = require("bibtex-parse");

const NewDiscussion = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState<string[]>([]);
  const [source, setSource] = useState("");
  const [pubyear, setPubYear] = useState<number>(0);
  const [doi, setDoi] = useState("");
  const [claim, setClaim] = useState("");
  const [evidence, setEvidence] = useState("");
  const [bibtexData, setBibtexData] = useState("");
  const [participant, setParticipant] = useState("");
  const [research, setResearch] = useState("");
  const [SEPractise, setSEPractise] = useState("");
  //Pop-up message
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const openPopup = (message: SetStateAction<string>) => {
    setMessage(message);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setMessage("");
  };

  const submitNewArticle = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    //Fetch data from forms
    const data = {
      title,
      authors,
      source,
      pubyear,
      doi,
      claim,
      evidence,
      participant,
      research,
      SEPractise,
    };

    //Validate if a field is empty
    if (
      data.title == "" ||
      data.authors.length == 0 ||
      data.claim == "" ||
      data.source == "" ||
      data.pubyear == 0 ||
      data.doi == "" ||
      data.evidence == "" ||
      data.participant == "" ||
      data.research == "" ||
      data.SEPractise == ""
    ) {
      openPopup("Please fill all fields!");
    } else {
      try {
        //Sends data into server-side API
        const responseData = await axios.post(
          "http://localhost:3032/article/create",
          data
        );

        openPopup('Article has been submitted')
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };

  //For bibtex
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

  //Function to convert .bib to JSON and fetch every element from the file.
  const parseBibtex = () => {
    if (bibtexData) {
      //Read .bib file in a structure way.
      const parsedData = bibtexParse.entries(bibtexData);

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
          evidence: entry.EVIDENCE,
          participant: entry.PARTICIPANT,
          research: entry.RESEARCH,
          SEPractise: entry.SEPRACTISE
        };

        setTitle(populatedData.title);
        addAuthor();
        setAuthors([populatedData.authors]);
        setSource(populatedData.source);
        setPubYear(populatedData.pubyear);
        setDoi(populatedData.doi);
        setClaim(populatedData.claim);
        setEvidence(populatedData.evidence);
        setParticipant(populatedData.participant);
        setResearch(populatedData.research);
        setSEPractise(populatedData.SEPractise);


        // try {
        //   //Sends data into server-side API
        //   const responseData = await axios.post(
        //     "http://localhost:3032/article/create",
        //     populatedData
        //   );

        //   openPopup('Article has been submitted')
        // } catch (error) {
        //   console.log("Error: ", error);
        // }
      });
    } else {
      // Handle the case when no BibTeX data is available
      openPopup("No attachment exists");
    }
  };

  // Some helper methods for the authors array
  const addAuthor = () => {
    setAuthors(authors.concat([""]));
  };
  const removeAuthor = (index: number) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };
  const changeAuthor = (index: number, value: string) => {
    setAuthors(
      authors.map((oldValue, i) => {
        return index === i ? value : oldValue;
      })
    );
  };

  // return the full form & bibtex
  return (
    <div className="container">
      <h1>Submit Articles Page</h1>    

      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div className="Form" style={{ border: '1px solid #ccc', padding: '30px', width: '800px', backgroundColor: '#ded7cd' }}>

      <div className="centered-content"> 
      <h2>Attach Bibtex Articles</h2>

      <div className="row" style={{ marginBottom: '70px' }}>
        <input type="file" accept=".bib" onChange={handleFileChange} />
        <button
          onClick={parseBibtex}
          style={{
            padding: '10px 20px', 
          }}
        >
          Enter
        </button>
      </div>

      <h2>Suggest an Article</h2>

      <div className={formStyles.form} onSubmit={submitNewArticle}>
        <label htmlFor="title" style={{ width: '100px', textAlign: 'left', marginTop: '30px' }}>Title:</label>
        <input
          style={{ width: '500px' }}
          className={formStyles.formItem}
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label htmlFor="author" style={{ width: '100px', textAlign: 'left' }}>Authors:</label>
        {authors.map((author, index) => {
          return (
            <div key={`author ${index}`} className={formStyles.arrayItem}>
              <input
                type="text"
                name="author"
                value={author}
                onChange={(event) => changeAuthor(index, event.target.value)}
                className={formStyles.formItem}
              />
              <button
                onClick={() => removeAuthor(index)}
                className={formStyles.buttonItem}
                style={{ marginLeft: "3rem" }}
                type="button"
              >
                -
              </button>
            </div>
          );
        })}
        <button
          onClick={() => addAuthor()}
          className={formStyles.buttonItem}
          style={{ marginLeft: "auto", marginBottom: '30px' }}
          type="button"
        >
          +
        </button>
        <label htmlFor="source" style={{ width: '100px', textAlign: 'left' }}>Source:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="source"
          id="source"
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
          }}
        />
        <label htmlFor="pubYear" style={{ width: '100px', textAlign: 'left' }}>Publication Year:</label>
        <input
          className={formStyles.formItem}
          type="number"
          name="pubYear"
          id="pubYear"
          value={pubyear}
          onChange={(event) => {
            const val = event.target.value;
            if (val === "") {
              setPubYear(0);
            } else {
              setPubYear(parseInt(val));
            }
          }}
        />
        <label htmlFor="doi" style={{ width: '100px', textAlign: 'left' }}>DOI:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="doi"
          id="doi"
          value={doi}
          onChange={(event) => {
            setDoi(event.target.value);
          }}
        />
        <label htmlFor="claim" style={{ width: '100px', textAlign: 'left' }}>Claim:</label>
        <input
          className={formStyles.formItem}
          name="claim"
          value={claim}
          onChange={(event) => setClaim(event.target.value)}
        />
        <label htmlFor="evidence" style={{ width: '100px', textAlign: 'left' }}>Evidence:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="evidence"
          id="evidence"
          value={evidence}
          onChange={(event) => {
            setEvidence(event.target.value);
          }}
        />
        <label htmlFor="participant" style={{ width: '100px', textAlign: 'left' }}>Participant:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="participant"
          id="participant"
          value={participant}
          onChange={(event) => {
            setParticipant(event.target.value);
          }}
        />
        <label htmlFor="research" style={{ width: '100px', textAlign: 'left' }}>Research:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="research"
          id="research"
          value={research}
          onChange={(event) => {
            setResearch(event.target.value);
          }}
        />
        <label htmlFor="SEPractise" style={{ width: '100px', textAlign: 'left' }}>SE Practise:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="SEPractise"
          id="SEPractise"
          value={SEPractise}
          onChange={(event) => {
            setSEPractise(event.target.value);
          }}
        />
        <button
          className={formStyles.formItem}
          style={{ width: '150px', marginLeft: 'auto'  }}
          type="submit"
          onClick={submitNewArticle}
        >
          Submit Form
        </button>
        <div>
          <PopupMessage
            message={message}
            show={showPopup}
            onClose={closePopup}
          />
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};
export default NewDiscussion;
