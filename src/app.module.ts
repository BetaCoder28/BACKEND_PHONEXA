import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './apps/users/users.module';
import { LoginModule } from './apps/login/login.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './middlewares/auth/auth.module';
import { AeronauticalAlphabetModule } from './apps/aeronautical-alphabet/aeronautical-alphabet.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    LoginModule,
    AuthModule,
    AeronauticalAlphabetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
