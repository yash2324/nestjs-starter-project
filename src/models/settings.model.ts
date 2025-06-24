import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Account } from './accounts.model';
import { Optional } from 'sequelize';

interface settingsAttributes {
  id: number;
  name: string;
  data_type: 'string' | 'number' | 'boolean' | 'json';
  account_id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export enum SettingDataType {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  JSON = 'json',
}
interface settingsCreationAttributes
  extends Optional<
    settingsAttributes,
    'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
  > {}
@Table({
  tableName: 'settings',
  timestamps: true,
  paranoid: true,
})
export class Setting extends Model<
  settingsAttributes,
  settingsCreationAttributes
> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.ENUM(...Object.values(SettingDataType)),
    allowNull: false,
  })
  data_type!: SettingDataType;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  account_id!: number;

  @BelongsTo(() => Account)
  account!: Account;

  @Column(DataType.STRING)
  value!: string;
}
