import { Controller, Get, Param, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('jokes')
@Controller('jokes')
export class JokesController {
    constructor(private readonly jokesService: JokesService) {}

    @Get()
    @ApiOperation({ summary: 'Get a random dad joke' })
    @ApiResponse({ status: 200, description: 'A dad joke' })
    getRandomJoke() {
        return this.jokesService.getRandomJoke();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a dad joke by id' })
    @ApiResponse({ status: 200, description: 'A dad joke by id' })
    getJokeById(@Param('id') id: string) {
        return this.jokesService.getJokeById(+id);
    }
}
