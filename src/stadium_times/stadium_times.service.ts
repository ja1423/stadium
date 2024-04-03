import { Injectable } from '@nestjs/common';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StadiumTime } from './models/stadium_time.models';

@Injectable()
export class StadiumTimesService {

  constructor(@InjectModel(StadiumTime)private StadiumTimeRepo:typeof StadiumTime){}
  create(createStadiumTimeDto: CreateStadiumTimeDto) {
    return this.StadiumTimeRepo.create(createStadiumTimeDto);
  }

  findAll() {
    return this.StadiumTimeRepo.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.StadiumTimeRepo.findByPk(id);
  }

  update(id: number, updateStadiumTimeDto: UpdateStadiumTimeDto) {
    return this.StadiumTimeRepo.update(updateStadiumTimeDto,{
      where:{id},
      returning:true,
    });
  }

  remove(id: number) {
    return this.StadiumTimeRepo.destroy({where:{id}});
  }
}
