import { PostsService } from "../services/posts.service";
import { IPost } from "../schemas/models/posts.interface";
import { z } from "zod";
declare const createPostSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    author: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    author: string;
}, {
    title: string;
    content: string;
    author: string;
}>;
declare const updatePostSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
}>;
type CreatePost = z.infer<typeof createPostSchema>;
type UpdatePost = z.infer<typeof updatePostSchema>;
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    getAllPosts(limit: number, page: number): Promise<IPost[]>;
    getPostById(id: string): Promise<IPost>;
    createPost({ title, content, author }: CreatePost): Promise<IPost>;
    updatePost(id: string, body: UpdatePost): Promise<IPost>;
    deletePost(id: string): Promise<IPost>;
}
export {};
