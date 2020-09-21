import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { PostsService } from "./posts.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller()
export class PostController{
  constructor(
    private authService: AuthService,
    private postsService:PostsService
  ) {}

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

}