import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from '../services/posts.service';

describe('PostsController', () => {
  let postsController: PostsController;
  let postsService: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        {
          provide: PostsService,
          useValue: {
            getAllPosts: jest.fn().mockResolvedValue([
              { id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' },
              { id: '2', title: 'Post 2', content: 'Content 2', author: 'Author 2' },
            ]),
            searchPosts: jest.fn().mockResolvedValue([
              { id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' },
            ]),
            getPostById: jest.fn().mockResolvedValue({ id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' }),
            createPost: jest.fn().mockResolvedValue({ id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' }),
            updatePost: jest.fn().mockResolvedValue({ id: '1', title: 'Updated Post 1', content: 'Updated Content 1', author: 'Author 1' }),
            deletePost: jest.fn().mockResolvedValue({ id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' }),
          },
        },
      ],
    }).compile();

    postsController = module.get<PostsController>(PostsController);
    postsService = module.get<PostsService>(PostsService);
  });

  describe('getAllPosts', () => {
    it('should return a list of posts', async () => {
      const result = await postsController.getAllPosts(10, 1);

      expect(postsService.getAllPosts).toHaveBeenCalledWith(10, 1);
      expect(result).toEqual([
        { id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' },
        { id: '2', title: 'Post 2', content: 'Content 2', author: 'Author 2' },
      ]);
    });
  });

  describe('searchPosts', () => {
    it('should return posts that match the search keyword', async () => {
      const result = await postsController.searchPosts('Post 1');

      expect(postsService.searchPosts).toHaveBeenCalledWith('Post 1');
      expect(result).toEqual([
        { id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' },
      ]);
    });
  });

  describe('getPostById', () => {
    it('should return a post by id', async () => {
      const result = await postsController.getPostById('1');

      expect(postsService.getPostById).toHaveBeenCalledWith('1');
      expect(result).toEqual({ id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' });
    });
  });

  describe('createPost', () => {
    it('should create a new post', async () => {
      const post = { title: 'Post 1', content: 'Content 1', author: 'Author 1' };
      const result = await postsController.createPost(post);

      expect(postsService.createPost).toHaveBeenCalledWith(post);
      expect(result).toEqual({ id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' });
    });
  });

  describe('updatePost', () => {
    it('should update an existing post', async () => {
      const post = { title: 'Updated Post 1', content: 'Updated Content 1' };
      const result = await postsController.updatePost('1', post);

      expect(postsService.updatePost).toHaveBeenCalledWith({ ...post, id: '1' });
      expect(result).toEqual({ id: '1', title: 'Updated Post 1', content: 'Updated Content 1', author: 'Author 1' });
    });
  });

  describe('deletePost', () => {
    it('should delete a post by id', async () => {
      const result = await postsController.deletePost('1');

      expect(postsService.deletePost).toHaveBeenCalledWith('1');
      expect(result).toEqual({ id: '1', title: 'Post 1', content: 'Content 1', author: 'Author 1' });
    });
  });
});
