import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './apps/users/users.module';
import { LoginModule } from './apps/login/login.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './middlewares/auth/auth.module';
import { AeronauticalAlphabetModule } from './apps/aeronautical-alphabet/aeronautical-alphabet.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'audios'),
      serveRoot: '/audios',
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'icons'),
      serveRoot: '/icons',
    }),

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
