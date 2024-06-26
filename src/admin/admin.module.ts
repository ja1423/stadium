import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.models';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [SequelizeModule.forFeature([Admin]),
JwtModule.register({}),
        MailModule
    ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
