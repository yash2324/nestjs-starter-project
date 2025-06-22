import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.accountsService.createAccount(body.name, body.email);
  }
  @Get()
  fetchAll() {
    return this.accountsService.getAllAccounts();
  }
}
