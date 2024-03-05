import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Desenvolvedor } from './desenvolvedor';

@Entity()
export class Nivel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nivel: string;

  @OneToMany(() => Desenvolvedor, (desenvolvedor) => desenvolvedor.nivel)
  desenvolvedores: Desenvolvedor[];
}
