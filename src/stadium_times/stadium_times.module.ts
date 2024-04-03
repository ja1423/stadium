import { Module } from '@nestjs/common';
import { StadiumTimesService } from './stadium_times.service';
import { StadiumTimesController } from './stadium_times.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StadiumTime } from './models/stadium_time.models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([StadiumTime]), JwtModule.register({})],

  controllers: [StadiumTimesController],
  providers: [StadiumTimesService],
})
export class StadiumTimesModule {}
