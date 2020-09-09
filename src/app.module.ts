import { Module } from '@nestjs/common';
import { AppController} from "./app.controller";
import { AppService} from "./app.service";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule} from "@nestjs/typeorm";
// import { UserEntity } from "./entities/user.entity";

@Module({
  imports: [AuthModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    TypeOrmModule.forRoot(
      {
        "type": "postgres",
        "host": "localhost",
        "port": 3306,
        "username": "postgres",
        "password": "260700",
        "database": "postgres",
        "entities": ["dist/**/*.entity{.ts,.js}"],
        "synchronize": true
      }
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

