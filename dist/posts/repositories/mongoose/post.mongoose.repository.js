"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMongooseRepository = void 0;
const posts_schema_1 = require("../../schemas/posts.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PostMongooseRepository = class PostMongooseRepository {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async getAllPosts(limit, page) {
        const offset = (page - 1) * limit;
        return this.postModel.find().skip(offset).limit(limit).exec();
    }
    async getPostById(postId) {
        const post = await this.postModel.findById(postId).exec();
        if (!post) {
            throw new Error('Post not found');
        }
        return post.toObject();
    }
    async createPost(post) {
        const createdPost = new this.postModel(post);
        const savedPost = await createdPost.save();
        return savedPost.toObject();
    }
    async updatePost(post) {
        const updatedPost = await this.postModel.findByIdAndUpdate(post.id, post).exec();
        if (!updatedPost) {
            throw new Error('Post not found');
        }
        return updatedPost.toObject();
    }
    async deletePost(postId) {
        const deletedPost = await this.postModel.findByIdAndDelete(postId).exec();
        if (!deletedPost) {
            throw new Error('Post not found');
        }
        return deletedPost.toObject();
    }
};
exports.PostMongooseRepository = PostMongooseRepository;
exports.PostMongooseRepository = PostMongooseRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(posts_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostMongooseRepository);
//# sourceMappingURL=post.mongoose.repository.js.map