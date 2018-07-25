/**
 * What are callbacks?
 * If you've had any experience with JavaScript before, there's a good chance you've seen callbacks already. 
 * The basic idea is that if we have to do something which could take a long time, let's say we're trying to read a large file,
 * we don't want our node.js server waiting around for the file to be read when it could be dealing with other incoming requests. 
 * So to deal with this we tell Node.js to do what it has to do in the background and to call a function when it's finished. 
 * This way Node.js can carry on dealing with other requests while it's reading the file, making our code non-blocking. 
 * When we have multiple things going on at the same time, like we have in our example, we can also call this code asynchronous. 
 */

 //**********without callback******************/
let out =2;

setTimeout(function () {
  out= 10;
}, 1000);

let result = out +12;

console.log(result);


 //**********with normal function******************/

  let out = 2;

  function getResult()
  {
    setTimeout(function () {
      return 10;
    }, 1000);
  }
  let result = getResult();
  let result = result +12;
  console.log(result)


//**************using callback*******************/
let out =2;

function getRes(callback)
{
  setTimeout(function () {
    out= 10;
    callback(out);
  }, 1000);
  
}

getRes(function(out){

  let result = out +12;
  console.log(result)
  
})


