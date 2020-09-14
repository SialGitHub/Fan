import { Module } from '@nestjs/common';
import { AppController} from "./app.controller";
import { AppService} from "./app.service";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule} from "@nestjs/typeorm";
import { GraphQLModule } from '@nestjs/graphql';
// import { UserEntity } from "./entities/user.entity";

@Module({
  imports: [AuthModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    GraphQLModule.forRoot({}),
    TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

