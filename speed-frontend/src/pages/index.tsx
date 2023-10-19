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
  const [searchKeyword, setSearchKeyword] = useState(""); 
  const [searchYear, setSearchYear] = useState("");
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

  const handleSearchInputKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const handleSearchInputYear = (year: string) => {
    setSearchYear(year);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    filterArticles(selectedOption, searchKeyword, searchYear); // Pass all search criteria
  };

  //Filters the articles based on SE practice, keyword or publication year
  const filterArticles = (sePractice: string, keyword?: string, year?: string) => {
  const filtered = articles.filter((article) => {
    const hasValidSEPractice = !sePractice || article.SEPractise.toLowerCase() === sePractice.toLowerCase();
    const hasValidKeyword = !keyword || article.title.toLowerCase().includes(keyword.toLowerCase());
    const hasValidYear = !year || parseInt(article.pubyear, 10) === parseInt(year, 10); // Compare as integers
    return hasValidSEPractice && hasValidKeyword && hasValidYear;
  });

  setFilteredArticles(filtered);
};


  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Sorts by yea of publication
  const toggleSortDirection = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
    sortArticlesByPublicationYear(newSortDirection);
  };

  const sortArticlesByPublicationYear = (direction: "asc" | "desc") => {
    const sortedArticles = [...filteredArticles]; // Create a copy of the filteredArticles array
  
    sortedArticles.sort((a, b) => {
      // Convert pubyear to integers
      const pubyearA = parseInt(a.pubyear, 10);
      const pubyearB = parseInt(b.pubyear, 10);
  
      if (!isNaN(pubyearA) && !isNaN(pubyearB)) {
        if (direction === "asc") {
          return pubyearA - pubyearB;
        } else {
          return pubyearB - pubyearA;
        }
      } else {
        // Handle cases where 'pubyear' is not a valid number
        return 0; // No sorting for non-numeric values
      }
    });
  
    setFilteredArticles(sortedArticles);
  };


  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>

      <div className="sort-buttons">
        <button onClick={toggleSortDirection}>Sort by Publication Year {sortDirection === "asc" ? "Ascending" : "Descending"}</button>
      </div>

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

        {/* Keyword Search bar */}
        <input
        type="text"
        placeholder="Keyword of Title"
        value={searchKeyword}
        onChange={(e) => handleSearchInputKeyword(e.target.value)}
        />

        {' '} or {' '}

        {/* Publication year Search bar */}
        <input
        type="integer"
        placeholder="Publication Year"
        value={searchYear}
        onChange={(e) => handleSearchInputYear(e.target.value)}
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
