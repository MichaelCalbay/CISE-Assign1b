import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { SuggestedArticles } from './schemas/suggest.schema';
import { ModeratedArticles } from './schemas/moderated.schema';
import { PublishedArticles } from './schemas/published.schema';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post('/create')
  populateArticle(@Body() articleDto: ArticleDto) {
    return this.articleService.createArticle(articleDto);
  }

  @Post('/publish')
  publishArticle(@Body() articleDto: ArticleDto) {
    return this.articleService.publishArticle(articleDto);
  }

  @Post('/confirmModeration')
  editSuggestion(@Body() articleDto: ArticleDto) {
    return this.articleService.confirmModeration(articleDto);
  }

  @Get('/published')
  async getPublishedArticles(): Promise<PublishedArticles[]> {
    return this.articleService.findPublishedArticle();
  }

  @Get()
  async getAllArticles(): Promise<SuggestedArticles[]> {
    return this.articleService.findAllSuggested();
  }

  @Get('/moderate')
  async getSuggestedArticles(): Promise<SuggestedArticles[]> {
    return this.articleService.findAllSuggested();
  }

  @Get('/moderated')
  async getModeratedArticles(): Promise<ModeratedArticles[]> {
    return this.articleService.findAllModerated();
  }

  @Delete(':customId')
  async deleteArticle(
    @Query('type') type: string,
    @Param('customId') customId: number,
  ) {
    let deletedArticle;

    if (type === 'moderated') {
      deletedArticle = await this.articleService.findModeratedByCustomId(
        customId,
      );
    } else if (type === 'suggested') {
      deletedArticle = await this.articleService.findSuggestedByCustomId(
        customId,
      );
    } else {
      return `Invalid deletion type: ${type}`;
    }

    if (!deletedArticle) {
      return `${type} article with customId ${customId} not found.`;
    }
  }
}
