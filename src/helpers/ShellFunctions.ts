import * as child_process from 'child_process'; 
export class ShellFunctions{

    async excecuteCommand (command:string):Promise<string>{
        const output = new Promise<string>((resolve, reject) => {
            child_process.exec(command, async (err, stdout) => { 
                await console.log(stdout)
                if (err) {reject(err);} 
                resolve(stdout); 
            });
        })
        return output;
    }

}