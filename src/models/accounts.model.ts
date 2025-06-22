import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Setting } from './settings.model';
import { Optional } from 'sequelize';

interface AccountAttributes {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
interface AccountCreationAttributes
  extends Optional<
    AccountAttributes,
    'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
  > {}
@Table({
  tableName: 'accounts',
  timestamps: true,
  paranoid: true,
})
export class Account extends Model<
  AccountAttributes,
  AccountCreationAttributes
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column(DataType.STRING)
  declare name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare email: string;

  @HasMany(() => Setting)
  declare settings: Setting[];
}
