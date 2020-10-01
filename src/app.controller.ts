import { Controller, Get, Request, Post,
  UseGuards, Body, Delete, Req, Param, Patch } from "@nestjs/common";
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { PostsService} from "./posts/posts.service";
import { CommentsService} from "./comments/comments.service";

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private postsService:PostsService,
    private commentService:CommentsService
  ) {}

}
