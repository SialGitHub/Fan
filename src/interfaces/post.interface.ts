import { User } from "./user.interface";

export interface Post{
  id: number;
  author: User;
  text: string;
}