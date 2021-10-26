var fibonaci = []
fibonaci[0] = 1;
fibonaci[1] = 1;
fibonaci[2] = 2;

for (var i = 3; i < 10; i ++){
    fibonaci[i] = fibonaci[i - 1] + fibonaci[i-2]
}
console.log(fibonaci);