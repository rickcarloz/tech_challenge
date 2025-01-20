import { PostRepository } from "../repositories/post.repository";
export declare class PostsService {
    private readonly postRepository;
    constructor(postRepository: PostRepository);
    getAllPosts(limit: number, page: number): Promise<import("../schemas/models/posts.interface").IPost[]>;
    getPostById(id: string): Promise<import("../schemas/models/posts.interface").IPost>;
    createPost(post: any): Promise<import("../schemas/models/posts.interface").IPost>;
    updatePost(post: any): Promise<import("../schemas/models/posts.interface").IPost>;
    deletePost(id: string): Promise<import("../schemas/models/posts.interface").IPost>;
}
