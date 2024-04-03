import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ICreateComfortStadiumAttr {
  name: string;
}
@Table({ tableName: 'comfortstadium' })
export class ComfortStadium extends Model<
  ComfortStadium,
  ICreateComfortStadiumAttr
> {
  @ApiProperty({ example: 1, description: 'comfortStadium ID unique ' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: '7', description: 'comfort unique_Id' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  comfort_id: number;

  @ApiProperty({ example: '7', description: 'stadium unique_Id' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  stadium_id: number;
}
