import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Nivel } from 'src/entity/nivel';
import { NivelService } from 'src/services/nivel';

@Controller('api/niveis')
export class NivelController {
  constructor(private readonly nivelService: NivelService) {}

  @Get()
  findAll(): Promise<Nivel[]> {
    return this.nivelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Nivel> {
    return this.nivelService.findOne(+id);
  }

  @Post()
  create(@Body() nivel: Nivel): Promise<Nivel> {
    return this.nivelService.create(nivel);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() nivel: Nivel): Promise<Nivel> {
    return this.nivelService.update(+id, nivel);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.nivelService.remove(+id);
  }
}
