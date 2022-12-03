import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService, CompilerService } from './app.service';

@Controller("/api/v1/")
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly compilerService:CompilerService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //preguntar object
  @Post("compiler/java")
  compilarCodigoJava(@Body() body){
    const {className,code}=body;
    return this.compilerService.compileWithJava(className,code);
  }

}
