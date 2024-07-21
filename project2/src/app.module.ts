import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionModule } from './features/action/action.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm/typeorm.config';

@Module({
  imports: [ActionModule,
    ConfigModule.forRoot({ //Donde estas agregando el archivo .env
      isGlobal: true,
      envFilePath: '.env', // No se sube a repo (Variables de entorno)
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
