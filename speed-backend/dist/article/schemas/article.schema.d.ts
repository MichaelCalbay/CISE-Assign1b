export declare class Article {
    title: string;
    authors: string[];
    source: string;
    pubyear: number;
    doi: string;
    claim: string;
    evidence: string;
}
export declare const ArticleSchema: mongoose.Schema<TClass>;
