/* eslint-disable prettier/prettier */
import { Column, Entity, IntegerType, PrimaryGeneratedColumn } from 'typeorm';
import { GeneroEnum } from './genero.enum';
import { PaisEnum } from './pais.enum';

@Entity({ name: 'usuarios' })
export class UsuariosEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    nome: string;

    @Column({ length: 100 })
    email: string;

    @Column({ type: 'date', name: 'data_nascimento', nullable: true })
    dataNascimento: Date;
 
    @Column({
      type: 'enum',
      enum: GeneroEnum,
      default: GeneroEnum.FEMININO,
      nullable: true,
    })
    genero: GeneroEnum;


     // @Column({length: 100}) //OLHAR TIPO
    //  qtdLivrosLidos: IntegerType;

    @Column({type: 'int'})
    qtdLivrosLidos: number;

    @Column({
      type: 'enum',
      enum: PaisEnum,
      default: PaisEnum.BRASIL,
      nullable: true,
    })
    pais: PaisEnum;

}