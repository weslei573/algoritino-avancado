let n = 1;
let nt = 500;
console.log('Impar e multiplos de tres, entre 1 e 500');
for(i = n; i <= nt; i++){
    if(i%2==1 && i%3==0){
        console.log(i);
    }
}