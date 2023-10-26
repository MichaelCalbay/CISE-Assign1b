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
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { SuggestedArticles } from './schemas/suggest.schema';
import { ModeratedArticles } from './schemas/moderated.schema';
import { PublishedArticles } from './schemas/published.schema';
export declare class ArticleController {
    private articleService;
    constructor(articleService: ArticleService);
    populateArticle(articleDto: ArticleDto): Promise<import("mongoose").Document<unknown, {}, SuggestedArticles> & SuggestedArticles & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    publishArticle(articleDto: ArticleDto): Promise<import("mongoose").Document<unknown, {}, PublishedArticles> & PublishedArticles & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    editSuggestion(articleDto: ArticleDto): Promise<import("mongoose").Document<unknown, {}, ModeratedArticles> & ModeratedArticles & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getPublishedArticles(): Promise<PublishedArticles[]>;
    getAllArticles(): Promise<SuggestedArticles[]>;
    getSuggestedArticles(): Promise<SuggestedArticles[]>;
    getModeratedArticles(): Promise<ModeratedArticles[]>;
    deleteArticle(type: string, customId: number): Promise<string | undefined>;
}
