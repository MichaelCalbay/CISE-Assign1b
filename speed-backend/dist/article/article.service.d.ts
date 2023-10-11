import { Article } from './schemas/article.schema';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
export declare class ArticleService {
    private articleModel;
    constructor(articleModel: Model<Article>);
    createArticle(articleDto: ArticleDto): Promise<any>;
    findAll(): Promise<Article[]>;
}
