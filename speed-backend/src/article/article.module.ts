/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SggstArticleSchema} from './schemas/suggest.schema';
import { SuggestedArticles } from './schemas/suggest.schema';
import { PublishedArticleSchema, PublishedArticles } from './schemas/published.schema';
import { ModeratedArticles, ModArticleSchema } from './schemas/moderated.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SuggestedArticles.name,
        schema: SggstArticleSchema,
      },
      {
        name: ModeratedArticles.name,
        schema: ModArticleSchema,
      },
      {
        name: PublishedArticles.name,
        schema: PublishedArticleSchema,
      },
    ]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}