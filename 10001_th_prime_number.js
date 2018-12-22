let primeCount = 2;
let dividerCount = 0;

let number = 5;
while (primeCount < 10001) {
  let halfOfNumber = Math.floor(number/2);
  dividerCount = 0;
  for ( let divider = halfOfNumber; divider >= 2; divider--) {
    if (number % divider == 0) {
      dividerCount++;
    }
  }
  if (dividerCount == 0) {
    primeCount++;
    primeNumber = number;
  }
  number+=2;
}

console.log(primeNumber);
