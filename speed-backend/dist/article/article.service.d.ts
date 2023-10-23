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
/// <reference types="mongoose/types/inferschematype" />
import { PublishedArticles } from './schemas/published.schema';
import { ModeratedArticles } from './schemas/moderated.schema';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
import { SuggestedArticles } from './schemas/suggest.schema';
export declare class ArticleService {
    private publishedArticleModel;
    private articleModel;
    private moderatedArticleModel;
    constructor(publishedArticleModel: Model<PublishedArticles>, articleModel: Model<SuggestedArticles>, moderatedArticleModel: Model<ModeratedArticles>);
    createArticle(articleDto: ArticleDto): Promise<import("mongoose").Document<unknown, {}, ModeratedArticles> & ModeratedArticles & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    editSuggestedArticle(articleDto: ArticleDto): Promise<import("mongoose").Document<unknown, {}, SuggestedArticles> & SuggestedArticles & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    confirmModeration(articleDto: ArticleDto): Promise<import("mongoose").Document<unknown, {}, ModeratedArticles> & ModeratedArticles & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findSuggestedByCustomId(customId: number): Promise<SuggestedArticles | null>;
    findAll(): Promise<SuggestedArticles[]>;
    findSuggestedArticle(): Promise<SuggestedArticles[]>;
    findPublishedArticle(): Promise<PublishedArticles[]>;
}
