let readlineSync = require('readline-sync')
let numero;
numero = parseFloat(readlineSync.question('informe um valor real: '));
for(i = 1; i <= 200; i++){
    console.log(i+' = '+(numero*i).toFixed(2));
}