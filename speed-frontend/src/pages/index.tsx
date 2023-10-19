import { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import SortableTable from "../components/table/SortableTable";
//import data from "../utils/dummydata.json";
import axios from "axios";

interface ArticlesInterface {
  id: string;
  title: string;
  authors: string;
  source: string;
  pubyear: string;
  doi: string;
  claim: string;
  evidence: string;
  participant: string;
  research: string;
  SEPractise: string;
}

type ArticlesProps = {
  articles: ArticlesInterface[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  const headers: { key: keyof ArticlesInterface; label: string }[] = [
    { key: "title", label: "Title" },
    { key: "authors", label: "Authors" },
    { key: "source", label: "Source" },
    { key: "pubyear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "claim", label: "Claim" },
    { key: "evidence", label: "Evidence" },
    { key: "participant", label: "Participant" },
    { key: "research", label: "Research" },
    { key: "SEPractise", label: "SEPractise" },
  ];

  const [selectedOption, setSelectedOption] = useState(""); // Create state for the dropdown list
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value); // Update the selected value in the dropdown
  };


  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>

      {/* dropdown list */}
      <div className="search-bar">
        <p>Search by{' '}
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">SE Practice</option>
          <option value="TDD">TDD</option>
          <option value="Microservices">Microservices</option>
          <option value="Continuous Integration">Continuous Integration</option>
          <option value="Refactored">Refactored</option>
          {/* Add more options as needed */}
        </select></p>
      </div>

      <SortableTable headers={headers} data={articles} />
    </div>

  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  //https request to REST API
  const getData = await axios.get('http://localhost:3032/article');

  console.log(getData);

  //======DUMMYDATA -NOT NEEDED=======
  // Map the data to ensure all articles have consistent property names
  // const articles = data.articles.map((article) => ({
  //   id: article.id ?? article.id,
  //   title: article.title,
  //   authors: article.authors,
  //   source: article.source,
  //   pubyear: article.pubyear,
  //   doi: article.doi,
  //   claim: article.claim,
  //   evidence: article.evidence,
  // }));

  //Returning articles
  return {
    props: {
      articles: getData.data
    },
  };
};
export default Articles;
