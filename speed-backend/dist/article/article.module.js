"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const common_1 = require("@nestjs/common");
const article_controller_1 = require("./article.controller");
const article_service_1 = require("./article.service");
const mongoose_1 = require("@nestjs/mongoose");
const suggest_schema_1 = require("./schemas/suggest.schema");
const published_schema_1 = require("./schemas/published.schema");
const moderated_schema_1 = require("./schemas/moderated.schema");
let ArticleModule = class ArticleModule {
};
exports.ArticleModule = ArticleModule;
exports.ArticleModule = ArticleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: suggest_schema_1.SuggestedArticles.name,
                    schema: suggest_schema_1.SggstArticleSchema,
                },
                {
                    name: moderated_schema_1.ModeratedArticles.name,
                    schema: moderated_schema_1.ModArticleSchema,
                },
                {
                    name: published_schema_1.PublishedArticles.name,
                    schema: published_schema_1.PublishedArticleSchema,
                },
            ]),
        ],
        controllers: [article_controller_1.ArticleController],
        providers: [article_service_1.ArticleService]
    })
], ArticleModule);
//# sourceMappingURL=article.module.js.map