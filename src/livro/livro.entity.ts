/* eslint-disable prettier/prettier */
import { Genero } from './genero.enum';
import { AutorEntity } from 'src/autor/autor.entity';

import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('livros')
export class LivroEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'enum',
        enum: Genero,
        nullable: true,
    })
    genero: Genero;

    @Column()
    titulo: string;

    @Column({ nullable: true })
    subtitulo: string;

    @Column()
    numeroPaginas: number;

    @Column()
    isbn: string;

    @Column()
    editora: string;

    @Column()
    anoLancamento: number;

    @Column({ nullable: true })
    logoUrl: string;

    @Column('decimal')
    preco: number;

    @ManyToMany(() => AutorEntity, (autor) => autor.livros)
    @JoinTable({
        name: 'autores_livros',
        joinColumn: { name: 'livro_id' },
        inverseJoinColumn: { name: 'autor_id' },
    })
    autores: AutorEntity[]; 
}