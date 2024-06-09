/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GeneroEnum } from './genero.enum';
import { NacionalidadeEnum } from './nacionalidade.enum';
@Entity({ name: 'autores' })

export class AutorEntity {
    [x: string]: any;
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    nome: string;

    @Column({ type: 'date', name: 'data_nascimento', nullable: true })
    dataNascimento: Date;

    @Column({
      type: 'enum',
      enum: GeneroEnum,
      default: GeneroEnum.INDEFINIDO,
      nullable: true,
    })
    genero: GeneroEnum;
    
    @Column({
      type: 'enum',
      enum: NacionalidadeEnum,
      default: NacionalidadeEnum.BRASILEIRO,
      nullable: true,
    })
    nacionalidade: NacionalidadeEnum;

    @Column({})
    linkInstagram: string;

    @Column({ length: 1000})
    biografia: string;

    @ManyToMany(() => AutorEntity, (livros) => livros.autores)
    autores: AutorEntity[]    
}
