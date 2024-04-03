import { PartialType } from '@nestjs/swagger';
import { CreateComfortStadiumDto } from './create-comfort_stadium.dto';
import { IsOptional, IsString } from 'class-validator';


export class UpdateComfortStadiumDto extends PartialType(CreateComfortStadiumDto) {
  @IsOptional()
  @IsString()
  id: number;
}
