import { PartialType } from '@nestjs/swagger';
import { CreateUserWalletDto } from './create-user_wallet.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserWalletDto extends PartialType(CreateUserWalletDto) {

    @IsOptional()
    @IsString()
    wallet:string
    
}
