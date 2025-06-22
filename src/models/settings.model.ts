import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Account } from './accounts.model';

@Table({
  tableName: 'settings',
  timestamps: true,
  paranoid: true,
})
export class Setting extends Model<Setting> {
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
  name: string;

  @Column({
    type: DataType.ENUM('string', 'number', 'boolean', 'json'),
    allowNull: false,
  })
  data_type: 'string' | 'number' | 'boolean' | 'json';

  @ForeignKey(() => Account)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  account_id: number;

  @BelongsTo(() => Account)
  account: Account;

  @Column(DataType.STRING)
  value: string;
}
