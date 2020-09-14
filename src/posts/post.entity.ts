import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from "../users/user.entity";
import { CommentEntity} from "../comments/comment.entity";

@Entity()
export class PostEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  author: UserEntity

  @Column()
  text: string

  @Column()
  comments: CommentEntity
}