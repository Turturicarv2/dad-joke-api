import { Controller, Get, Param, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
    constructor(private readonly jokesService: JokesService) {}

    @Get()
    getRandomJoke() {
        return this.jokesService.getRandomJoke();
    }

    @Get(':id')
    getJokeById(@Param('id') id: string) {
        return this.jokesService.getJokeById(+id);
    }
}
