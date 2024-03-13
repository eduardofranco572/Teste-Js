//Otimização de Cálculos || sequecia fibonacci

let fibonacciCache = {}

function fibonacci(num) {
  const big = BigInt(num)

  if (typeof fibonacciCache[big] === 'bigint') {
    return fibonacciCache[big]
  }

  let result = 0n

  if (big === 1n) {
    result = 1n
  } else if (big >= 2n) {
    result = fibonacci(big - 1n) + fibonacci(big - 2n)
	}
  
  fibonacciCache[big] = result

  return result
}


console.log(fibonacci(0))
console.log(fibonacci(2n))
console.log(fibonacci(7))
console.log(fibonacci(144n))
