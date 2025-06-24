import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from 'src/models/accounts.model';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private readonly accountModel: typeof Account,
  ) {}

  async createAccount(name: string, email: string): Promise<Account> {
    if (!name || !email) {
      throw new BadRequestException('Name and email are required');
    }

    const existing = await this.accountModel.findOne({ where: { name } });
    if (existing) {
      throw new ConflictException('Account name already exists');
    }

    try {
      return await this.accountModel.create({ name, email });
    } catch (error) {
      throw new BadRequestException('Failed to create account');
    }
  }

  async getAllAccounts(): Promise<Account[]> {
    try {
      return await this.accountModel.findAll();
    } catch (error) {
      throw new BadRequestException('Failed to retrieve accounts');
    }
  }
}
