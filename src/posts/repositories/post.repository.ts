import { IPost } from "../schemas/models/posts.interface";

export abstract class PostRepository {
    abstract getAllPosts(limit: number, page: number): Promise<IPost[]>;
    abstract getPostById(productId: string): Promise<IPost>;
    abstract createPost(post: IPost): Promise<IPost>;
    abstract updatePost(post: IPost): Promise<IPost>;
    abstract deletePost(productId: string): Promise<IPost>;
    abstract searchPosts(keyword: string): Promise<IPost[]>;
}