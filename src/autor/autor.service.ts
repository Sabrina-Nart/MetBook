/* eslint-disable prettier/prettier */
import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { Repository } from 'typeorm';
import { AutorEntity } from './autor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AutorDto } from './autor.dto';

@Injectable()
export class AutorService {
        constructor(
            @InjectRepository(AutorEntity)
            private autorRepository: Repository<AutorEntity>,
        ) {}
    
    /*    findAll() {
            return this.autorRepository.find({
                //relations: { livros: true },
            });
        } */
    
        async findById(id: string): Promise<AutorEntity> {
           const findOne = await this.autorRepository.findOne({
                where: { id },
                //relations: { livros: true },
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
    
        async create(dto: AutorDto) {
            const newAutor = this.autorRepository.create(dto);

            if (newAutor.nome && newAutor.nome.length > 100) {
                throw new BadRequestException('O nome do autor deve possuir apenas 100 caracteres');
            }

            if (newAutor.nome && newAutor.biografia.length > 100) {
                throw new BadRequestException('A biografia do autor, não deve ultrapassar mais de 1000 caracteres');
            }   

            this.validaAutor(newAutor);

            return this.autorRepository.save(newAutor);
        }
   
        async update(autor: AutorDto) {
            await this.findById(autor.id);
        
            this.validaAutor(autor);
        
            return this.autorRepository.save(autor);
        }

        private validaAutor(autor: AutorEntity | AutorDto) {

            this.validaAutorNascimento(autor);
        }
    
        private validaAutorNascimento(autor: AutorEntity | AutorDto) {
            const dataAtual = new Date();
            const dataNascimento = new Date(autor.dataNascimento);

             const diferencaAno = dataAtual.getUTCFullYear() - dataNascimento.getUTCFullYear();

            if (diferencaAno < 18) {
                throw new BadRequestException('O autor deve ter no mínimo 18 anos');
            } else if (diferencaAno === 18) {
                const meses =
                dataAtual.getUTCMonth() + 1 - (dataNascimento.getUTCMonth() + 1);

                if (meses < 0) {
                    throw new BadRequestException(`O autor deve ter no mínimo 18 anos - (Faltam ainda ${meses * -1} mes(es))`,);

                } else if (dataAtual.getUTCMonth() - dataNascimento.getUTCMonth() === 0) {
                    const dias = dataAtual.getUTCDate() - dataNascimento.getUTCDate();

                    if (dias < 0) {
                        throw new BadRequestException(`O autor deve ter no mínimo 18 anos - (Faltam ainda ${dias * -1} dia(s))`,);
                    }
                }
            }
        }
}