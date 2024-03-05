import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nivel } from 'src/entity/nivel';
import { Repository } from 'typeorm';

@Injectable()
export class NivelService {
  constructor(
    @InjectRepository(Nivel)
    private nivelRepository: Repository<Nivel>,
  ) {}

  findAll(): Promise<Nivel[]> {
    return this.nivelRepository.find();
  }

  findOne(id: number): Promise<Nivel> {
    return this.nivelRepository.findOne({ where: { id } });
  }

  async create(nivel: Nivel): Promise<Nivel> {
    return this.nivelRepository.save(nivel);
  }

  async update(id: number, nivel: Nivel): Promise<Nivel> {
    await this.nivelRepository.update(id, nivel);
    return this.nivelRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.nivelRepository.delete(id);
  }
}
