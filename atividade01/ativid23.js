let readlineSync = require('readline-sync')
let n;
n = parseFloat(readlineSync.question('Tabuada N: '));
for(i=0; i<=10; i++){
    if(i==0){
        console.log(i + ' x '+n+' :'+ i*n);
    }else{
        console.log(i + ' x '+n+' :'+i+''+ i*n);
    }
}