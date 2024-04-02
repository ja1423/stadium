import { IsNotEmpty, IsString } from "class-validator";

export class CreateMediaDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
