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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const post_repository_1 = require("../repositories/post.repository");
let PostsService = class PostsService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async getAllPosts(limit, page) {
        return this.postRepository.getAllPosts(limit, page);
    }
    async getPostById(id) {
        return this.postRepository.getPostById(id);
    }
    async createPost(post) {
        return this.postRepository.createPost(post);
    }
    async updatePost(post) {
        return this.postRepository.updatePost(post);
    }
    async deletePost(id) {
        return this.postRepository.deletePost(id);
    }
    async searchPosts(keyword) {
        return this.postRepository.searchPosts(keyword);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_repository_1.PostRepository])
], PostsService);
//# sourceMappingURL=posts.service.js.map