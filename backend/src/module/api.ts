import { Module } from '@nestjs/common';
import { NivelModule } from './nivel';
import { DesenvolvedorModule } from './desenvolvedor';

@Module({
  imports: [NivelModule, DesenvolvedorModule],
})
export class ApiModule {}
