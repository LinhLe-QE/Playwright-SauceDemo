function primeNumber(number) {
    if (number < 2) {
        return false
    }
    let result
    if (number > 2) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false
            }
        }
    }
    return true
}

console.log(primeNumber(9));
