import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Setting } from 'src/models/settings.model';
import { CreateSettingDto, UpdateSettingDto } from './dto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Setting)
    private readonly settingModel: typeof Setting,
  ) {}

  async createSetting(dto: CreateSettingDto) {
    return await this.settingModel.create(dto);
  }

  async updateSetting(id: number, dto: UpdateSettingDto) {
    const setting = await this.settingModel.findByPk(id);
    if (!setting)
      throw new NotFoundException(
        `No settings found for account with ID ${id}`,
      );
    return setting.update(dto);
  }

  async deleteSetting(id: number) {
    const setting = await this.settingModel.findByPk(id);
    if (!setting)
      throw new NotFoundException(
        `No settings found for account with ID ${id}`,
      );
    return setting.destroy();
  }

  async getSettings(accountId: number) {
    const settings = await this.settingModel.findAll({
      where: { account_id: accountId },
    });
    if (!settings)
      throw new NotFoundException(
        `No settings found for account with ID ${accountId}`,
      );
    return settings;
  }
}
