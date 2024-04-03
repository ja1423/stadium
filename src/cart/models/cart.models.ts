import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ICreateCardAttr {
  name: string;
}

@Table({ tableName: 'card' })
export class Card extends Model<Card, ICreateCardAttr> {
  @ApiProperty({ example: 1, description: 'Card ID unique ' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ description: 'date' })
  @Column({ type: DataType.STRING, allowNull: false })
  date: Date;

  @ApiProperty({ example: '7', description: 'user unique_Id' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @ApiProperty({ example: '7', description: 'user_wallet unique_Id' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_wallet_Id: number;

  @ApiProperty({ example: '7', description: 'stadium_times unique_Id' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  st_times_id: number;
}
