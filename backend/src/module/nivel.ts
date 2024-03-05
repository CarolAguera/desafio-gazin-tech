import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelController } from 'src/controller/nivel';
import { Nivel } from 'src/entity/nivel';
import { NivelService } from 'src/services/nivel';

@Module({
  imports: [TypeOrmModule.forFeature([Nivel])],
  controllers: [NivelController],
  providers: [NivelService],
})
export class NivelModule {}
