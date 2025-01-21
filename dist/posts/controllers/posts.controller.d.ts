import { PostsService } from "../services/posts.service";
import { IPost } from "../schemas/models/posts.interface";
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    getAllPosts(limit: number, page: number): Promise<IPost[]>;
    searchPosts(keyword: string): Promise<IPost[]>;
    getPostById(id: string): Promise<IPost>;
    createPost(post: IPost): Promise<IPost>;
    updatePost(id: string, post: Partial<IPost>): Promise<IPost>;
    deletePost(id: string): Promise<IPost>;
}
