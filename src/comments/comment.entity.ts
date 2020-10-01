import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne } from "typeorm";
import { UserEntity } from "../users/user.entity";
import { PostEntity } from "../posts/post.entity";

@Entity()
export class CommentEntity{
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne( type1 => UserEntity)
  @JoinColumn()
  author: UserEntity

  @Column()
  text: string

  @ManyToOne( type => PostEntity, post => post.comments)
  post: PostEntity
}