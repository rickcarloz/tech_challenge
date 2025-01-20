import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';
import { Post, PostSchema } from './schemas/posts.schema';
import { PostRepository } from './repositories/post.repository';
import { PostMongooseRepository } from './repositories/mongoose/post.mongoose.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  providers: [{
    provide: PostRepository,
    useClass: PostMongooseRepository
  },
    PostsService],
  controllers: [PostsController]
})
export class PostsModule { }
