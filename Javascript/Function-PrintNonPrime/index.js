function checkPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printPrime(till) {
    for (let i = 2; i <= till; i++) {
      if (!checkPrime(i)) {
        console.log(i);
      }
    }
  }
  
  printPrime(100);
  