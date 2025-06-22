import {
  Body,
  Controller,
  Post,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto, UpdateSettingDto } from './dto';
import { ValidateSettingValuePipe } from 'src/pipes/validateSettingValue.pipe';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  create(@Body(ValidateSettingValuePipe) dto: CreateSettingDto) {
    return this.settingsService.createSetting(dto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidateSettingValuePipe) dto: UpdateSettingDto,
  ) {
    return this.settingsService.updateSetting(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.settingsService.deleteSetting(id);
  }
}
