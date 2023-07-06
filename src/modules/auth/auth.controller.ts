import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  async loginPanel(
    @Body()
    loginDto: LoginDto,
  ) {
    const { email, password } = loginDto;

    const { user } = await this.authService.login(email, password);

    return { user };
  }
}
