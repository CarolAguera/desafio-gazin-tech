import { Desenvolvedor } from './../entity/desenvolvedor';
// desenvolvedor.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DesenvolvedorService } from 'src/services/desenvolvedor';

@Controller('api/desenvolvedores')
export class DesenvolvedorController {
  constructor(private readonly desenvolvedorService: DesenvolvedorService) {}

  @Get()
  findAll(): Promise<Desenvolvedor[]> {
    return this.desenvolvedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Desenvolvedor> {
    return this.desenvolvedorService.findOne(+id);
  }

  @Post()
  create(@Body() desenvolvedor: Desenvolvedor): Promise<Desenvolvedor> {
    return this.desenvolvedorService.create(desenvolvedor);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() desenvolvedor: Desenvolvedor,
  ): Promise<Desenvolvedor> {
    return this.desenvolvedorService.update(+id, desenvolvedor);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.desenvolvedorService.remove(+id);
  }
}
