import { Body, Controller, Post, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { ModeratedArticle, PublishedArticle, SuggestedArticle } from './schemas/article.schema';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ){}

    @Post('/create')
    populateArticle(@Body() articleDto: ArticleDto) {
        return this.articleService.createArticle(articleDto);
    }

    @Post('/publish')
    populatePublishedArticle(@Body() articleDto: ArticleDto) {
        return this.articleService.publishArticle(articleDto);
    }

    @Get()
    async getAllArticles(): Promise<SuggestedArticle[]> {
        return this.articleService.findAll();
    }

    @Get('/moderated')
    async getModeratedArticles(): Promise<ModeratedArticle[]> {
        return this.articleService.findAllModerated();
    }

    @Get('/published')
    async getPublishedArticle(): Promise<PublishedArticle[]> {
        return this.articleService.findAllPublished();
    }
}
