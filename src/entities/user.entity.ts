import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from "./post.entity";
import { CommentEntity} from "./comment.entity";

export enum RoleEnum{ Admin, Author }

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: RoleEnum;

  @Column()
  posts: PostEntity

  @Column()
  comments: CommentEntity
}