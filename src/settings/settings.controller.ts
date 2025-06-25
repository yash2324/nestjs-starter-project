import {
  Body,
  Controller,
  Post,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  Get,
} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto, UpdateSettingDto } from './dto';
import { ValidateSettingValuePipe } from 'src/pipes/validateSettingValue.pipe';
import { BasicAuthGuard } from 'src/auth/auth.guard';

@UseGuards(BasicAuthGuard)
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  create(@Body(ValidateSettingValuePipe) createSettingDto: CreateSettingDto) {
    return this.settingsService.createSetting(createSettingDto);
  }

  @Put(':id')
  updateSetting(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidateSettingValuePipe) updateSettingDto: UpdateSettingDto,
  ) {
    return this.settingsService.updateSetting(id, updateSettingDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.settingsService.deleteSetting(id);
  }

  @Get(':accountId')
  fetchSettings(@Param('accountId', ParseIntPipe) accountId: number) {
    return this.settingsService.getSettings(accountId);
  }
}
