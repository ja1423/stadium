import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Card } from './models/cart.models';

@Injectable()
export class CartService {
  constructor(@InjectModel(Card)private cardRepo:typeof Card){}
  create(createCartDto: CreateCartDto) {
    return this.cardRepo.create(createCartDto);
  }

  findAll() {
    return this.cardRepo.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.cardRepo.findByPk(id);
  }

  update(id: number, updateCardDto: UpdateCartDto) {
    return this.cardRepo.update(updateCardDto,{
      where:{id},
      returning:true,
    });
  }

  remove(id: number) {
    return  this.cardRepo.destroy({where:{id}});
  }
}
