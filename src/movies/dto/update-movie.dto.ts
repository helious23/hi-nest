import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// npm install @nestjs/mapped-types : PartialType 사용하여 optional

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
