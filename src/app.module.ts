import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { SettingsModule } from './settings/settings.module';
import { Account } from './models/accounts.model';
import { Setting } from './models/settings.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: process.env.DATABASE_URL,
      models: [Account, Setting],
      autoLoadModels: true,
      synchronize: false,
      dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false },
      },
    }),
    AccountsModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
