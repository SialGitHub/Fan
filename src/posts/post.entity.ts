import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn } from "typeorm";
import { UserEntity } from "../users/user.entity";
import { CommentEntity } from "../comments/comment.entity";

@Entity()
export class PostEntity{
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne( type => UserEntity)
  @JoinColumn()
  author: UserEntity

  @Column()
  text: string

  @OneToMany( type => CommentEntity, comment => comment.post)
  comments: CommentEntity[]
}