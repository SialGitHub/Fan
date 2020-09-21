import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AuthService } from "../auth/auth.service";

@Controller()
export class UserController{
  constructor(
    private authService: AuthService,
  ) {}

  // auth user
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // get all users
  @Get('auth/users')
  getUsers(){
    return this.authService.getAllUsers();
  }

  // get my profile
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}