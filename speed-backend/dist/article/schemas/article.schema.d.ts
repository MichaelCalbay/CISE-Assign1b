/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class SggstArticle {
    title: string;
    authors: string[];
    source: string;
    pubyear: number;
    doi: string;
    claim: string;
    evidence: string;
    participant: string;
    research: string;
    SEPractise: string;
}
export declare class ModArticle {
    title: string;
    authors: string[];
    source: string;
    pubyear: number;
    doi: string;
    claim: string;
    evidence: string;
    participant: string;
    research: string;
    SEPractise: string;
}
export declare class Article {
    title: string;
    authors: string[];
    source: string;
    pubyear: number;
    doi: string;
    claim: string;
    evidence: string;
    participant: string;
    research: string;
    SEPractise: string;
}
export declare const SggstArticleSchema: import("mongoose").Schema<SggstArticle, import("mongoose").Model<SggstArticle, any, any, any, import("mongoose").Document<unknown, any, SggstArticle> & SggstArticle & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SggstArticle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SggstArticle>> & import("mongoose").FlatRecord<SggstArticle> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const ModArticleSchema: import("mongoose").Schema<ModArticle, import("mongoose").Model<ModArticle, any, any, any, import("mongoose").Document<unknown, any, ModArticle> & ModArticle & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModArticle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ModArticle>> & import("mongoose").FlatRecord<ModArticle> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const ArticleSchema: import("mongoose").Schema<Article, import("mongoose").Model<Article, any, any, any, import("mongoose").Document<unknown, any, Article> & Article & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Article, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Article>> & import("mongoose").FlatRecord<Article> & {
    _id: import("mongoose").Types.ObjectId;
}>;
