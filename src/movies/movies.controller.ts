import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All movies';
  }

  @Get('/:id')
  getOne(@Param('id') movidId: string) {
    return `One movie with the id ${movidId}`;
  }

  @Post()
  create() {
    return `Create a movie`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `Delete a movie with the id ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movidId: string) {
    return `Patch a movie with the id ${movidId}`;
  }
}
