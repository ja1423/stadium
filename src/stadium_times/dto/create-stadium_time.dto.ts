import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStadiumTimeDto {
  @IsNumber()
  @IsNotEmpty()
  stadium_id: number;

  @IsString()
  @IsNotEmpty()
  start_time: string;

  @IsString()
  @IsNotEmpty()
  end_time: string;


  @IsString()
  @IsNotEmpty()
  price: string;
}
