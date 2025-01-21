// import { Test, TestingModule } from '@nestjs/testing';
// import { PostsController } from './posts.controller';
// import { PostsService } from '../services/posts.service';
// import { ZodValidationPipe } from 'src/shared/pipe/zod-validation.pipe';
// import { NotFoundException } from '@nestjs/common';

// describe('PostsController', () => {
//     let controller: PostsController;
//     let service: PostsService;

//     const mockPostsService = {
//         getAllPosts: jest.fn(),
//         getPostById: jest.fn(),
//         createPost: jest.fn(),
//         updatePost: jest.fn(),
//         deletePost: jest.fn(),
//     };

//     beforeEach(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             controllers: [PostsController],
//             providers: [
//                 {
//                     provide: PostsService,
//                     useValue: mockPostsService,
//                 },
//             ],
//         }).compile();

//         controller = module.get<PostsController>(PostsController);
//         service = module.get<PostsService>(PostsService);
//     });

//     it('should be defined', () => {
//         expect(controller).toBeDefined();
//     });

//     describe('getAllPosts', () => {
//         it('should return an array of posts', async () => {
//             const result = [{ id: '1', title: 'Test Post', content: 'Test Content', author: 'Test Author' }];
//             jest.spyOn(service, 'getAllPosts').mockResolvedValue(result);

//             expect(await controller.getAllPosts(10, 1)).toBe(result);
//         });
//     });

//     describe('getPostById', () => {
//         it('should return a single post', async () => {
//             const result = { id: '1', title: 'Test Post', content: 'Test Content', author: 'Test Author' };
//             jest.spyOn(service, 'getPostById').mockResolvedValue(result);

//             expect(await controller.getPostById('1')).toBe(result);
//         });

//         it('should throw NotFoundException if post not found', async () => {
//             jest.spyOn(service, 'getPostById').mockResolvedValue(null);

//             await expect(controller.getPostById('1')).rejects.toThrow(NotFoundException);
//         });
//     });

//     describe('createPost', () => {
//         it('should create a new post', async () => {
//             const newPost = { title: 'New Post', content: 'New Content', author: 'New Author' };
//             const result = { id: '1', ...newPost };
//             jest.spyOn(service, 'createPost').mockResolvedValue(result);

//             expect(await controller.createPost(newPost)).toBe(result);
//         });
//     });

//     describe('updatePost', () => {
//         it('should update an existing post', async () => {
//             const updateData = { title: 'Updated Title' };
//             const result = { id: '1', ...updateData };
//             jest.spyOn(service, 'updatePost').mockResolvedValue(result);

//             expect(await controller.updatePost('1', updateData)).toBe(result);
//         });
//     });

//     describe('deletePost', () => {
//         it('should delete a post', async () => {
//             const result = { id: '1', title: 'Test Post', content: 'Test Content', author: 'Test Author' };
//             jest.spyOn(service, 'deletePost').mockResolvedValue(result);

//             expect(await controller.deletePost('1')).toBe(result);
//         });
//     });
// });