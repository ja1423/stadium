import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface IUserWalletAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: 'user_wallet' })
export class UserWallet extends Model<UserWallet, IUserWalletAttr> {
  @ApiProperty({ example: 1, description: 'user_wallet ID unique' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: '34', description: 'wallet' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  wallet: string;

  @ApiProperty({ example: '7', description: 'user_wallet unique_Id' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;
}
