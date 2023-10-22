import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { getModelToken } from '@nestjs/mongoose'; // Import getModelToken

describe('ArticleController', () => {
  let articleController: ArticleController;
  let articleService: ArticleService;
  const mockArticles = [
    // Mock articles
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        ArticleService,
        {
          provide: getModelToken('SuggestedArticle'), // Replace 'SuggestedArticle' with your actual model name
          useValue: {}, // Provide an empty object or mock for the model
        },
      ],
    }).compile();

    articleController = module.get<ArticleController>(ArticleController);
    articleService = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(articleController).toBeDefined();
    expect(articleService).toBeDefined();
  });

  it('should return all articles', async () => {
    // Mock the ArticleService method
    jest.spyOn(articleService, 'findAll').mockResolvedValue(mockArticles);

    // Call the controller method
    const articles = await articleController.getAllArticles();

    // Verify the result
    expect(articles).toEqual(mockArticles);
  });

  // Add more test cases for other controller methods as needed

  afterEach(() => {
    jest.clearAllMocks();
  });
});
