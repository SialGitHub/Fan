import { Post } from "../posts/post.interface";
import { User } from "../users/user.interface";

export interface Comment{
  id:number;
  post:Post;
  author: User;
  text: string;
}