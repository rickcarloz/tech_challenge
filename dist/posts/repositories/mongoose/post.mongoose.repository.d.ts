import { IPost } from "../../schemas/models/posts.interface";
import { PostRepository } from "../post.repository";
import { Model } from "mongoose";
export declare class PostMongooseRepository implements PostRepository {
    private postModel;
    constructor(postModel: Model<IPost>);
    getAllPosts(limit: number, page: number): Promise<IPost[]>;
    getPostById(postId: string): Promise<IPost>;
    createPost(post: IPost): Promise<IPost>;
    updatePost(post: IPost): Promise<IPost>;
    deletePost(postId: string): Promise<IPost>;
    searchPosts(keyword: string): Promise<IPost[]>;
}
