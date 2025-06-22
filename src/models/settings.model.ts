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
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.ENUM('string', 'number', 'boolean', 'json'),
    allowNull: false,
  })
  declare data_type: 'string' | 'number' | 'boolean' | 'json';

  @ForeignKey(() => Account)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare account_id: number;

  @BelongsTo(() => Account)
  declare account: Account;

  @Column(DataType.STRING)
  declare value: string;
}
