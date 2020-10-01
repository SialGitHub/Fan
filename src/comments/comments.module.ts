import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { PostsService } from "../posts/posts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostEntity } from "../posts/post.entity";
import { CommentEntity } from "./comment.entity";
import { PostsModule } from "../posts/posts.module";

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity])],
  exports: [TypeOrmModule],
  providers: [CommentsService]
})
export class CommentsModule {}
