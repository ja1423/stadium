import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.models';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region)private regionRepo:typeof Region){} 
  create(createRegionDto: CreateRegionDto) {
    return this.regionRepo.create(createRegionDto);
  }
  findAll() {
    return this.regionRepo.findAll({include:{all:true}});
  }
  

  findOne(id: number) {
    return this.regionRepo.findByPk(id);
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.regionRepo.update(updateRegionDto,{
      where:{id},
      returning:true,
    });
  }

  remove(id: number) {
    return this.regionRepo.destroy({where:{id}});
  }
}
