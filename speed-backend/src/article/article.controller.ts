import { Body, Controller, Post, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { SuggestedArticles } from './schemas/suggest.schema';
//import { ModeratedArticles } from './schemas/moderated.schema';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ){}

    @Post('/create')
    populateArticle(@Body() articleDto: ArticleDto) {
        return this.articleService.createArticle(articleDto);
    }

    @Get('/moderate')
    async getSuggestedArticles(): Promise<SuggestedArticles[]> {
        return this.articleService.findSuggestedArticle();
    }

    @Post('/moderate')
    editSuggestion(@Body() articleDto: ArticleDto) {
        return this.articleService.editSuggestedArticle(articleDto);
    }

    @Post('/confirmModeration')
    confirmModeration(@Body() articleDto: ArticleDto) {
        return this.articleService.confirmModeration(articleDto);
    }
}
