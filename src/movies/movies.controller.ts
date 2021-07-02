import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `Searching for a movie made after ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movidId: string) {
    return `One movie with the id ${movidId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `Delete a movie with the id ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
