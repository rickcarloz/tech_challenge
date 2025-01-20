"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const posts_controller_1 = require("./controllers/posts.controller");
const posts_service_1 = require("./services/posts.service");
const posts_schema_1 = require("./schemas/posts.schema");
const post_repository_1 = require("./repositories/post.repository");
const post_mongoose_repository_1 = require("./repositories/mongoose/post.mongoose.repository");
let PostsModule = class PostsModule {
};
exports.PostsModule = PostsModule;
exports.PostsModule = PostsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: posts_schema_1.Post.name, schema: posts_schema_1.PostSchema }])],
        providers: [{
                provide: post_repository_1.PostRepository,
                useClass: post_mongoose_repository_1.PostMongooseRepository
            },
            posts_service_1.PostsService],
        controllers: [posts_controller_1.PostsController]
    })
], PostsModule);
//# sourceMappingURL=posts.module.js.map