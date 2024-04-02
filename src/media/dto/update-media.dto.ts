
import { IsOptional, IsString } from 'class-validator';

export class UpdateMediaDto {
    @IsOptional()
    @IsString()
    photo ?: string;

    @IsOptional()
    @IsString()
    description ?: string;


}




