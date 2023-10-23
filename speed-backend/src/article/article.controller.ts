/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get , Delete, Param} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { SuggestedArticles } from './schemas/suggest.schema';
//import { ModeratedArticles } from './schemas/moderated.schema';
import { PublishedArticles } from './schemas/published.schema';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ){}

    @Post('/create')
    populateArticle(@Body() articleDto: ArticleDto) {
        return this.articleService.createArticle(articleDto);
    }

    @Get('/published')
    async getPublishedArticles(): Promise<PublishedArticles[]> {
        return this.articleService.findPublishedArticle();
    }

    @Get('/moderate')
    async getSuggestedArticles(): Promise<SuggestedArticles[]> {
        return this.articleService.findSuggestedArticle();
    }

    @Post('/confirmModeration')
    editSuggestion(@Body() articleDto: ArticleDto) {
        return this.articleService.confirmModeration(articleDto);
    }

    @Delete(':coolId')
    async deleteSubmittedArticle(@Param('coolId') coolId: number) {
    const deletedArticle = await this.articleService.findSubmissionByCoolId(
      coolId,
    );

    if (!deletedArticle) {
      return `Moderated article with customId ${coolId} not found.`;
    }
  }
}
