/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { LivroEntity } from './livro.entity';
import { AutorEntity } from '../autor/autor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([LivroEntity, AutorEntity])],
    providers: [LivroService],
    controllers: [LivroController],
})

export class LivroModule {}
