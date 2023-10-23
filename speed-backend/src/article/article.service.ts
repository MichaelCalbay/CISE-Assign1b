import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SuggestedArticles } from './schemas/suggest.schema';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
import { PublishedArticles } from './schemas/published.schema';
import { ModeratedArticles } from './schemas/moderated.schema';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(PublishedArticles.name)
    private publishedArticleModel: Model<PublishedArticles>,
    @InjectModel(SuggestedArticles.name)
    private articleModel: Model<SuggestedArticles>,
    @InjectModel(ModeratedArticles.name)
    private moderatedArticleModel: Model<ModeratedArticles>,
  ) {}
  
  async publishArticle(articleDto: ArticleDto) {
    console.log("PUBLISH ARTICLE CALLED")
    const {
      title,
      authors,
      source,
      pubyear,
      doi,
      claim,
      evidence,
      research,
      SEPractise
    } = articleDto;
    console.log("ARTICLE DTO");
    console.log(articleDto);
    try {
      // Create the article in your database using the Mongoose model
      const publishedArticle = await this.publishedArticleModel.create({
        title,
        authors,
        source,
        pubyear,
        doi,
        claim,
        evidence,
        research,
        SEPractise
      });
  
      console.log("PUBLISHED ARTICLE");
      console.log(publishedArticle);
      return publishedArticle;
    } catch (error) {

      console.error('Error Publishing Article:', error);
  
      throw new HttpException('Unable to Publish Article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  

  async createArticle(articleDto: ArticleDto) {
    console.log("CREATE ARTICLE CALLED")
    const {
      title,
      authors,
      source,
      pubyear,
      doi,
      participant
    } = articleDto;

    try {
      // Create the article in your database using the Mongoose model
      const article = await this.articleModel.create({
        title,
        authors,
        source,
        pubyear,
        doi,
        participant
      });

      // Return the created article as a success response
      console.log(article);
      return article;
    } catch (error) {
      // Handle any errors that may occur during the creation
      // Log the error for debugging
      console.error('Error creating article:', error);

      // You can throw a custom error, return an error response, or handle the error as needed
      throw new HttpException('Unable to create article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<SuggestedArticles[]> {
    const articles = await this.articleModel.find();
    return articles;
  }

  async findAllModerated(): Promise<ModeratedArticles[]> {
    const articles = await this.moderatedArticleModel.find();
    return articles;
  }
}
