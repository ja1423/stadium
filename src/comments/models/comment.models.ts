import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";




interface ICommentAttr{
    impression: string;
    userId: number;
    stadiumId: number;
}



@Table({ tableName: 'comment' })
export class Comment  extends Model<Comment,ICommentAttr>{
    @ApiProperty({ example: 1, description: 'Comment ID unique' })
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;


    @ApiProperty({ example: '7', description: 'user_id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @ApiProperty({ example: '7', description:'stadium_id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    stadiumId: number;

    @ApiProperty({ example: '7', description: 'impression' })
    @Column({ type: DataType.STRING, allowNull: false })
    impression: string;
}
