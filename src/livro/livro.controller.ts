/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

  import { LivroService } from './livro.service';
  import { LivroDto, UpdateLivroDto } from './livro.dto';
  
  @Controller('livros')
  export class LivroController {
    constructor(private livroService: LivroService) {}
  
    @Post()
    create(@Body() createLivroDto: CreateLivroDto) {
      return this.livroService.create(createLivroDto);
    }
  
    @Get()
    findAll() {
      return this.livroService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.livroService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
      return this.livroService.update(id, updateLivroDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.livroService.remove(id);
    }
  }
