import { Injectable} from '@nestjs/common';
import { v4 } from 'uuid';
import {FileFunctions} from "./helpers/FileFunctions";
import { ShellFunctions } from './helpers/ShellFunctions';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class CompilerService {
  compileWithJava(className,code):void{
    const extention='java'
    const resultsFolder=`./compilerResults/java/${v4()}`;
    const javaFileDirectory=`${resultsFolder}/${className}.${extention}`;
    const command=`javac ${javaFileDirectory} && java -cp ${resultsFolder} ${className}`;

    const shellFunctions= new ShellFunctions();
    const fileFunctions=new FileFunctions();
    fileFunctions.CreateFile(javaFileDirectory,code,resultsFolder).then((res)=>{
      shellFunctions.excecuteCommand(command);
    })


  }

}





