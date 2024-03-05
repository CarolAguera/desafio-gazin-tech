import { Module } from '@nestjs/common';
import { DesenvolvedorController } from './controller/desenvolvedor';
import { NivelController } from './controller/nivel';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './module/api';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'nome_do_banco_de_dados',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ,
    ApiModule,
  ],
  controllers: [DesenvolvedorController, NivelController],
  providers: [],
})
export class AppModule {}
