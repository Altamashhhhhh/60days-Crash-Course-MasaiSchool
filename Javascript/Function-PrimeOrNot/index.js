function checkPrime(num) {
  if (num <= 1) {
    return "Not a Prime Number";
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return "Not a Prime Number";
    }
  }
  return "Prime Number";
}

console.log(checkPrime(12));
