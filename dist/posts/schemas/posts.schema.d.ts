import { IPost } from "./models/posts.interface";
import mongoose, { HydratedDocument } from "mongoose";
export type PostDocument = HydratedDocument<Post>;
export declare class Post implements IPost {
    id?: string;
    title: string;
    content: string;
    author: string;
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, mongoose.Document<unknown, any, Post> & Post & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Post, mongoose.Document<unknown, {}, mongoose.FlatRecord<Post>> & mongoose.FlatRecord<Post> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
