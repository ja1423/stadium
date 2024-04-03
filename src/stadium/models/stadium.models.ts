import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ICreateStadiumAttr {
  name: string;
}

export class Stadium extends Model<Stadium,ICreateStadiumAttr> {
    @ApiProperty({ example: 1, description: 'Stadium ID unique num' })
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '7', description: 'Stadium category_id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    category_id: number;



    @ApiProperty({ example: '7', description: 'Stadium owner_id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    owner_id: number;

    @ApiProperty({ example: '7', description: 'Stadium region_id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    region_id: number;

    @ApiProperty({ example: '7', description: 'Stadium district_id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    district_id: number;

    @ApiProperty({ example: '7', description: 'Stadium name' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: '7', description: 'Stadium address' })
    @Column({ type: DataType.STRING, allowNull: false })
    address: string;

    @ApiProperty({ example: '7', description: 'Stadium volume' })
    @Column({ type: DataType.STRING, allowNull: false })
    volume: string;

    @ApiProperty({ example: '7', description: 'Stadium contact_number' })
    @Column({ type: DataType.STRING, allowNull: false })
    contact_number: string;

    @ApiProperty({ example: '7', description: 'Stadium location' })
    @Column({ type: DataType.STRING, allowNull: false })
    location: string;

    @ApiProperty({ example: '7', description: 'Stadium buildAt' })
    @Column({ type: DataType.STRING, allowNull: false })
    buildAt: string;

    @ApiProperty({ example: '7', description: 'Stadium start_time' })
    @Column({ type: DataType.STRING, allowNull: false })
    start_time: string;

    @ApiProperty({ example: '7', description: 'Stadium end_time' })
    @Column({ type: DataType.STRING, allowNull: false })
    end_time: string;
}
