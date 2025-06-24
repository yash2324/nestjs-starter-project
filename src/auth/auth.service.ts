import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import _ from 'lodash';
import { DEFAULT_PASSWORD, DEFAULT_USERNAME } from 'src/constants';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<boolean> {
    const validUsername = _.defaultTo(
      process.env.BASIC_AUTH_USER,
      DEFAULT_USERNAME,
    );
    const validPassword = _.defaultTo(
      process.env.BASIC_AUTH_PASS,
      DEFAULT_PASSWORD,
    );
    return (
      _.isEqual(username, validUsername) && _.isEqual(password, validPassword)
    );
  }

  async login(user: { username: string }) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
