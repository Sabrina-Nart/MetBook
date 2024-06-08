/* eslint-disable prettier/prettier */
import {
    //IsArray,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    IsUUID,
    //ValidateNested,
  } from 'class-validator';

  //import { Type } from 'class-transformer';
  
  export class LivroDto {
      @IsUUID()
      @IsOptional()
      id: string;
    
      @IsString()
      @IsNotEmpty()
      nome: string;

      @IsString({ message: 'O título deve conter apenas letras!' })
      @IsNotEmpty({ message: 'O título deve ser informado!' })
      titulo: string;
    
      @IsOptional()
      @IsString()
      subtitulo?: string;
    
      @IsInt()
      numeroPaginas: number;
    
      @IsString( {message: 'O ISBN deve contes apenas letras! '})
      @IsNotEmpty( {message: 'O ISBN deve ser informado! - (ISBN: é um padrão numérico criado com o objetivo de fornecer uma espécie de "RG" para publicações monográficas, como livros, artigos e apostilas)'})
      isbn: string;
    
      @IsString( { message: 'O nome da Editora deve conter apenas letras'})
      @IsNotEmpty( { message: 'A Editora deve ser informada'})
      editora: string;
    
      @IsInt()
      ano: number;
    
      @IsOptional()
      @IsUrl()
      logoUrl?: string;
    
      @IsInt()
      preco: number;
    
   /*  @IsArray()
      @ValidateNested({ each: true })
      @Type(() => AutorDto)
      autores: AutorDto[]; */
  }

  /*
  export class UpdateLivroDto extends LivroDto {
      @IsUUID()
      @IsNotEmpty()
      id: string;
  }
  */
