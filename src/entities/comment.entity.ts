import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";

@Entity()
export class CommentEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  post: PostEntity

  @Column()
  author: UserEntity

  @Column()
  text:string
}