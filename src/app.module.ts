import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesController } from './jokes/jokes.controller';
import { JokesService } from './jokes/jokes.service';
import { JokesModule } from './jokes/jokes.module';

@Module({
  imports: [JokesModule],
  controllers: [AppController, JokesController],
  providers: [AppService, JokesService],
})
export class AppModule {}
