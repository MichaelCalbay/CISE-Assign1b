import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PublishedArticle, SuggestedArticle } from './schemas/article.schema';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(SuggestedArticle.name)
        private articleSuggestedModel: Model<SuggestedArticle>,
        @InjectModel(PublishedArticle.name)
        private articlePublishedModel: Model<PublishedArticle>,
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
          SEPractise
        } = articleDto;
      
        try {
          // Create the article in your database using the Mongoose model
          const article = await this.articlePublishedModel.create({
            title,
            authors,
            source,
            pubyear,
            doi,
            claim,
            evidence,
            participant,
            research,
            SEPractise
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
          SEPractise
        } = articleDto;
      
        try {
          // Create the article in your database using the Mongoose model
          const article = await this.articlePublishedModel.create({
            title,
            authors,
            source,
            pubyear,
            doi,
            claim,
            evidence,
            participant,
            research,
            SEPractise
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
      

    async findAll(): Promise<SuggestedArticle[]> {
        const articles = await this.articlePublishedModel.find();
        return  articles
    }

    async findSuggestedArticle(): Promise<SuggestedArticle[]> {
      const articles = await this.articleSuggestedModel.find();
      return  articles
  }

  async findPublishedArticle(): Promise<PublishedArticle[]> {
    const articles = await this.articlePublishedModel.find();
    return  articles
}
}


