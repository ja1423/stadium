import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ICreateOrderAttr {
  date: string;
}

export class Order extends Model<Order,ICreateOrderAttr>{
    @ApiProperty({ example: 1, description: 'order ID unique' })
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '7', description: 'user unique_Id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    user_id: number;

    @ApiProperty({ example: '7', description: 'user_wallet unique_Id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    user_wallet_id: number;



    @ApiProperty({ example: '7', description: 'stadium times unique_Id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    st_times_id: number;


}
