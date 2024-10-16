function checkPrimeStupid(a) // 175 ms
{
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

function checkPrimeOdd(a) // 85 ms
{
  if(a % 2 === 0)
  {
    return false;
  }
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

function checkPrimeOddSix(a) // 52 ms
{
  if (a === 2)
  {
    return true;
  }
  if(a % 2 === 0)
  {
    return false;
  }
  let modSix = a % 6;
  if((modSix !== 1 && modSix !== 5) && a > 3)
  {
    return false;
  }
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

function checkPrimeOddSixCancel(a) // 16 ms
{
  if (a === 2)
  {
    return true;
  }
  if(a % 2 === 0)
  {
    return false;
  }
  let modSix = a % 6;
  if((modSix !== 1 && modSix !== 5) && a > 3)
  {
    return false;
  }
  let factorCount = 0;
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {
      if (i * j === a) {
        factorCount++;
        return false;
      }
    }
  }
  return factorCount === 0;
}

function checkPrimeStupidMod(a) // 0.75 ms
{
  let factorCount = 0;
  for (let i = 0; i < a; i++) {
    if(a % i === 0)
      {
        factorCount++;
      }
  }
  return factorCount === 1;
}

function checkPrimeChecksMod(a) // 0.25 ms
{
  if (a === 2)
  {
    return true;
  }
  if(a % 2 === 0)
  {
    return false;
  }
  let modSix = a % 6;
  if((modSix !== 1 && modSix !== 5) && a > 3)
  {
    return false;
  }
  let factorCount = 0;
  for (let i = 0; i < a; i++) {
    if(a % i === 0)
      {
        factorCount++;
      }
  }
  return factorCount === 1;
}

function checkPrimeChecksCancelMod(a) // 0.12 ms
{
  if (a === 2)
  {
    return true;
  }
  if(a % 2 === 0)
  {
    return false;
  }
  let modSix = a % 6;
  if((modSix !== 1 && modSix !== 5) && a > 3)
  {
    return false;
  }
  let factorCount = 0;
  for (let i = 0; i < a; i++) {
    if(a % i === 0)
      {
        factorCount++;
        if (factorCount > 1)
          {
            return false;
          }
      }
  }
  return factorCount === 1;
}

function checkPrimeChecksCancelModSqrt(a) // 0.013 ms
{
  if (a === 2)
  {
    return true;
  }
  if(a % 2 === 0)
  {
    return false;
  }
  let modSix = a % 6;
  if((modSix !== 1 && modSix !== 5) && a > 3)
  {
    return false;
  }
  let factorCount = 0;
  for (let i = 0; i < Math.sqrt(a) + 1; i++) {
    if(a % i === 0)
      {
        factorCount++;
        if (factorCount > 1)
          {
            return false;
          }
      }
  }
  return factorCount === 1;
}

var primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541];

var averageMS = 0;

for (let j = 0; j < 1; j++) {
  let primesFound = 0;
  let i = 1;
  let now = performance.now();
  while (primesFound < 100000) {
    i++;
    if (checkPrimeChecksCancelModSqrt(i)) {
      primesFound++;
      //if(primeArray[primesFound-1] !== i)
      //{
      //  alert("BAD " + primeArray[primesFound-1] + " != " + i)
      //}
    }
  }
  averageMS += performance.now() - now;
  alert(i);
}


averageMS /= 1;
alert(averageMS);
