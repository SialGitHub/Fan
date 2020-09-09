import { Injectable } from '@nestjs/common';
import { Post } from "../interfaces/post.interface";
import { User } from "../interfaces/user.interface";
const uiid = () => {
  return Math.floor(Math.random()*9999999999);
}

@Injectable()
export class PostsService {
  private posts : Post[] = [];

  async createPost( author: User ,text: string ){
    const post: Post = {
      id: uiid(),
      author,
      text
    };
    this.posts.push(post)
    return post;
  }

  async getMyPosts( author: User) : Promise<Post[]>{
    return this.posts.filter( post => post.author.userId === author.userId );
  }

  async getPostById( id: number) : Promise<Post>{
    return this.posts.find( post => post.id === id)
  }

  async getAllPosts() : Promise<Post[]>{
    return this.posts;
  }

  async deletePost( author: User, id: number ) : Promise<Post> {
    let posts: Post[] = this.posts;
    const post: Post = this.posts.find(p => p.id === id)
    if(post && post.author.userId === author.userId) {
      posts = [...posts].filter(p => p.id !== id)
      this.posts = posts;
      return post;
    }
  }

  async updatePost( author: User, id: number, text: string ) : Promise<Post>{
    const post: Post = this.posts.find( p => p.id === id)
    if( post && post.author.userId === author.userId){
      this.posts = this.posts.map( p => p.id === post.id ? ({...post, text}): p)
      return {...post, text};
    }
  }
}
