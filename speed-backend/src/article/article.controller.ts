/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { PublishedArticle, SuggestedArticle } from './schemas/article.schema';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ){}

    @Post('/create')
    populateArticle(@Body() articleDto: ArticleDto) {
        return this.articleService.createArticle(articleDto);
    }

    @Get()
    async getArticles(): Promise<PublishedArticle[]> {
        return this.articleService.findAll();
    }

    @Get()
    async getPublishedArticles(): Promise<PublishedArticle[]> {
        return this.articleService.findPublishedArticle();
    }

    @Get('/moderate')
    async getSuggestedArticles(): Promise<SuggestedArticle[]> {
        return this.articleService.findSuggestedArticle();
    }

    @Post('/moderate')
    editSuggestion(@Body() articleDto: ArticleDto) {
        return this.articleService.editSuggestedArticle(articleDto);
    }
}
