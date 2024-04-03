import { Module } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { UserWalletController } from './user_wallet.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserWallet } from './models/user_wallet.models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([UserWallet]), JwtModule.register({})],

  controllers: [UserWalletController],
  providers: [UserWalletService],
})
export class UserWalletModule {}
