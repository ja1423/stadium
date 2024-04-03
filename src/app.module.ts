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
import { BotModule } from './bot/bot.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { StadiumTimesModule } from './stadium_times/stadium_times.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { CommentsModule } from './comments/comments.module';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { ComfortStadiumModule } from './comfort_stadium/comfort_stadium.module';
import { StadiumModule } from './stadium/stadium.module';
import { Bot } from './bot/models/bot.models';


@Module({
  imports:[
    TelegrafModule.forRootAsync({
      botName:BOT_NAME,
      useFactory:()=>({
        token:process.env.BOT_TOKEN,
        middlewares:[],
        include:[BotModule]
      })
    }),
    ConfigModule.forRoot({envFilePath:'.env',isGlobal:true}),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host:process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DB,
      models:[User,Bot],
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
    BotModule,
    StadiumTimesModule,
    OrdersModule,
    CartModule,
    UserCardsModule,
    CommentsModule,
    UserWalletModule,
    ComfortStadiumModule,
    StadiumModule,
  ],
  controllers:[],
  providers:[],
})

export class AppModule{}
      