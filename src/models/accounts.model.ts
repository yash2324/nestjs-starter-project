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
  @Column(DataType.STRING)
  name!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email!: string;

  @HasMany(() => Setting)
  settings!: Setting[];
}
