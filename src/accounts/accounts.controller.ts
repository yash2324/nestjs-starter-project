import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto';
import { Account } from '../models/accounts.model';
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountsService.createAccount(
      createAccountDto.name,
      createAccountDto.email,
    );
  }

  @Get()
  fetchAll(): Promise<Account[]> {
    return this.accountsService.getAllAccounts();
  }
}
