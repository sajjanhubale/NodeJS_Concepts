
 ### Solution for callback hell using promises 
  Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively. 
  The cause of callback hell is when people try to write JavaScript in a way where execution happens visually from top to bottom. 
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
 * 1. Keep your code shallow
 * 2. Modularize
 * 3. Handle every single error
 
 ### How to apply these three rules?
 * 1. Using Promises -> Below is the example of Promises
 * 2. Using Async.js
 
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

### Conclusion :
    Thus, we have seen, how we can deal with the problem of callback hell in Node.js. 
    There are a few more ways to solve the problem like using generators, modularization etc.
    But we feel that async and promises are the two de-facto solutions for dealing with callback hell, 
    with async preferred more over promises.
 







