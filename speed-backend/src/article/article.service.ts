import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './schemas/article.schema';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article.name)
        private articleModel: Model<Article>,
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
          });
      
          // Return the created article as a success response
          return article;
        } catch (error) {
          // Handle any errors that may occur during the creation
          // Log the error for debugging
          console.error('Error creating article:', error);
      
          // You can throw a custom error, return an error response, or handle the error as needed
          // For example, to return an error response:
          throw new HttpException('Unable to create article', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
      

    async findAll(): Promise<Article[]> {
        const articles = await this.articleModel.find();
        return  articles
    }
}

