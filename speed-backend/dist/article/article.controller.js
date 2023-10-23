"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const article_dto_1 = require("./dto/article.dto");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    populateArticle(articleDto) {
        return this.articleService.createArticle(articleDto);
    }
    async getPublishedArticles() {
        return this.articleService.findPublishedArticle();
    }
    async getSuggestedArticles() {
        return this.articleService.findSuggestedArticle();
    }
    editSuggestion(articleDto) {
        return this.articleService.confirmModeration(articleDto);
    }
    async deleteModeratedArticle(customId) {
        const deletedArticle = await this.articleService.findSuggestedByCustomId(customId);
        if (!deletedArticle) {
            return `Moderated article with customId ${customId} not found.`;
        }
    }
};
exports.ArticleController = ArticleController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.ArticleDto]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "populateArticle", null);
__decorate([
    (0, common_1.Get)('/published'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getPublishedArticles", null);
__decorate([
    (0, common_1.Get)('/moderate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getSuggestedArticles", null);
__decorate([
    (0, common_1.Post)('/confirmModeration'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.ArticleDto]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "editSuggestion", null);
__decorate([
    (0, common_1.Delete)(':customId'),
    __param(0, (0, common_1.Param)('customId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteModeratedArticle", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)('article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
//# sourceMappingURL=article.controller.js.map