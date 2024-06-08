import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

import { GeneroEnum } from './genero.enum';

export class AutorDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString({ message: 'O nome deve conter apenas letras' })
  @IsNotEmpty({ message: 'O nome deve ser informado' })
  nome: string;

  @IsDateString()
  @IsOptional()
  dataNascimento: Date;

  @IsEnum(GeneroEnum, { message: 'O gênero deve ser apenas M, F ou I.' })
  @IsOptional()
  genero: GeneroEnum;
}
