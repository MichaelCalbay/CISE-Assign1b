import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { SggstArticle } from './schemas/article.schema';
export declare class ArticleController {
    private articleService;
    constructor(articleService: ArticleService);
    populateArticle(articleDto: ArticleDto): Promise<any>;
    getAllArticles(): Promise<SggstArticle[]>;
}
