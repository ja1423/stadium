import { Module } from '@nestjs/common';
import { StadiumService } from './stadium.service';
import { StadiumController } from './stadium.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stadium } from './models/stadium.models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Stadium]), JwtModule.register({})],

  controllers: [StadiumController],
  providers: [StadiumService],
})
export class StadiumModule {}
