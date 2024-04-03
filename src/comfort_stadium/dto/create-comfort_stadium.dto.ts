import { IsNotEmpty, IsString } from 'class-validator';

export class CreateComfortStadiumDto {
  @IsString()
  @IsNotEmpty()
  id: number;
}
