//the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
//the 1st two numbers in the sequence is fibonacci(2) = [0,1]
//fibonacci(3) = [0,1,1]
//fibonacci(5)= [0,1,1,2,3]

function fibonacci(n) {
    const fib = [0, 1]
    for (var i = 1; i <= n - 2; i++) {
        sum = fib[i] + fib[i - 1]
        fib.push(sum)
    }
    return fib
}

console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(0));

