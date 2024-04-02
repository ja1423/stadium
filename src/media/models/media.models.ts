import { ApiProperty } from "@nestjs/swagger";
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";



interface IMediaAttr{
    photo: string;
}

@Table({tableName:'media'})
export class Media extends Model<Media, IMediaAttr> {
    @ApiProperty({example:1, description:'Media ID unique'})
    @Column({type:DataType.INTEGER,autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:"Media", description:"Media_photo"})
    @Column({type:DataType.STRING,allowNull:false})
    photo:string;

    @ApiProperty({example:"Media", description:"Media_description"})
    @Column({type:DataType.STRING,allowNull:false})
    description:string;

}