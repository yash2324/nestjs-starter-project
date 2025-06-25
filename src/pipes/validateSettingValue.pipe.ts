import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateSettingValuePipe implements PipeTransform {
  transform(value: any) {
    const dataType = value.data_type;
    const raw = value.value;

    const validators = {
      string: (v: any) => typeof v === 'string',
      number: (v: any) => typeof v === 'number',
      boolean: (v: any) => typeof v === 'boolean',
      json: (v: any) => {
        try {
          JSON.parse(v);
          return true;
        } catch {
          return false;
        }
      },
    };

    if (!validators[dataType]?.(raw)) {
      throw new BadRequestException(`Invalid value for data_type: ${dataType}`);
    }

    return {
      ...value,
      value: String(raw),
    };
  }
}
