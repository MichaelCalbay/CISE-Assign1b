import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { AnalystInterface } from "../../components/table/AnalystInterface";
import AnalystTable  from "../../components/table/AnalystTable";
import axios from "axios";

type AnalytsProps = {
  articles: AnalystInterface[];
};

const Articles: NextPage<AnalytsProps> = ({ articles }) => {
  const headers: { key: keyof AnalystInterface; label: string }[] = [
    { key: "customId", label: "ID" },
    { key: "title", label: "Title" },
    { key: "authors", label: "Authors" },
    { key: "source", label: "Source" },
    { key: "pubyear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "claim", label: "Claim" },
    { key: "evidence", label: "Evidence" },
    { key: "research", label: "Research" },
    { key: "SEPractise", label: "SE Practise" },
  ];

  return (
    <div className="container">
      <h1>SERC-Analyst Queue</h1>
      <table style={{ border: '1px solid darkgrey', borderCollapse: 'collapse', margin: '70px auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#a4703c', color: 'white' }}>
            {headers.map((header) => (
              <th style={{ border: '1px solid darkgrey', padding: '8px' }} key={header.key}>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{ backgroundColor: '#ded7cd' }}>
          {articles.map((article) => (
            <AnalystTable key={article.customId} data={article} />
          ))}
        </tbody>
      </table>
    </div>
  );
};



export const getStaticProps: GetStaticProps = async (context) => {
  //https request to REST API
  const getData = await axios.get('http://cise-assign1b-six.vercel.app/article/moderated');

  console.log(getData);


  //Returning articles
  return {
    props: {
      articles: getData.data
    },
  };
};
export default Articles;
