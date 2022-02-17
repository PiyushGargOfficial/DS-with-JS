var str = "piyush";

const reverseStr = () => {
  //   console.log(str.split("").reverse().join(""));

  console.log(
    str.split("").reduce((output, char) => {
      output = char + output;
      return output;
    }, "")
  );
};

reverseStr();
