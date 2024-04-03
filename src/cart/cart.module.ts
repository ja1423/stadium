import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from './models/cart.models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Card]), JwtModule.register({})],

  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
