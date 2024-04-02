import { Injectable } from '@nestjs/common';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comfort } from './models/comfort.model';

@Injectable()
export class ComfortService {
  constructor(@InjectModel(Comfort) private comfortRepo:typeof Comfort){}
  create(createComfortDto: CreateComfortDto) {
    return this.create(createComfortDto);
  }

  findAll() {
    return this.comfortRepo.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.comfortRepo.findByPk(id);
  }

  update(id: number, updateComfortDto: UpdateComfortDto) {
    return this.comfortRepo.update(updateComfortDto,{
      where:{id},
      returning:true,
    });
  }

  remove(id: number) {
    return this.comfortRepo.destroy({where:{id}});
  }
}
