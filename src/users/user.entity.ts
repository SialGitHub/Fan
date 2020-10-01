import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany } from 'typeorm';
import { IsEmail } from 'class-validator';
import { PostEntity } from "../posts/post.entity";
import { CommentEntity} from "../comments/comment.entity";

export enum RoleEnum{ Admin, Author }

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number

  @Column()
  username: string

  @IsEmail()
  @Column()
  email: string

  @Column()
  password: string

  @Column()
  role: RoleEnum

  @OneToMany( type => PostEntity, post => post)
  posts: PostEntity[]

  @OneToMany( type => CommentEntity, comment => comment)
  comments: CommentEntity[]
}