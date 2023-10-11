import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { Article } from './schemas/article.schema';
export declare class ArticleController {
    private articleService;
    constructor(articleService: ArticleService);
    populateArticle(articleDto: ArticleDto): Promise<any>;
    getAllArticles(): Promise<Article[]>;
}
