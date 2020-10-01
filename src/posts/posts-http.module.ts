import { Module } from '@nestjs/common';
import { PostsService} from "./posts.service";
import { PostsModule} from "./posts.module";
import { PostController} from "./post.controller";

@Module({
  imports: [PostsModule],
  providers: [],
  controllers: [PostController]
})
export class PostsHttpModule {}