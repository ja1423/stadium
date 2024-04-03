import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ICreateStadiumTimeAttr {
  name: string;
}

export class StadiumTime extends Model<StadiumTime,ICreateStadiumTimeAttr>{
    @ApiProperty({ example: 1, description: 'StadiumTime ID unique num' })
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '7', description: 'Stadium unique_Id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    stadium_id: number;

    @ApiProperty({ example: '7', description: 'Start_Time unique_Id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    start_time: string;

    @ApiProperty({ example: '7', description: 'End_Time unique_Id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    end_time: string;

    @ApiProperty({ example: '7', description: 'Price unique_Id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    price: string;
}
