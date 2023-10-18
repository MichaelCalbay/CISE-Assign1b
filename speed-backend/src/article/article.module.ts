import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SggstArticleSchema } from './schemas/article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'SggstArticle',
      schema: SggstArticleSchema
    }]),
    MongooseModule.forFeature([{
      name: 'ModArticle',
      schema: SggstArticleSchema
    }]),
    MongooseModule.forFeature([{
      name: 'Article',
      schema: SggstArticleSchema
    }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}

