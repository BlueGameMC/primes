function checkPrimeStupid(a) {
  let factorCount = 0;
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {
      if (i * j === a) {
        factorCount++;
      }
    }
  }
  return factorCount === 0;
}

var averageMS = 0;

for (let j = 0; j < 10; j++) {
  let primesFound = 0;
  let i = 0;
  let now = performance.now();
  while (primesFound < 100) {
    i++;
    if (checkPrimeStupid(i)) {
      primesFound++;
      //console.log(i);
    }
  }
  averageMS += performance.now() - now;
}

averageMS /= 10;
alert(averageMS);
