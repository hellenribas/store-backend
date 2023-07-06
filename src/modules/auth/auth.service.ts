import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { HttpExceptionHandler } from '../../handlers/http-exception.handler';
import { SERVER_MESSAGE_ERRORS } from 'src/utils/enum';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  async verifyPassword(email: string, password: string) {
    const userDoc = await this.usersService.findOneByEmail(email);
    console.log({ userDoc });

    if (!userDoc) {
      HttpExceptionHandler.ShowMessageException(
        SERVER_MESSAGE_ERRORS.USER_OR_PASSWORD_INVALID,
      );
    }

    const passwordMatch = await compare(password, userDoc.password);

    if (!passwordMatch) {
      HttpExceptionHandler.ShowMessageException(
        SERVER_MESSAGE_ERRORS.USER_OR_PASSWORD_INVALID,
      );
    }

    return userDoc;
  }

  async login(email: string, password: string) {
    const userDoc = await this.verifyPassword(email, password);

    userDoc.password = undefined;

    return {
      user: userDoc,
    };
  }
}
