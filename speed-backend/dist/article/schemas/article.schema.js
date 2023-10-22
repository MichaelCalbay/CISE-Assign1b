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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = exports.ModArticleSchema = exports.SggstArticleSchema = exports.PublishedArticle = exports.ModeratedArticle = exports.SuggestedArticle = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let SuggestedArticle = class SuggestedArticle {
};
exports.SuggestedArticle = SuggestedArticle;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SuggestedArticle.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], SuggestedArticle.prototype, "authors", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SuggestedArticle.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], SuggestedArticle.prototype, "pubyear", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SuggestedArticle.prototype, "doi", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SuggestedArticle.prototype, "claim", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SuggestedArticle.prototype, "evidence", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SuggestedArticle.prototype, "participant", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SuggestedArticle.prototype, "research", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SuggestedArticle.prototype, "SEPractise", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SuggestedArticle.prototype, "Decision", void 0);
exports.SuggestedArticle = SuggestedArticle = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], SuggestedArticle);
class ModeratedArticle {
}
exports.ModeratedArticle = ModeratedArticle;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModeratedArticle.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], ModeratedArticle.prototype, "authors", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModeratedArticle.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModeratedArticle.prototype, "pubyear", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModeratedArticle.prototype, "doi", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModeratedArticle.prototype, "claim", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModeratedArticle.prototype, "evidence", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModeratedArticle.prototype, "participant", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModeratedArticle.prototype, "research", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModeratedArticle.prototype, "SEPractise", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModeratedArticle.prototype, "Decision", void 0);
class PublishedArticle {
}
exports.PublishedArticle = PublishedArticle;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PublishedArticle.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], PublishedArticle.prototype, "authors", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PublishedArticle.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PublishedArticle.prototype, "pubyear", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PublishedArticle.prototype, "doi", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PublishedArticle.prototype, "claim", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PublishedArticle.prototype, "evidence", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PublishedArticle.prototype, "participant", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PublishedArticle.prototype, "research", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PublishedArticle.prototype, "SEPractise", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PublishedArticle.prototype, "Decision", void 0);
exports.SggstArticleSchema = mongoose_1.SchemaFactory.createForClass(SuggestedArticle);
exports.ModArticleSchema = mongoose_1.SchemaFactory.createForClass(ModeratedArticle);
exports.ArticleSchema = mongoose_1.SchemaFactory.createForClass(PublishedArticle);
//# sourceMappingURL=article.schema.js.map