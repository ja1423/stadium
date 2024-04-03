import { PartialType } from '@nestjs/swagger';
import { CreateStadiumDto } from './create-stadium.dto';
import { IsNotEmpty, IsString } from 'class-validator';



export class UpdateStadiumDto extends PartialType(CreateStadiumDto) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  volume: string;

  @IsString()
  @IsNotEmpty()
  contact_number: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  buildAt: string;

  @IsString()
  @IsNotEmpty()
  start_time: string;

  @IsString()
  @IsNotEmpty()
  end_time: string;
}
