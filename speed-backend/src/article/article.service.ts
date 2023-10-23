import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PublishedArticles } from './schemas/published.schema';
import { ModeratedArticles } from './schemas/moderated.schema';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
import { SuggestedArticles } from './schemas/suggest.schema';

@Injectable()
export class ArticleService {
    constructor(
      @InjectModel(PublishedArticles.name)
      private publishedArticleModel: Model<PublishedArticles>,
      @InjectModel(SuggestedArticles.name)
      private articleModel: Model<SuggestedArticles>,
      @InjectModel(ModeratedArticles.name)
      private moderatedArticleModel: Model<ModeratedArticles>,
    ){}

    async createArticle(articleDto: ArticleDto) {
        const {
          title,
          authors,
          source,
          pubyear,
          doi,
          claim,
          evidence,
          participant,
          research,
          SEPractise,
          decision
        } = articleDto;
      
        try {
          // Create the article in your database using the Mongoose model
          const article = await this.moderatedArticleModel.create({
            title,
            authors,
            source,
            pubyear,
            doi,
            claim,
            evidence,
            participant,
            research,
            SEPractise,
            decision
          });
      
          // Return the created article as a success response
          return article;
        } catch (error) {
          // Handle any errors that may occur during the creation
          // Log the error for debugging
          console.error('Error creating article:', error);
      
          // You can throw a custom error, return an error response, or handle the error as needed
          throw new HttpException('Unable to create article', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }

      async editSuggestedArticle(articleDto: ArticleDto) {
        const {
          title,
          authors,
          source,
          pubyear,
          doi,
          claim,
          evidence,
          participant,
          research,
          SEPractise,
          decision
        } = articleDto;
      
        try {
          // Create the article in your database using the Mongoose model
          const article = await this.articleModel.create({
            title,
            authors,
            source,
            pubyear,
            doi,
            claim,
            evidence,
            participant,
            research,
            SEPractise,
            decision
          });
      
          // Return the created article as a success response
          return article;
        } catch (error) {
          // Handle any errors that may occur during the creation
          // Log the error for debugging
          console.error('Error creating article:', error);
      
          // You can throw a custom error, return an error response, or handle the error as needed
          throw new HttpException('Unable to create article', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
      async confirmModeration(articleDto: ArticleDto) {
        console.log("CONFIRM ARTICLE MODERATION CALLED")
        const {
          title,
          authors,
          source,
          pubyear,
          doi,
          decision
        } = articleDto;
        console.log("ARTICLE DTO");
        console.log(articleDto);
        try {
          // Create the article in your database using the Mongoose model
          const moderatedArticle = await this.moderatedArticleModel.create({
            title,
            authors,
            source,
            pubyear,
            doi,
            decision
          });
      
          console.log("MODERATED ARTICLE");
          console.log(moderatedArticle);
          return moderatedArticle;
        } catch (error) {
    
          console.error('Error Publishing Article:', error);
      
          throw new HttpException('Unable to Publish Article', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }  



    async findAll(): Promise<SuggestedArticles[]> {
        const articles = await this.articleModel.find();
        return  articles
    }

    async findSuggestedArticle(): Promise<SuggestedArticles[]> {
      const articles = await this.articleModel.find();
      return  articles
  }

  async findPublishedArticle(): Promise<PublishedArticles[]> {
    const articles = await this.publishedArticleModel.find();
    return  articles
}
}


