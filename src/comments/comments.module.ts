import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { PostsService } from "../posts/posts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostEntity } from "../entities/post.entity";
import { CommentEntity } from "../entities/comment.entity";
import { PostsModule } from "../posts/posts.module";

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity]),
    PostsService, PostEntity, PostsService, PostsModule
  ],
  exports: [CommentsService, TypeOrmModule],
  providers: [CommentsService]
})
export class CommentsModule {}
