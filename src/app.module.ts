import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MathService } from './math.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MathService],
})
export class AppModule {}
