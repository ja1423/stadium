import { Module } from '@nestjs/common';
import { ComfortService } from './comfort.service';
import { ComfortController } from './comfort.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Comfort } from './models/comfort.model';

@Module({
  imports: [SequelizeModule.forFeature([Comfort]), JwtModule.register({})],
  controllers: [ComfortController],
  providers: [ComfortService],
})
export class ComfortModule {}
