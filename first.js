const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
var x = 56643;
console.log("x is " + x);
readline.question('Enter code:', code => 
{
  //console.log(`code entered is: ${code}!`);
  eval(code);
  console.log("x is now " + x);
  readline.close();
});



