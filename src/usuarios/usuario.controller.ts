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

import { UsuariosService } from './usuario.service';
import { UsuariosDto } from './usuario.dto';

@Controller('usuarios')

export class UsuariosController {
    constructor(private usuariosService: UsuariosService) {}

  @Get()
  findAll() {
      return this.usuariosService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
      return this.usuariosService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
      return this.usuariosService.remove(id);
  }

  @Post()
  create(@Body() dto: UsuariosDto) {
      return this.usuariosService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UsuariosDto) {
      return this.usuariosService.update({ id, ...dto });
  }
}