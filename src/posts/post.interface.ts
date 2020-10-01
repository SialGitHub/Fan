import { User } from "../users/user.interface";

export interface Post{
  id: number;
  author: User;
  text: string;
}