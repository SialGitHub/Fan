import { Inject, Injectable } from "@nestjs/common";
import { User } from "../users/user.interface";
import { Post } from "../posts/post.interface";
import { PostsService } from "../posts/posts.service";
import { Comment } from "./comment.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CommentEntity } from "../entities/comment.entity";
const uiid = () => {
  return Math.floor(Math.random()*9999999999);
}

@Injectable()
export class CommentsService {
  private comments: Comment[] = [];
  constructor(
    private postsService:PostsService,
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>
    ) {
  }

  async createOne( author: User, postId: number, text: string){
    const post: Post = await this.postsService.getPostById(postId);
    const comment: Comment = {
      id: uiid(),
      post,
      author,
      text
    };
    this.comments.push(comment);
    return comment;
  }

  async getCommentById( id: number) : Promise<Comment>{
    return this.comments.find( comment => comment.id === id)
  }

  async getAllMyComments( author: User) : Promise<Comment[]>{
    return this.comments.filter(comment => comment.author.userId === author.userId);
  }

  async getAllComments() : Promise<Comment[]>{
    return this.comments;
  }

  async deleteComment( author: User, id: number) : Promise<Comment> {
    let comments : Comment[] = this.comments;
    const comment : Comment = this.comments.find( com => com.id === id)
    if ( comment && comment.author.userId === author.userId){
      comments = [...comments].filter( com => com.id !== id);
      this.comments = comments;
      return comment;
    }
  }

  async updateComment( author: User, id: number, text: string) : Promise<Comment> {
    const comment: Comment = this.comments.find( c => c.id === id );
    if( comment && comment.author.userId === author.userId){
      this.comments = this.comments.map( c => c.id === comment.id ? ({...comment, text}): c);
      return {...comment, text};
    }
  }
}
