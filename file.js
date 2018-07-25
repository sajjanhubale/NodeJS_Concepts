/**
 * Blocking and Non-Blocking
 */

 //****************Blocking*******************/

const fs = require('fs');
data = fs.readFileSync('file.js'); // blocks here until file is read
console.log(data.toString());


 //****************Non-Blocking*******************/

const fs = require('fs');
fs.readFile('file.js', (err, data) => {
  if (err) throw err;
  else  
  {
    data1=data
    console.log(data1.toString());
  }
});

