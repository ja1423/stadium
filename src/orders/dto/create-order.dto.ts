import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto {
    @IsString()
    @IsOptional()
    date:string;



    @IsNumber()
    @IsOptional()
    user_wallet_id:number;
}
