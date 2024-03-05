import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Nivel } from './nivel';

@Entity()
export class Desenvolvedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sexo: string;

  @Column({ type: 'date' })
  datanascimento: Date;

  @Column()
  hobby: string;

  @ManyToOne(() => Nivel, (nivel) => nivel.desenvolvedores)
  nivel: Nivel;
}
