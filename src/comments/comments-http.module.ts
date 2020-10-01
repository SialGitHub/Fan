import { Module } from '@nestjs/common';
import { CommentsService} from "./comments.service";
import { CommentsModule} from "./comments.module";
import { CommentController } from "./comment.controller";

@Module({
  imports: [CommentsModule],
  providers: [],
  controllers: [CommentController]
})
export class CommentsHttpModule {}