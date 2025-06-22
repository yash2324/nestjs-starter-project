import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from 'src/models/accounts.model';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private readonly accountModel: typeof Account,
  ) {}
  async createAccount(name: string, email: string) {
    const existing = await this.accountModel.findOne({ where: { name } });
    if (existing) {
      throw new Error('Account name already exists');
    }
    return this.accountModel.create({ name, email });
  }

  async getAllAccounts() {
    return this.accountModel.findAll();
  }
}
