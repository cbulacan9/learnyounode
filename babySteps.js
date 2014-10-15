var numVar = process.argv;
var numTotal = 0;

for (x=2; x<numVar.length; x++) {
  if (typeof numVar[x] != "number") {
    numTotal += parseInt(numVar[x]);
  }
  else {
    numTotal += numVar[x];
  }
}

console.log(numTotal);


  

  


