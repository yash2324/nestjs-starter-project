import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const isValid = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (!isValid) throw new UnauthorizedException('Invalid credentials');
    return this.authService.login({
      username: loginDto.username,
    });
  }
}
