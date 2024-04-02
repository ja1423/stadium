import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
// import { Region } from '../../region/models/region.models';

interface IDistrictAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: 'district' })
export class District extends Model<District, IDistrictAttr> {
  @ApiProperty({ example: 1, description: 'District ID unique' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Chilonzor', description: 'district_name' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: '7', description: 'region unique_Id' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  regionId: number;
  // @BelongsTo(() => Region)
  // region: Region;
}
