import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesenvolvedorController } from 'src/controller/desenvolvedor';
import { Desenvolvedor } from 'src/entity/desenvolvedor';
import { DesenvolvedorService } from 'src/services/desenvolvedor';

@Module({
  imports: [TypeOrmModule.forFeature([Desenvolvedor])],
  controllers: [DesenvolvedorController],
  providers: [DesenvolvedorService],
})
export class DesenvolvedorModule {}
