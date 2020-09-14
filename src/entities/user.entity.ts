import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from "./post.entity";
import { CommentEntity} from "./comment.entity";

export enum RoleEnum{ Admin, Author }

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  role: RoleEnum

  @Column()
  posts: PostEntity

  @Column()
  comments: CommentEntity
}