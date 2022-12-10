import * as fs from 'fs';
export class FileFunctions{

    checkIfFolderExist(directoryName:string):boolean{
        return fs.existsSync(directoryName);
      }

    CreateDirectory(directoryName:string):void{
        fs.mkdirSync(directoryName,{recursive:true}); 
    }

    WriteFile(fileDirectory:string,content:string,directoryName:string):void{
        if(!this.checkIfFolderExist(directoryName)){
            this.CreateDirectory(directoryName);
        }
        fs.writeFile(fileDirectory, content, (err) => {if (err) throw err;}); 
    }

    
    CreateFile(fileDirectory:string,content:string,directoryName:string):Promise<string>{

        const createFile= new Promise<string>((resolve, reject) => {
            if(!fs.existsSync(directoryName))
              { fs.mkdirSync(directoryName,{recursive:true});}
      
            fs.writeFile(fileDirectory, content, (err) => 
                {if (err) reject(err) }); 
            resolve("created")
          })
          
        return createFile;
    }


    
}
