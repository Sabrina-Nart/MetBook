/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import {
    //IsArray,
    IsInt,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
    IsString,
    IsUrl,
    IsUUID,
    ValidateNested,
  } from 'class-validator';

import { AutorDto } from 'src/autor/autor.dto';
  export class LivroDto {
      @IsUUID()
      @IsOptional()
      id: string;

      @IsString({ message: 'O título deve conter apenas letras!' })
      @IsNotEmpty({ message: 'O título deve ser informado!' })
      titulo: string;
    
      @IsOptional()
      @IsString()
      subtitulo?: string;
    
      @IsInt()
      numeroPaginas: number;
    
      @IsString( {message: 'O ISBN deve ser preenchido!'})
      @IsNotEmpty( {message: 'O ISBN deve ser preenchido! - (ISBN: é um padrão criado com o objetivo de fornecer uma espécie de "RG" para publicações monográficas, como livros, artigos e apostilas)'})
      isbn: string;
    
      @IsString( { message: 'O nome da Editora deve conter apenas letras!'})
      @IsNotEmpty( { message: 'A Editora deve ser informada!'})
      editora: string;
    
      @IsInt({ message: 'O ano de lançamento do livro, deve sr informado!' })
      @IsNumberString({ no_symbols: true }, { message: 'O ano de lançamento do livro, deve conter apenas números!' })
      anoLancamento: number;
    
      @IsOptional()
      @IsUrl()
      logoUrl?: string;
    
      @IsInt()
      preco: number;

      @ValidateNested()
      @Type(() => AutorDto)
      autor: AutorDto;   
  }    
