export class CreateSettingDto {
  name: string;
  data_type: 'string' | 'number' | 'boolean' | 'json';
  value: ValueUnion;
  account_id: number;
}

export class UpdateSettingDto {
  name?: string;
  data_type: 'string' | 'number' | 'boolean' | 'json';
  value: any;
}
export type ValueUnion =
  | string
  | number
  | boolean
  | Record<string, unknown>
  | unknown[];
