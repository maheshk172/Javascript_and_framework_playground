const {Readable} = require('stream');

/*const inStream = new Readable();

inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
inStream.push(null);*/

/*const inStream = new Readable({
   read(size) {
       this.push(String.fromCharCode(this.currentCharCode++));
       if(this.currentCharCode > 90) {
           this.push(null);
       }
   }
});*/


const inStream = new Readable({
    read(size) {
        setTimeout(() => {

            if (this.currentCharCode > 90) {
                this.push(null);
                return;
            }

            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100)

    }
});

inStream.currentCharCode = 65;


inStream.pipe(process.stdout);

process.on('exit', () => {
   console.err(
       `\n\ncurrentCharCode is ${inStream.currentCharCode}`
   )
});