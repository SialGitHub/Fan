import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { PostsService } from "../posts/posts.service";

@Module({
  exports: [CommentsService],
  providers: [CommentsService, PostsService]
})
export class CommentsModule {}
