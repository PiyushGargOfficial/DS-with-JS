var a = 0;
var b = 1;
var c;
var d = [0];

const printFibo = () => {
  for (let i = a; i <= 300; ) {
    c = a + b;
    a = b;
    b = c;
    d.push(c);
    i = a;
  }
  console.log(d);
};

printFibo();
