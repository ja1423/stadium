import { Module } from '@nestjs/common';
import { UserCardsService } from './user_cards.service';
import { UserCardsController } from './user_cards.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCard } from './models/user_card.models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([UserCard]), JwtModule.register({})],

  controllers: [UserCardsController],
  providers: [UserCardsService],
})
export class UserCardsModule {}
