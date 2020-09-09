import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from "./user.entity";
import { CommentEntity} from "./comment.entity";

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