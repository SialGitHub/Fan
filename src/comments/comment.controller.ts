import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { PostsService } from "../posts/posts.service";
import { CommentsService } from "./comments.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller()
export class CommentController {
  constructor(
    private authService: AuthService,
    private postsService:PostsService,
    private commentService:CommentsService
  ) {}

  // // create my comment
  // @UseGuards(JwtAuthGuard)
  // @Post('post/create/comment')
  // createComment(@Request() req, @Param("id") id:string,
  //               @Body() body: {text:string}) {
  //   return this.commentService.createOne(req.user, +id, body.text);
  // }

  // get all my comments
  @UseGuards(JwtAuthGuard)
  @Get('comments/me')
  getMyComments(@Request() req) {
    return this.commentService.getAllMyComments(req.user);
  }

  //get all comments
  @Get('comments')
  getComments(){
    return this.commentService.getAllComments();
  }

  //delete my comment
  @UseGuards(JwtAuthGuard)
  @Delete('comment/:id')
  deleteMyPost(@Request() req, @Param("id") id:string){
    return this.commentService.deleteComment( req.user, +id);
  }

  //update my comment
  @UseGuards(JwtAuthGuard)
  @Delete('comment/:id')
  updateMyPost(@Request() req, @Param("id") id:string,
               @Body() body: { text:string}){
    return this.commentService.updateComment( req.user, +id, body.text);
  }

}