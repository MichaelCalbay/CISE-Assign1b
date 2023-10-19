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
export declare class SuggestedArticle {
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
export declare class ModeratedArticle {
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
export declare class PublishedArticle {
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
export declare const SggstArticleSchema: import("mongoose").Schema<SuggestedArticle, import("mongoose").Model<SuggestedArticle, any, any, any, import("mongoose").Document<unknown, any, SuggestedArticle> & SuggestedArticle & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SuggestedArticle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SuggestedArticle>> & import("mongoose").FlatRecord<SuggestedArticle> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const ModArticleSchema: import("mongoose").Schema<ModeratedArticle, import("mongoose").Model<ModeratedArticle, any, any, any, import("mongoose").Document<unknown, any, ModeratedArticle> & ModeratedArticle & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ModeratedArticle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ModeratedArticle>> & import("mongoose").FlatRecord<ModeratedArticle> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const ArticleSchema: import("mongoose").Schema<PublishedArticle, import("mongoose").Model<PublishedArticle, any, any, any, import("mongoose").Document<unknown, any, PublishedArticle> & PublishedArticle & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PublishedArticle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PublishedArticle>> & import("mongoose").FlatRecord<PublishedArticle> & {
    _id: import("mongoose").Types.ObjectId;
}>;
