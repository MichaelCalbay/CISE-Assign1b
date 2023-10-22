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
    { key: "authors", label: "Author(s)" },
    { key: "source", label: "Source" },
    { key: "pubyear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "claim", label: "Claim" },
    { key: "evidence", label: "Result of Evidence" },
    { key: "participant", label: "Participant" },
    { key: "research", label: "Research Type" },
    { key: "SEPractise", label: "SE Practise" },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [searchKeyword, setSearchKeyword] = useState(""); 
  const [searchYearStart, setSearchYearStart] = useState("");
  const [searchYearEnd, setSearchYearEnd] = useState("");
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(headers.map((column) => column.key)
  

  );
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

  const handleSearchInputYearStart = (year: string) => {
    setSearchYearStart(year);
  };
  
  const handleSearchInputYearEnd = (year: string) => {
    setSearchYearEnd(year);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    filterArticles(selectedOption, searchKeyword, searchYearStart, searchYearEnd); // Pass all search criteria
  };

  const handleShowAllArticles = () => {
    setShowAllArticles(true);
    setSelectedOption("");
    setSearchKeyword("");
    setSearchYearStart("");
    setSearchYearEnd("");
    setFilteredArticles(articles);
  };

  //Filters the articles based on SE practice, keyword or publication year
  const filterArticles = (sePractice: string, keyword?: string, yearStart?: string, yearEnd?: string) => {
    const filtered = articles.filter((article) => {
      const hasValidSEPractice = !sePractice || article.SEPractise.toLowerCase() === sePractice.toLowerCase();
      const hasValidKeyword = !keyword || article.title.toLowerCase().includes(keyword.toLowerCase());
      const isValidYearStart = !yearStart || parseInt(article.pubyear, 10) >= parseInt(yearStart, 10);
      const isValidYearEnd = !yearEnd || parseInt(article.pubyear, 10) <= parseInt(yearEnd, 10);
      return hasValidSEPractice && hasValidKeyword && isValidYearStart && isValidYearEnd;
    });
  
    setFilteredArticles(filtered);
  };


  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");


  const toggleSortDirection = (sortCriterion: string) => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
  
    switch (sortCriterion) {
      case "authors":
        sortArticlesByAuthors(newSortDirection);
        break;
      case "claim":
        sortArticlesByClaim(newSortDirection);
        break;
      case "pubyear":
        sortArticlesByPublicationYear(newSortDirection);
        break;
      case "evidence":
        sortArticlesByEvidence(newSortDirection);
        break;
      default:
        break;
    }
  };

  const sortArticlesByAuthors = (direction: "asc" | "desc") => {
    const sortedArticles = [...filteredArticles];
  
    sortedArticles.sort((a, b) => {
      const authorA = a.authors[0];
      const authorB = b.authors[0];
  
      if (direction === "asc") {
        return authorA.localeCompare(authorB);
      } else {
        return authorB.localeCompare(authorA);
      }
    });
  
    setFilteredArticles(sortedArticles);
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

  const sortArticlesByClaim = (direction: "asc" | "desc") => {
    const sortedArticles = [...filteredArticles];
  
    sortedArticles.sort((a, b) => {
      const claimA = a.claim.charAt(0).toLowerCase(); // Get the first letter and make it lowercase
      const claimB = b.claim.charAt(0).toLowerCase();
  
      if (direction === "asc") {
        return claimA.localeCompare(claimB);
      } else {
        return claimB.localeCompare(claimA);
      }
    });
  
    setFilteredArticles(sortedArticles);
  };

  const sortArticlesByEvidence = (direction: "asc" | "desc") => {
    const sortedArticles = [...filteredArticles];

    sortedArticles.sort((a, b) => {
      if (direction === "asc") {
        return a.evidence.localeCompare(b.evidence);
      } else {
        return b.evidence.localeCompare(a.evidence);
      }
    });

    setFilteredArticles(sortedArticles);
  };

  const handleColumnToggle = (columnKey: keyof ArticlesInterface) => {
    if (visibleColumns.includes(columnKey)) {
      setVisibleColumns((prevVisibleColumns) =>
        prevVisibleColumns.filter((key) => key !== columnKey)
      );
    } else {
      setVisibleColumns((prevVisibleColumns) => [...prevVisibleColumns, columnKey]);
    }
  };

  const resetColumns = () => {
    setVisibleColumns(headers.map((column) => column.key));
  };



  return (
    
    <div className="Search Page">
      <h1>Articles Index Page</h1>    

      <div className="search-sort-box" style={{ border: '1px solid #ccc', padding: '20px', marginLeft: '70px', marginRight: '70px',backgroundColor: '#ded7cd' }}>
      <form onSubmit={handleSearchSubmit}>
          {/* Dropdown list for SE practices and other search elements */}
      </form>

      {/* Dropdown list for SE practices */}
      <div className="search-bar">
        <div style={{ marginTop: '0px', marginBottom: '0px' }}>
          <p style={{ fontWeight: 'bold' }}>Search by: {' '}
            <select value={selectedOption} onChange={handleDropdownChange}>
              <option value="">SE Practise</option>
              <option value="TDD">TDD</option>
              <option value="Microservices">Microservices</option>
              <option value="Continuous Integration">Continuous Integration</option>
              <option value="Refactored">Refactored</option>
            </select>
          </p>
        </div>

        {/* Keyword search bar */}
        <div style={{ marginBottom: '10px' }}> 
          <p>or {' '}
            <input
              type="text"
              placeholder="Keyword of Title"
              value={searchKeyword}
              onChange={(e) => handleSearchInputKeyword(e.target.value)}
            />
          </p>
        </div>

        {/* Publication year range */}
        <div>
          <p>or {' '}
            <input
              type="number"
              placeholder="Start Year"
              value={searchYearStart}
              onChange={(e) => handleSearchInputYearStart(e.target.value)}
            />

            {' to '}

            <input
              type="number"
              placeholder="End Year"
              value={searchYearEnd}
              onChange={(e) => handleSearchInputYearEnd(e.target.value)}
            />
          </p>
        </div>
        <button type="submit">Enter</button>
      </div>

      <form onSubmit={handleShowAllArticles}>
        <div style={{ marginTop: '10px' }}>
          <button type="button" onClick={handleShowAllArticles}>Show All Articles</button>
        </div>
      </form>

      <p style={{ fontStyle: 'italic' }}>
        Note: If you choose the option &lsquo;SE Practise&rsquo; and submit the form with no other search criteria, the full list of articles will be shown.
      </p>


      {/* Sorts the columns */}
      <div className="sort-buttons">
        <div style={{ marginTop: '60px' }}>
        <p style={{ fontWeight: 'bold' }}>Sort by: {' '}
            <button onClick={() => toggleSortDirection("authors")} style={{ marginRight: '10px' }}>Authors</button>
            <button onClick={() => toggleSortDirection("pubyear")} style={{ marginRight: '10px' }}>Publication Year</button>
            <button onClick={() => toggleSortDirection("claim")} style={{ marginRight: '10px' }}>Claim</button>
            <button onClick={() => toggleSortDirection("evidence")}>Result of Evidence</button>
          </p>
        </div>
      </div>  
    

      {/* Hide/shows table columns */}
      <div className="column-toggle">
        <p>
          <span style={{ fontWeight: 'bold' }}>Show/Hide Columns:</span>
          {headers.map((column) => (
            <label key={column.key} style={{ marginLeft: '10px' }}>
              <input
                type="checkbox"
                checked={visibleColumns.includes(column.key)}
                onChange={() => handleColumnToggle(column.key)}
              />
              {column.label}
            </label>
          ))}
          <button onClick={resetColumns} style={{ marginLeft: '10px' }}>Show All columns</button>
        </p>
      </div>
    </div>

       {/* Displays the articles table */}     
       <div style={{ marginTop: '60px', marginLeft: '70px', marginRight: '70px' }}>
        {filteredArticles.length === 0 ? (
          <p style={{ color: 'red' }}>No articles found with the provided search criteria.</p>
        ) : (
          <SortableTable headers={headers} data={filteredArticles} visibleColumns={visibleColumns} />
        )}
      </div>

    </div>
  );
};


export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch all articles in the Published collection
  const response = await axios.get("http://localhost:3032/article/published");
  const articles: ArticlesInterface[] = response.data;

  return {
    props: {
      articles,
    },
  };
};

export default Articles;
