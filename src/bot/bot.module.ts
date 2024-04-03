import { Module } from '@nestjs/common';
import { UpdateBot } from './bot.update';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bot } from './models/bot.models';
import { BotService } from './bot.service';

@Module({
  imports:[SequelizeModule.forFeature([Bot])],
  providers: [BotService,UpdateBot],
  exports:[BotService]
})
export class BotModule {}
