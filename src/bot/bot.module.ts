import { Module } from '@nestjs/common';
import { UpdateBot } from './bot.update';

@Module({
  controllers: [],
  providers: [UpdateBot],
})
export class BotModule {}
