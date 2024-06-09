/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LivroEntity } from './livro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LivroDto } from './livro.dto';

@Injectable()
export class LivrosService {

    constructor(
        @InjectRepository(LivroEntity)
        private livroRepository: Repository<LivroEntity>,
    ) {}

    async findAll() {
        return this.livroRepository.find({ relations: ['autores'] });
    }

    async findById(id: string): Promise<LivroEntity> {
        const findOne = await this.livroRepository.findOne({
            where: { id },
            relations: { autores: true },
        }); 

        if (!findOne) {
            throw new NotFoundException('Livro não encontrado. Código:  ' + id);
        }

        return findOne;
    }

    async remove(id: string) {
        const livroToRemove = await this.findById(id);
        return this.livroRepository.remove(livroToRemove);
    }

    async create(dto: LivroDto) {

        const newLivro = this.livroRepository.create(dto);

        if (newLivro.titulo && newLivro.titulo.length > 100){

            throw new BadRequestException('O título deve possui apenas 100 caracteres.');
        }

        if ( newLivro.titulo = null && newLivro.isbn){

            throw new BadRequestException('O título e o ISBN do livro, devem possuir alguma informação!')
        }

        this.validaLivro(newLivro);

        return this.livroRepository.save(newLivro);
    }

    async update(livro: LivroDto) {

        await this.findById(livro.id);

        this.validaLivro(livro);

        return this.livroRepository.save(livro);
    }

    private validaLivro(livro: LivroDto) {

        this.validaNumeroPaginas(livro.numeroPaginas);
        this.validaAnoLancamento(livro.anoLancamento)
    }

    private validaNumeroPaginas(numeroPaginas: number) {

        if (!Number.isInteger(numeroPaginas) || numeroPaginas <= 0) {

            throw new BadRequestException('O número de páginas deve conter apenas números.');
        }
    }

    private validaAnoLancamento(ano: number) {

        if (!Number.isInteger(ano)) {
            throw new BadRequestException('O ano de lançamento deve conter apenas números!');
        }    
    }
}









/*import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { Repository } from 'typeorm';
import { LivroEntity } from './livro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LivroDto } from './livro.dto';
  
@Injectable()
export class LivrosService {
        constructor(
            @InjectRepository(LivroEntity)
            private autorRepository: Repository<LivroEntity>,
        ) {}
    
        findAll() {
            return this.autorRepository.find({
                relations: { autor: true },
            });
        } 
    
        async findById(id: string): Promise<LivroEntity> {
            const findOne = await this.autorRepository.findOne({
                where: { id },
                relations: { livros: true },
            });

            if (!findOne) {
                throw new NotFoundException('Autor não encontrado com o id ' + id);
            }
            return findOne;
        }
    
        async remove(id: string) {
            const findById = await this.findById(id);

            await this.autorRepository.remove(findById);
            return { ...findById, id };
        }
    
        async create(dto: LivroDto) {
            const newAutor = this.autorRepository.create(dto);
        
            this.validateAutor(newAutor);
        
            return this.autorRepository.save(newAutor);
        }
    
        async update(autor: LivroDto) {
            await this.findById(autor.id);
        
            this.validateAutor(autor);
        
            return this.autorRepository.save(autor);
        }
    
        private validateAutor(autor: LivroEntity | LivroDto) {
            this.validateAutorNascimento(autor);
            // this.validateAutorLivros
        }
    
        private validateAutorNascimento(autor: LivroEntity | LivroDto) {
            const dataAtual = new Date();
            const dataNascimento = new Date(autor.dataNascimento);

        const diferencaAno = dataAtual.getUTCFullYear() - dataNascimento.getUTCFullYear();

            if (diferencaAno < 18) {
                throw new BadRequestException('O autor deve ter no mínimo 18 anos');
            } else if (diferencaAno === 18) {
                const meses =
                dataAtual.getUTCMonth() + 1 - (dataNascimento.getUTCMonth() + 1);

                if (meses < 0) {
                    throw new BadRequestException(`O autor deve ter no mínimo 18 anos (faltam ainda ${meses * -1} mes(es))`,);

                } else if (dataAtual.getUTCMonth() - dataNascimento.getUTCMonth() === 0) {
                    const dias = dataAtual.getUTCDate() - dataNascimento.getUTCDate();

                    if (dias < 0) {
                        throw new BadRequestException(`O autor deve ter no mínimo 18 anos (faltam ainda ${dias * -1} dia(s))`,);
                    }
                }
            }
        }
}

*/









/*
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LivroEntity } from './livro.entity';
import { LivroEntity } from '../autor/autor.entity';
import { CreateLivroDto, UpdateLivroDto } from './livro.dto';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(LivroEntity)
    private livroRepository: Repository<LivroEntity>,
    @InjectRepository(LivroEntity)
    private autorRepository: Repository<LivroEntity>,
  ) {}

  async create(createLivroDto: CreateLivroDto): Promise<LivroEntity> {
    const { autores, ...livroData } = createLivroDto;
    const livro = this.livroRepository.create(livroData);

    if (autores) {
      livro.autores = await Promise.all(
        autores.map(async LivroDto => {
          return this.autorRepository.findOneOrFail({ where: { id: LivroDto.id } });
        }),
      );
    }

    return this.livroRepository.save(livro);
  }

  findAll(): Promise<LivroEntity[]> {
    return this.livroRepository.find({ relations: ['autores'] });
  }

  async findOne(id: string): Promise<LivroEntity> {
    const livro = await this.livroRepository.findOne({
      where: { id },
      relations: ['autores'],
    });
    if (!livro) {
      throw new NotFoundException('Livro não encontrado com o id ' + id);
    }
    return livro;
  }

  async update(id: string, updateLivroDto: UpdateLivroDto): Promise<LivroEntity> {
    const { autores, ...livroData } = updateLivroDto;
    const livro = await this.findOne(id);

    if (autores) {
      livro.autores = await Promise.all(
        autores.map(async LivroDto => {
          return this.autorRepository.findOneOrFail({ where: { id: LivroDto.id } });
        }),
      );
    }

    Object.assign(livro, livroData);
    return this.livroRepository.save(livro);
  }

  async remove(id: string): Promise<LivroEntity> {
    const livro = await this.findOne(id);
    await this.livroRepository.remove(livro);
    return livro;
  }
}
*/