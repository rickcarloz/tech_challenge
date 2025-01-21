import { IPost } from "../../schemas/models/posts.interface";
import { PostRepository } from "../post.repository";
import { Post } from "src/posts/schemas/posts.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class PostMongooseRepository implements PostRepository {
    constructor(
        @InjectModel(Post.name) private postModel: Model<IPost>) { }


    async getAllPosts(limit: number, page: number): Promise<IPost[]> {
        const offset = (page - 1) * limit
        return this.postModel.find().skip(offset).limit(limit).exec();
    }

    async getPostById(postId: string): Promise<IPost> {
        const post = await this.postModel.findById(postId).exec();
        if (!post) {
            throw new Error('Post not found');
        }
        return post.toObject() as IPost;
    }

    async createPost(post: IPost): Promise<IPost> {
        const createdPost = new this.postModel(post);
        const savedPost = await createdPost.save();
        return savedPost.toObject() as IPost;
    }

    async updatePost(post: IPost): Promise<IPost> {
        const updatedPost = await this.postModel.findByIdAndUpdate(post.id, post).exec();
        if (!updatedPost) {
            throw new Error('Post not found');
        }
        return updatedPost.toObject() as IPost;
    }

    async deletePost(postId: string): Promise<IPost> {
        const deletedPost = await this.postModel.findByIdAndDelete(postId).exec();
        if (!deletedPost) {
            throw new Error('Post not found');
        }
        return deletedPost.toObject() as IPost;
    }

    async searchPosts(keyword: string): Promise<IPost[]> {
        const regex = new RegExp(keyword, 'i');
        return this.postModel.find({
            $or: [{ title: regex }, { content: regex }],
        }).exec();
    }
    
}