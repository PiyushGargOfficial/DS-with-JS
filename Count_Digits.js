var n = 52327758765;
var r, d;

const countDigits = () => {
  //   d = 0;
  //   while (n != 0) {
  //     r = n % 10;
  //     n = n - r;
  //     n = n / 10;
  //     d++;
  d = n.toString().length;
  console.log(d);
};

//   console.log(d);
// };

countDigits();
