import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ICreateUserCardAttr {
  name: string;
}

@Table({ tableName: 'card' })
export class UserCard extends Model<UserCard, ICreateUserCardAttr> {
  @ApiProperty({ example: 1, description: 'Card ID unique ' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ description: 'name' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ description: 'phone' })
  @Column({ type: DataType.STRING, allowNull: false })
  phone:string;

  @ApiProperty({ description: 'number' })
  @Column({ type: DataType.STRING, allowNull: false })
  number: string;

  @ApiProperty({ description: 'year' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @ApiProperty({ description: 'month' })
  @Column({ type: DataType.SMALLINT, allowNull: false })
  month: number;
}
