import { Injectable } from "@nestjs/common";
import { PostRepository } from "../repositories/post.repository";

@Injectable()
export class PostsService {
    constructor(private readonly postRepository: PostRepository) { }

    async getAllPosts(limit: number, page: number) {
        return this.postRepository.getAllPosts(limit, page);
    }

    async getPostById(id: string) {
        return this.postRepository.getPostById(id);
    }

    async createPost(post) {
        return this.postRepository.createPost(post);
    }

    async updatePost(post) {
        return this.postRepository.updatePost(post);
    }

    async deletePost(id: string) {
        return this.postRepository.deletePost(id);
    }

    async searchPosts(keyword: string) {
        return this.postRepository.searchPosts(keyword);
    }
    
}