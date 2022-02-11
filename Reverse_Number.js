var n = 1234;
var m;
var digit,
  value = 0;

const reverseNumber = () => {
  //   while (n != 0) {
  //     m = n % 10;
  //     console.log(m);
  //     n = Math.floor(n / 10);
  //   }

  //   while (n != 0) {
  //     digit = n % 10;
  //     value = value * 10;
  //     value = value + digit;

  //     n = Math.floor(n / 10);
  //   }
  //   console.log(value);

  console.log(parseInt(n.toString().split("").reverse().join("")));
};

reverseNumber();
