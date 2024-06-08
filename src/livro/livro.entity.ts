/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { AutorEntity } from 'src/autor/autor.entity';
import { Genero } from './genero.enum';

@Entity()
export class LivroEntity {
    @PrimaryGeneratedColumn()
    id: string; // Mudei de Number para String 

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
    ano: number;

    @Column({ nullable: true })
    logoUrl: string;

    @Column('decimal')
    preco: number;

    @ManyToMany(() => AutorEntity, autor => autor.livros)
    @JoinTable()
    autores: AutorEntity[];
}
