import { GetStaticProps, NextPage } from "next";
import { AnalystInterface } from "../../components/table/AnalystInterface";
import AnalystTable  from "../../components/table/AnalystTable";
import axios from "axios";

type AnalytsProps = {
  articles: AnalystInterface[];
};

const Articles: NextPage<AnalytsProps> = ({ articles }) => {
  const headers: { key: keyof AnalystInterface; label: string }[] = [
    { key: "title", label: "Title" },
    { key: "authors", label: "Authors" },
    { key: "source", label: "Source" },
    { key: "pubyear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "claim", label: "Claim" },
    { key: "evidence", label: "Evidence" },
    { key: "research", label: "Research" },
    { key: "SEPractise", label: "SEPractise" },
  ];

  return (
    <div className="container">
      <h1>SERC-Analyst QUEUE</h1>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.key}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <AnalystTable key={article.id} data={article} />
          ))}
        </tbody>
      </table>
    </div>
  );
};


export const getStaticProps: GetStaticProps = async (context) => {
  //https request to REST API
  const getData = await axios.get('http://localhost:3032/article/moderated');

  console.log(getData);


  //Returning articles
  return {
    props: {
      articles: getData.data
    },
  };
};
export default Articles;
