var fs = require('fs');
var path = process.argv[2];
var content = fs.readFileSync(path,"utf8");
var lines = content.split("\n");
console.log(lines.length-1);
