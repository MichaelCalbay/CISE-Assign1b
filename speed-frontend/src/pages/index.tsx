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

  const [selectedOption, setSelectedOption] = useState("");
  const [searchKeyword, setSearchKeyword] = useState(""); // Add a state variable for search keyword
  const [filteredArticles, setFilteredArticles] = useState(articles); // Initialize with all articles
  
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionValue = event.target.value as keyof ArticlesInterface;
    setSelectedOption(selectedOptionValue); // Update the selected value in the dropdown
  
    if (selectedOptionValue) {
      setSelectedOption(selectedOptionValue);
    } else {
      // If the user selects the default option (e.g., "SE Practice"), reset the filter
      setFilteredArticles(articles);
    }
  };

  const handleSearchInput = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    filterArticles(selectedOption, searchKeyword); // Filter based on the searchKeyword, not selectedOption
  };

  const filterArticles = (sePractice: string, keyword?: string) => {
    const filtered = articles.filter((article) => {
      const hasValidSEPractice = !sePractice || article.SEPractise.toLowerCase() === sePractice.toLowerCase();
      const hasValidKeyword = !keyword || article.title.toLowerCase().includes(keyword.toLowerCase());
      return hasValidSEPractice && hasValidKeyword;
    });
  
    setFilteredArticles(filtered);
  };


  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>

      <form onSubmit={handleSearchSubmit}> {/* Use a form element to handle submission */}
      {/* Dropdown list for SE practices */}
      <div className="search-bar">
        <p>
        Search by {' '}
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">SE Practise</option>
          <option value="TDD">TDD</option>
          <option value="Microservices">Microservices</option>
          <option value="Continuous Integration">Continuous Integration</option>
          <option value="Refactored">Refactored</option>
        </select>

        {' '} or {' '}

        {/* Search bar */}
        <input
        type="text"
        placeholder="Keyword of title"
        value={searchKeyword}
        onChange={(e) => handleSearchInput(e.target.value)}
        />
      {' '}
      <button type="submit">Enter</button> {/* Submit button */}
      </p>
      </div>
      </form>

      <SortableTable headers={headers} data={filteredArticles} />
    </div>
  );
};


export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch all articles
  const response = await axios.get("http://localhost:3032/article");
  const articles: ArticlesInterface[] = response.data;

  return {
    props: {
      articles,
    },
  };
};

export default Articles;
