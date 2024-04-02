import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface ICategoryAttr {
  name: string;
  parentId: number;
}

@Table({ tableName: 'category' })
export class Category extends Model<Category, ICategoryAttr> {
  @ApiProperty({ example: 1, description: 'Category ID unique number' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Fudbol', description: 'Category_name' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 1, description: 'Parent Category ID unique num' })
  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  parentId: number;
  @BelongsTo(() => Category)
  category: Category;
}
