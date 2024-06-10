import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { LivrosService } from './livro.service';
import { LivroDto } from './livro.dto';

@Controller('livros')
export class LivroController {
  constructor(private livroService: LivrosService) {}

  @Get()
  async findAll() {
    return this.livroService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.livroService.findById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.livroService.remove(id);
  }

  @Post()
  async create(@Body() dto: LivroDto) {
    return this.livroService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: LivroDto) {
    return this.livroService.update({ id, ...dto });
  }
}
