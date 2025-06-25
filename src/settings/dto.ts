import { SettingDataType } from 'src/models/settings.model';

export class CreateSettingDto {
  name: string;
  data_type: SettingDataType;
  value: ValueUnion;
  account_id: number;
}

export class UpdateSettingDto {
  name?: string;
  data_type: SettingDataType;
  value: any;
}
export type ValueUnion =
  | string
  | number
  | boolean
  | Record<string, unknown>
  | unknown[];
