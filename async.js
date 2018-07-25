/**
 * What is Async and Await?
 * It is actually built on top of promises and cannot be used with plain callbacks or node callbacks and new way to write asynchronous code.
 * It makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies. 
 */


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