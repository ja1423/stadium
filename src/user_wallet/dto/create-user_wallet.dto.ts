import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserWalletDto {
  @IsString()
  @IsNotEmpty()
  wallet: string;
}
