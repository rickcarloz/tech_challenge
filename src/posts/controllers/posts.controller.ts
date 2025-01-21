import { Controller, Delete, Get, Param, Post, Query, Body, Put, UsePipes } from "@nestjs/common";
import { PostsService } from "../services/posts.service";
import { IPost } from "../schemas/models/posts.interface";
import { z } from "zod";
import { ZodValidationPipe } from "src/shared/pipe/zod-validation.pipe";

const createPostSchema = z.object({
    title: z.string(),
    content: z.string(),
    author: z.string(),
});

const updatePostSchema = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});

type CreatePost = z.infer<typeof createPostSchema>;
type UpdatePost = z.infer<typeof updatePostSchema>;

@Controller('posts')
export class PostsController {constructor(private readonly postService: PostsService) {}

    @Get()
    async getAllPosts(@Query('limit')limit: number, @Query('page')page: number) {
        return this.postService.getAllPosts(limit, page);
    }

    @Get(':id') 
    async getPostById(@Param('id')id: string) {
        return this.postService.getPostById(id);
    }

    @UsePipes(new ZodValidationPipe(createPostSchema))
    @Post()
    async createPost(@Body() {title, content, author}: CreatePost) {
        return this.postService.createPost( {title, content, author});
    }

    @Put(':id')
    async updatePost(@Param('id') id: string, @Body(new ZodValidationPipe(updatePostSchema)) body: UpdatePost) {
        return this.postService.updatePost({ ...body, id });
    }    

    @Delete(':id')
    async deletePost(@Param('id') id: string) {
        return this.postService.deletePost(id);
    }
}
