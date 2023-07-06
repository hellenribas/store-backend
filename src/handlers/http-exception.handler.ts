import { HttpException, HttpStatus } from '@nestjs/common';
import { SERVER_MESSAGE_ERRORS } from '../utils/enum';

export class HttpExceptionHandler {
  static throwException(
    message = SERVER_MESSAGE_ERRORS.DEFAULT_EXCEPTION,
    HttpStatusCode: number = HttpStatus.BAD_REQUEST,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static NotFound(
    message = SERVER_MESSAGE_ERRORS.NOT_FOUND,
    HttpStatusCode: number = HttpStatus.NOT_FOUND,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static ServiceUnavailable(
    message = SERVER_MESSAGE_ERRORS.SERVICE_UNAVAILABLE,
    HttpStatusCode: number = HttpStatus.SERVICE_UNAVAILABLE,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static AlreadyRegistered(
    message = SERVER_MESSAGE_ERRORS.ALREADY_REGISTERED,
    HttpStatusCode: number = HttpStatus.CONFLICT,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static AuthenticationFail(
    message = SERVER_MESSAGE_ERRORS.AUTHENTICATION_FAIL,
    HttpStatusCode: number = HttpStatus.UNAUTHORIZED,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static Unauthorized(
    message = SERVER_MESSAGE_ERRORS.UNAUTHORIZED,
    HttpStatusCode: number = HttpStatus.UNAUTHORIZED,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static Forbidden(
    message = SERVER_MESSAGE_ERRORS.FORBIDDEN,
    HttpStatusCode: number = HttpStatus.FORBIDDEN,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static tokenError(
    message = SERVER_MESSAGE_ERRORS.TOKEN_ERROR,
    HttpStatusCode: number = HttpStatus.UNAUTHORIZED,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static tokenMalformedError(
    message = SERVER_MESSAGE_ERRORS.TOKEN_MALFORMED_ERROR,
    HttpStatusCode: number = HttpStatus.UNAUTHORIZED,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static tokenDecodeError(
    message = SERVER_MESSAGE_ERRORS.TOKEN_DECODE_ERROR,
    HttpStatusCode: number = HttpStatus.UNAUTHORIZED,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static WrongPassword(
    message = SERVER_MESSAGE_ERRORS.USER_HAS_WRONG_PASSWORD,
    HttpStatusCode: number = HttpStatus.I_AM_A_TEAPOT,
  ) {
    throw new HttpException(message, HttpStatusCode);
  }

  static ShowMessageException(message) {
    throw new HttpException(message, 420);
  }
}
