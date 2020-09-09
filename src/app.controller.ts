import { Controller, Get, Request, Post,
  UseGuards, Body, Delete, Req, Param, Patch } from "@nestjs/common";
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { PostsService } from "./posts/posts.service";
import { CommentsService } from "./comments/comments.service";

@Controller()
export class AppController {
  constructor(private authService: AuthService,
              private postsService:PostsService,
              private commentService:CommentsService
  ) {}

  // auth user
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // get all users
  @Get('auth/users')
  getUsers(){
    return this.authService.getAllUsers();
  }

  // get my profile
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // create my post
  @UseGuards(JwtAuthGuard)
  @Post('posts/create')
  createPost(@Request() req, @Body() body: {text:string}) {
    return this.postsService.createPost( req.user, body.text);
  }

  // get all posts
  @Get('posts')
  getPosts(){
    return this.postsService.getAllPosts();
  }

  // get all my posts
  @UseGuards(JwtAuthGuard)
  @Get('posts/me')
  getMyPosts( @Request() req){
    return this.postsService.getMyPosts(req.user);
  }

  // delete my post
  @UseGuards(JwtAuthGuard)
  @Delete('posts/:id')
  deletePost( @Request() req, @Param("id") id:string){
    return this.postsService.deletePost(req.user, +id);
  }

  // update my post
  @UseGuards(JwtAuthGuard)
  @Patch('posts/:id')
  updatePost( @Request() req, @Param("id") id:string,
              @Body() body: {text:string}){
    return this.postsService.updatePost(req.user, +id, body.text );
  }

  // create my comment
  @UseGuards(JwtAuthGuard)
  @Post('post/create/comment')
  createComment(@Request() req, @Param("id") id:string,
                @Body() body: {text:string}) {
    return this.commentService.createOne(req.user, +id, body.text);
  }

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
