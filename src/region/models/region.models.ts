import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';

interface IRegionAttr {
  name: string;
}

@Table({ tableName: 'region' })
export class Region extends Model<Region, IRegionAttr> {
  @ApiProperty({ example: 1, description: 'Region ID unique num' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Toshkent", description: 'Region_name' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
}
