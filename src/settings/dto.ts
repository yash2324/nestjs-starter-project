export class CreateSettingDto {
  name: string;
  data_type: 'string' | 'number' | 'boolean' | 'json';
  value: any;
  account_id: number;
}

export class UpdateSettingDto {
  name?: string;
  data_type: 'string' | 'number' | 'boolean' | 'json';
  value: any;
}
