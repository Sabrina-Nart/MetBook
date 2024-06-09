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

import { LivrosService} from './livro.service';
import { LivroDto } from './livro.dto';

@Controller('livros')
export class LivroController {
    constructor(private livroService: LivrosService) {}
  
    @Get()
    findAll() {
        return this.livroService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.livroService.findById(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.livroService.remove(id);
    }

    @Post()
    create(@Body() dto: LivroDto) {
      return this.livroService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: LivroDto) {
        return this.livroService.update({ id, ...dto });
    }
  }
