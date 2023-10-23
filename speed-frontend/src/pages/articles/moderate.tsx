import { GetStaticProps, NextPage } from "next";
//import SortableTable from "../../components/table/SortableTable";
import { ModInterface } from "../../components/table/ModInterface";
import ModTable  from "../../components/table/ModTable";
import axios from "axios";



type AnalytsProps = {
  articles: ModInterface[];
};

// Import the modrow component

const Articles: NextPage<AnalytsProps> = ({ articles }) => {
  const headers: { key: keyof ModInterface; label: string }[] = [
    { key: "customId", label: "ID" },
    { key: "title", label: "Title" },
    { key: "authors", label: "Authors" },
    { key: "source", label: "Source" },
    { key: "pubyear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "decision", label: "decision" },
  ];

  return (
    <div >
      <h1>Moderator Queue</h1>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <table style={{ border: '1px solid darkgrey', borderCollapse: 'collapse' }}>
          <thead>
          <tr style={{ backgroundColor: '#a4703c', color: 'white' }}>
              {headers.map((header) => (
                <th style={{ border: '1px solid darkgrey', padding: '8px',  }} key={header.key}>{header.label}</th>
              ))}
            </tr>
          </thead>
          <tbody style={{ backgroundColor: '#ded7cd' }}>
            {articles.map((article) => (
              <ModTable key={article.customId} data={article} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};


export const getStaticProps: GetStaticProps = async (context) => {
  //https request to REST API
  const getData = await axios.get('http://cise-assign1b-six.vercel.app/article/moderate');

  console.log(getData);

  //Returning articles
  return {
    props: {
      articles: getData.data
    },
  };
};
export default Articles;