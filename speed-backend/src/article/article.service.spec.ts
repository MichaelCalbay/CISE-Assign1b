import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { getModelToken } from '@nestjs/mongoose';
import { ArticleDto } from './dto/article.dto';
import { SuggestedArticle } from './schemas/article.schema';

describe('ArticleController', () => {
  let articleController: ArticleController;
  let articleService: ArticleService;

  const mockArticleModel = {
    create: jest.fn(),
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        ArticleService,
        {
          provide: getModelToken(SuggestedArticle.name),
          useValue: mockArticleModel,
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
    const mockArticles = []; // Add mock articles as needed

    jest.spyOn(articleService, 'findAll').mockResolvedValue(mockArticles);

    const articles = await articleController.getAllArticles();

    expect(articles).toEqual(mockArticles);
  });

  it('should create an article', async () => {
    const articleDto: ArticleDto = {
      title: '',
      authors: [],
      source: '',
      pubyear: 0,
      doi: '',
      claim: '',
      evidence: '',
      participant: '',
      research: '',
      SEPractise: ''
    };

    const mockCreatedArticle = { _id: 'some-id', ...articleDto };
    mockArticleModel.create.mockResolvedValue(mockCreatedArticle);

    const createdArticle = await articleController.populateArticle(articleDto);

    expect(createdArticle).toEqual(mockCreatedArticle);
  });

  it('should handle createArticle error', async () => {
    const articleDto: ArticleDto = {
      title: '',
      authors: [],
      source: '',
      pubyear: 0,
      doi: '',
      claim: '',
      evidence: '',
      participant: '',
      research: '',
      SEPractise: ''
    };

    const mockError = new Error('Mock error message');
    mockArticleModel.create.mockRejectedValue(mockError);

    // Use try-catch to handle the expected error
    try {
      await articleController.populateArticle(articleDto);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.response).toEqual('Unable to create article');
      expect(error.getStatus()).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  });

  // Write similar tests for other methods in your controller as needed

  afterEach(() => {
    jest.clearAllMocks();
  });
});
