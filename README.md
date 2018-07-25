

### Blocking and non-blocking calls in Node.js

You know that Node.js is based on an event-driven non-blocking I/O model. You may be wondering what does it mean for something to be blocking or something not to be blocking. In fact, there are both types of operations available in Node.js.

Performing a blocking system call causes the process to enter the blocked state. Control is let back to the process only after the I/O event that is being waited upon occurs.

The most common task that any developer would do is File I/O, this being a very fundamental process :

Open a File.

Read it's contents and print.

Do something else.

Let's see how this can be done with blocking and non-blocking code in node.js!

#### Blocking

const fs = require('fs');
data = fs.readFileSync('file.js'); // blocks here until file is read
console.log(data.toString());
console.log("Done");

It's a blocking code i.e until the read operation is completed, the next lines of code is not executed.

#### Non-Blocking
```
const fs = require('fs');
fs.readFile('file.js', (err, data) => {
  if (err) throw err;
  else  
  {
    data1=data
    console.log(data1.toString());
  }
});
console.log("Done");
```
In this Non-blocking example the program does not wait for file reading and proceeds to print "Done" and at the same time, the program without blocking continues reading the file and we now have a callback function. Certainly the callback can't execute until the file read is done.


### What is callbacks?
If you've had any experience with JavaScript before, there's a good chance you've seen callbacks already. The basic idea is that if we have to do something which could take a long time, let's say we're trying to read a large file, we don't want our node.js server waiting around for the file to be read when it could be dealing with other incoming requests. So to deal with this we tell Node.js to do what it has to do in the background and to call a function when it's finished. This way Node.js can carry on dealing with other requests while it's reading the file, making our code non-blocking. When we have multiple things going on at the same time, like we have in our example, we can also call this code asynchronous. 


#### Without callback 
```
let out =2;

setTimeout(function () {
  out= 10;
}, 1000);

let result = out +12;

console.log(result);

```

#### With normal function
```
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
```

#### With using callback
```
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

```
### Conclusion
Whenever you have a process that could take a long time to execute, you should always ensure that you're dealing with it in a non-blocking way. When implemented right, good use of callbacks and asynchronous code can provide huge improvements to the speed and scalability of your code.


### What is callback hell?
  Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively. 
  The cause of callback hell is when people try to write JavaScript in a way where execution happens visually from top to   bottom. 
  Lots of people make this mistake!
  A lot of code ends up looking like this:
  
 ###### Nested callback -> Callback hell
```
function getRes1(out,callback)
{
  setTimeout(function () {
    out = out + 12;
    callback(out);
  }, 1000);
  
}

function getRes2(out,callback)
{
  setTimeout(function () {
    out = out + 12;
    callback(out);
  }, 1000);
  
}


function getRes3(out,callback)
{
  setTimeout(function () {
    out = out + 12;
    callback(out);
  }, 1000);
  
}


function getRes4(out,callback)
{
  setTimeout(function () {
    out = out + 12;
    callback(out);
  }, 1000);
  
}

let out =2;

getRes(out,function(out){
    console.log("result1",out);
    getRes(out,function(out){
        console.log("result2",out);
        getRes3(out,function(out){
            console.log("result3",out);
            getRes4(out,function(out){
                console.log("result4",out);
            })
        })
    })
})

```



 ### How do I fix callback hell?
  You only need to follow three rules:
  1. Keep your code shallow
  2. Modularize
  3. Handle every single error
 
 ### How to apply these three rules?
  ##### 1. Using Promises 
  The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of     three different states:
  * pending - The initial state of a promise.
  * fulfilled - The state of a promise representing a successful operation.
  * rejected - The state of a promise representing a failed operation.
  
```
function getResult1(out){
    return new Promise(function(resolve,reject){
        try {
            setTimeout(function () {
                let result = out + 12;
                 resolve(result);
            }, 1000);
        } catch (error) {
            reject(error);
        }  
  })
}


function getResult2(out){
    return new Promise(function(resolve,reject){
        try {
            setTimeout(function () {
                let result = out + 12;
              resolve(result);
            }, 1000);
        } catch (error) {
            reject(error);
        }  
  })
}

function getResult3(out){
    return new Promise(function(resolve,reject){
        try {
            setTimeout(function () {
                let result = out + 12;
              resolve(result);
            }, 1000);
        } catch (error) {
            reject(error);
        }  
  })
}

function getResult4(out){
    return new Promise(function(resolve,reject){
        try {
            setTimeout(function () {
                let result = out + 12;
              resolve(result);
            }, 1000);
        } catch (error) {
            reject(error);
        }  
  })
}

let out=2;

getResult1(out)
.then(function(out){
    return new Promise(function(resolve,reject){
        console.log("result1",out);
        getResult2(out)
        .then(function(out){
        resolve(out);
        }).catch(function(err){
        reject(err)
    })
 })
}).then(function(out){
    return new Promise(function(resolve,reject){
        console.log("result2",out);
        getResult3(out)
        .then(function(out){
           resolve(out);
        }).catch(function(err){
           reject(err)
        })
     })
}).then(function(out){
    return new Promise(function(resolve,reject){
        console.log("result3",out);
        getResult4(out)
        .then(function(out){
           resolve(out);
        }).catch(function(err){
           reject(err)
        })
     })
}).then(function(out){
    console.log("result4",out);
}).catch(function(out){
    console.log(err);
})

```

 ##### 2. Using Async and Await
 
It is actually built on top of promises. It cannot be used with plain callbacks or node callbacks and new way to write asynchronous code.  
It makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies.
 
 ```
 
function getResult1(out){
    return new Promise(function(resolve,reject){
        try {
            setTimeout(function () {
                let result = out + 12;
                 resolve(result);
            }, 1000);
        } catch (error) {
            reject(error);
        }  
  })
}


function getResult2(out){
    return new Promise(function(resolve,reject){
        try {
            setTimeout(function () {
                let result = out + 12;
              resolve(result);
            }, 1000);
        } catch (error) {
            reject(error);
        }  
  })
}

function getResult3(out){
    return new Promise(function(resolve,reject){
        try {
            setTimeout(function () {
                let result = out + 12;
              resolve(result);
            }, 1000);
        } catch (error) {
            reject(error);
        }  
  })
}

function getResult4(out){
    return new Promise(function(resolve,reject){
        try {
            setTimeout(function () {
                let result = out + 12;
              resolve(result);
            }, 1000);
        } catch (error) {
            reject(error);
        }  
  })
}


async function printResults(){
    let out=2;
    try {
         out = await getResult1(out);
         console.log(out);
         out = await getResult2(out);
         console.log(out);
         out = await getResult3(out);
         console.log(out);
         out = await getResult4(out);

    } catch (error) {
     console.log(error);   
    }
}

printResults();
```

### Conclusion 
  Thus, we have seen, how we can deal with the problem of callback hell in Node.js. 
  There are a few more ways to solve the problem like using generators, modularization etc.
  But we feel that async-await and promises are the two de-facto solutions for dealing with callback hell, 
  with async preferred more over promises.

    
 







