import { PartialType } from '@nestjs/swagger';
import { CreateStadiumTimeDto } from './create-stadium_time.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';



export class UpdateStadiumTimeDto extends PartialType(CreateStadiumTimeDto) {
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
