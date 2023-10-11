import { Injectable, NotFoundException } from '@nestjs/common';
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
        } = articleDto

        const article = await this.articleModel.create({
            title,
            authors,
            source,
            pubyear,
            doi,
            claim,
            evidence,
        })
    }

    async findAll(): Promise<Article[]> {
        const articles = await this.articleModel.find();
        return  articles
    }
}


