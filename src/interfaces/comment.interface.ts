import { Post } from "./post.interface";
import { User } from "./user.interface";

export interface Comment{
  id:number;
  post:Post;
  author: User;
  text: string;
}