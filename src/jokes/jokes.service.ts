import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class JokesService {
    private jokes: {id: number, joke: string}[] = [];

    async onModuleInit() {
        const dataPath = path.join(__dirname, '../../../src/data/dadjokes.json');
        const raw = fs.readFileSync(dataPath, 'utf8');
        this.jokes = JSON.parse(raw);
    }
    
    getAll() {
        return this.jokes;
    }

    getJokeById(id: number) {
        return this.jokes.find(j => j.id == id);
    }

    getRandomJoke() {
        return this.jokes[Math.round(Math.random() * this.jokes.length)];
    }
}
