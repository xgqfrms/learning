// Node.js Interview Puzzles



// What's wrong with the code snippet?

new Promise((resolve, reject) => {  
  throw new Error('error')
}).then(console.log)



new Promise((resolve, reject) => {  
  throw new Error('error')
}).then(console.log).catch(console.error)


process.on('unhandledRejection', (err) => {  
  console.log(err)
})


// What's wrong with the following code snippet?

function checkApiKey (apiKeyFromDb, apiKeyReceived) {  
  if (apiKeyFromDb === apiKeyReceived) {
    return true
  }
  return false
}


// https://en.wikipedia.org/wiki/Timing_attack

// https://www.npmjs.com/package/cryptiles



function checkApiKey (apiKeyFromDb, apiKeyReceived) {  
  return cryptiles.fixedTimeComparison(apiKeyFromDb, apiKeyReceived)
}



// What's the output of following code snippet?

Promise.resolve(1)  
  .then((x) => x + 1)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error)


// 2 



/*
A new Promise is created, that will resolve to 1.

The resolved value is incremented with 1 (so it is 2 now), and returned instantly.

The resolved value is discarded, and an error is thrown.

The error is discarded, and a new value (1) is returned.

The execution did not stop after the catch, but before the exception was handled, it continued, and a new, incremented value (2) is returned.

The value is printed to the standard output.

This line won't run, as there was no exception.

*/







