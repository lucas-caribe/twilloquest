let string1 = process.argv[2].toLowerCase();
let string2 = process.argv[3].toLowerCase();

if(string1 === string2)
  console.log(0);
else if(string1 < string2)
  console.log(-1);
else if(string1 > string2)
  console.log(1);