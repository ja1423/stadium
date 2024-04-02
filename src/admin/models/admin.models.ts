import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IAdminAttr {
  login: string;
  telegram_link: string;
  phone_number: string;
  admin_photo: string;
  hashed_password: string;
}
@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, IAdminAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  login: string;

  @Column({ type: DataType.STRING })
  telegram_link: string;

  @Column({ type: DataType.STRING })
  phone_number: string;

  @Column({
    type: DataType.STRING,
  })
  admin_photo: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creater: boolean;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
