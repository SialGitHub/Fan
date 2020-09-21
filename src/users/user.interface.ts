export interface User{
  role: RoleEnum;
  userId: number;
  username: string;
  password: string;
}

export enum RoleEnum{ Admin, Author };
