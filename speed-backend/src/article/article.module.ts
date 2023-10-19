import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SggstArticleSchema } from './schemas/article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'SuggestedArticle',
      schema: SggstArticleSchema
    }]),
    MongooseModule.forFeature([{
      name: 'ModeratedArticle',
      schema: SggstArticleSchema
    }]),
    MongooseModule.forFeature([{
      name: 'PublishedArticle',
      schema: SggstArticleSchema
    }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}

