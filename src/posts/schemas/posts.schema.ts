import { Prop, Schema } from "@nestjs/mongoose";
import { IPost } from "./models/posts.interface";
import mongoose, { HydratedDocument } from "mongoose";
import { SchemaFactory } from "@nestjs/mongoose";

export type PostDocument = HydratedDocument<Post>;
@Schema()
export class Post implements IPost {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    id?: string;
    @Prop()
    title: string;
    @Prop()
    content: string;
    @Prop()
    author: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);