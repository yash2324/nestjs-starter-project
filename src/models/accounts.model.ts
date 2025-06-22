import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Setting } from './settings.model';

@Table({
  tableName: 'accounts',
  timestamps: true,
})
export class Account extends Model<Account> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column(DataType.STRING)
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @HasMany(() => Setting)
  settings: Setting[];
}
