import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString,MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsPhoneNumber('UZ')
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  confirm_password: string;
  tg_link: string;

  photo: string;
}
