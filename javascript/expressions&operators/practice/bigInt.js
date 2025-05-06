function factorialBigInt(n) {
    let result = 1n;
    for(let i=1n;i<=n;i++){
        result *= i;
    }
    return result;
}

console.log(factorialBigInt(50n));