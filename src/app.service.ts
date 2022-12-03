import { Injectable} from '@nestjs/common';
import { v4 } from 'uuid';
import {FileFunctions} from "./helpers/FileFunctions";
import * as child_process from 'child_process'; 

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class CompilerService {
  compileWithJava(className,code){
    const extention='java'
    const resultsFolder=`./compilerResults/java/${v4()}`;
    const javaFileDirectory=`${resultsFolder}/${className}.${extention}`;
    const command=`(javac ${javaFileDirectory}) -and (java -cp ${resultsFolder} ${className})`;
    console.log(command)
    const fileFuntcions=new FileFunctions();

    fileFuntcions.WriteFile(javaFileDirectory,code,resultsFolder);

    child_process.exec("javac ./compilerResults/java/ad8f21fc-a4c6-4eba-801d-aaaa1b722975/Hello.java", async (err, stdout) => {
                                                  if (err) {return;}
                                                  await console.log(stdout)
                                                  return(stdout);}
    );

  }

}







