import { Injectable } from '@nestjs/common';
// import { Post } from "../interfaces/post.interface";
// import { User } from "../interfaces/user.interface";
import { PostEntity} from "./post.entity";
import { UserEntity} from "../users/user.entity";

const uiid = () => {
  return Math.floor(Math.random()*9999999999);
}

@Injectable()
export class PostsService {
  private posts : PostEntity[] = [];

  async createPost( author: UserEntity ,text: string ){
    const post: { author: UserEntity; id: number; text: string } = {
      id: uiid(),
      author,
      text
    };
    if (post instanceof PostEntity) {
      this.posts.push(post);
    }
    return post;
  }

  async getMyPosts( author: UserEntity) : Promise<PostEntity[]>{
    return this.posts.filter( post => post.author.userId === author.userId );
  }

  async getPostById( id: number) : Promise<PostEntity>{
    return this.posts.find( post => post.id === id)
  }

  async getAllPosts() : Promise<PostEntity[]>{
    return this.posts;
  }

  async deletePost( author: UserEntity, id: number ) : Promise<PostEntity> {
    let posts: PostEntity[] = this.posts;
    const post: PostEntity = this.posts.find(p => p.id === id)
    if(post && post.author.userId === author.userId) {
      posts = [...posts].filter(p => p.id !== id)
      this.posts = posts;
      return post;
    }
  }

  async updatePost( author: UserEntity, id: number, text: string ) : Promise<PostEntity>{
    const post: PostEntity = this.posts.find( p => p.id === id)
    if( post && post.author.userId === author.userId){
      this.posts = this.posts.map( p => p.id === post.id ? ({...post, text}): p)
      return {...post, text};
    }
  }
}
