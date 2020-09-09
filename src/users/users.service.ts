import { Injectable } from '@nestjs/common';
// import { RoleEnum, User } from "../interfaces/user.interface";
import { Connection, Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity} from "../entities/user.entity";

// @Injectable()
// export class UsersService {
//   private readonly users: User[];
//
//   constructor() {
//     this.users = [
//       {
//         role: RoleEnum.Author,
//         userId: 1,
//         username: 'john',
//         password: 'changeme',
//       },
//       {
//         role: RoleEnum.Author,
//         userId: 2,
//         username: 'chris',
//         password: 'secret',
//       },
//       {
//         role: RoleEnum.Author,
//         userId: 3,
//         username: 'maria',
//         password: 'guess',
//       },
//     ];
//   }
//
//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find(user => user.username === username);
//   }
//
//   async findAll(): Promise<User[]>{
//     return this.users;
//   }
// }

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private connection: Connection,
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}