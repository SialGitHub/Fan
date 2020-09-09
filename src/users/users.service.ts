import { Injectable } from '@nestjs/common';
import { RoleEnum, User } from "../interfaces/user.interface";

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        role: RoleEnum.Author,
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        role: RoleEnum.Author,
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        role: RoleEnum.Author,
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async findAll(): Promise<User[]>{
    return this.users;
  }
}