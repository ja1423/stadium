import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { ComfortModule } from './comfort/comfort.module';
import { CategoriesModule } from './categories/categories.module';
import { DistrictModule } from './district/district.module';
import { RegionModule } from './region/region.module';
import { AdminModule } from './admin/admin.module';
import { MailModule } from './mail/mail.module';
import { MediaModule } from './media/media.module';


@Module({
  imports:[
    ConfigModule.forRoot({envFilePath:'.env',isGlobal:true}),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host:process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DB,
      models:[User],
      autoLoadModels:true,
      sync:{alter:true},
      logging:true,
    }),
    UsersModule,
    ComfortModule,
    CategoriesModule,
    DistrictModule,
    RegionModule,
    AdminModule,
    MailModule,
    MediaModule,
  ],
  controllers:[],
  providers:[],
})

export class AppModule{}
      