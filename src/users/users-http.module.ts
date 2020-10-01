import { Module } from '@nestjs/common';
import { UsersModule} from "./users.module";
import { UsersService } from './users.service';
import { UserController } from "./user.controller";

@Module({
  imports: [UsersModule],
  providers: [],
  controllers: [UserController]
})
export class UserHttpModule {}
