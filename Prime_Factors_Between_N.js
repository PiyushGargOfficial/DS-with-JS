var n = 2;
var m = 100;
var count;

const checkPrime = () => {
  var l = n.length;

  for (let i = n; i < m; i++) {
    count = 0;
    for (let j = 2; j * j <= i; j++) {
      if (i % j == 0) {
        count++;
        break;
      }
    }
    if (count == 0) {
      console.log(`${i} is a prime number and count is ${count}`);
    } else {
      continue;
    }
  }
};

checkPrime();
