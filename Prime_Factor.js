var n = [2, 3, 7, 12, 24];
var count;

const checkPrime = () => {
  var l = n.length;

  for (let i = 0; i < l; i++) {
    count = 0;
    for (let j = 2; j * j <= n[i]; j++) {
      if (n[i] % j == 0) {
        count++;
        break;
      }
    }
    if (count == 0) {
      console.log(`${n[i]} is a prime number and count is ${count}`);
    } else {
      console.log(`${n[i]} is not a prime number and count is ${count}`);
    }
  }
};

checkPrime();
