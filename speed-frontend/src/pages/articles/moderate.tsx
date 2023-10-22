import { GetStaticProps, NextPage } from "next";
import SortableTable from "../../components/table/SortableTable";
import data from "../../utils/dummydata.json";
interface ArticlesInterface {
id: string;
title: string;
authors: string;
source: string;
pubyear: string;
doi: string;
claim: string;
evidence: string;
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
];
return (
<div className="container" style={{marginLeft: '70px', marginRight: '70px'}}>
<h1>Moderate Submissions Page</h1>
<p style={{ fontSize: '20px', color: '#332c1b'}}>This page is for moderators to approve or deny articles</p>
<SortableTable headers={headers} data={articles} />
</div>
);
};
export const getStaticProps: GetStaticProps<ArticlesProps> = async (_) => {
// Map the data to ensure all articles have consistent property names
const articles = data.articles.map((article) => ({
id: article.id ?? article._id,
title: article.title,
authors: article.authors,
source: article.source,
pubyear: article.pubyear,
doi: article.doi,
claim: article.claim,
evidence: article.evidence,
}));
return {
props: {
articles,
},
};
};
export default Articles;

