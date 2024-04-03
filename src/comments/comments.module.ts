import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './models/comment.models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Comment]), JwtModule.register({})],

  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
