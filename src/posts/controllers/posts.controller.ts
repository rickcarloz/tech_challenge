import { Controller, Delete, Get, Param, Post, Query, Body, Put } from "@nestjs/common";
import { PostsService } from "../services/posts.service";
import { IPost } from "../schemas/models/posts.interface";

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) { }

    @Get()
    async getAllPosts(@Query('limit') limit: number, @Query('page') page: number) {
        return this.postService.getAllPosts(limit, page);
    }

    @Get('search')
    async searchPosts(@Query('keyword') keyword: string) {
        return this.postService.searchPosts(keyword);
    }

    @Get(':id')
    async getPostById(@Param('id') id: string) {
        return this.postService.getPostById(id);
    }

    @Post()
    async createPost(@Body() post: IPost) {
        return this.postService.createPost(post);
    }

    @Put(':id')
    async updatePost(@Param('id') id: string, @Body() post: Partial<IPost>) {
        return this.postService.updatePost({ ...post, id });
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string) {
        return this.postService.deletePost(id);
    }
}
