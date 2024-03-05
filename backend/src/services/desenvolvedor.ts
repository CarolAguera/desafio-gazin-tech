// desenvolvedor.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Desenvolvedor } from 'src/entity/desenvolvedor';
import { Repository } from 'typeorm';

@Injectable()
export class DesenvolvedorService {
  constructor(
    @InjectRepository(Desenvolvedor)
    private desenvolvedorRepository: Repository<Desenvolvedor>,
  ) {}

  findAll(): Promise<Desenvolvedor[]> {
    return this.desenvolvedorRepository.find();
  }

  findOne(id: number): Promise<Desenvolvedor> {
    return this.desenvolvedorRepository.findOne({ where: { id } });
  }

  async create(desenvolvedor: Desenvolvedor): Promise<Desenvolvedor> {
    return this.desenvolvedorRepository.save(desenvolvedor);
  }

  async update(
    id: number,
    desenvolvedor: Desenvolvedor,
  ): Promise<Desenvolvedor> {
    await this.desenvolvedorRepository.update({ id }, desenvolvedor);
    return this.desenvolvedorRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.desenvolvedorRepository.delete(id);
  }
}
