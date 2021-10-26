let readlineSync = require('readline-sync')
let par = 0;
let media;
let mediap=0;;
let impar = 0;
let numero;
valor = 0;
total = 0;
let i = 0;
do {
    i++;
    numero = parseFloat(readlineSync.question('Digite um valor: '));
    while(numero < 0){
        console.log('numero invalido. insira um valor positivo');
        numero = parseFloat(readlineSync.question('informe o valor: '));
    }  
    if(numero % 2 == 0){
        par = par + 1;
        mediap = mediap+numero;
    } else {
        impar = impar + 1;
    }
    valor = valor + numero;
} while (numero!=0);
total = valor/i;
media = mediap/par;
console.log('quantidade de numero pares: '+par);
console.log('quantidade de numero impares: '+impar);
console.log('media de valores pares: '+media.toFixed(2));
console.log('Media geral dos numeros lidos: '+total.toFixed(2));