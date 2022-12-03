import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, CompilerService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,CompilerService],
})
export class AppModule {}
