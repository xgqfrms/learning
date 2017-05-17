/*

https://github.com/RisingStack/nodejs-at-scale-handling-async


https://blog.risingstack.com/event-sourcing-with-examples-node-js-at-scale/


https://github.com/RisingStack/nodejs-at-scale-handling-async/tree/master/handler

*/





// validateParams, dbQuery, serviceCall are higher-order functions
// DONT
function handler (done) {  
  validateParams((err) => {
    if (err) return done(err)
    dbQuery((err, dbResults) => {
      if (err) return done(err)
      serviceCall((err, serviceResults) => {
        done(err, { dbResults, serviceResults })
      })
    })
  })
}


// validateParams, dbQuery, serviceCall are higher-order functions
function handler (done) {  
  async.waterfall([validateParams, dbQuery, serviceCall], done)
}



// validateParams, dbQuery, serviceCall are thunks
function handler () {  
  return validateParams()
    .then(dbQuery)
    .then(serviceCall)
    .then((result) => {
      console.log(result)
      return result
    })
}


// validateParams, dbQuery, serviceCall are thunks
const handler = co.wrap(function * () {  
  yield validateParams()
  const dbResults = yield dbQuery()
  const serviceResults = yield serviceCall()
  return { dbResults, serviceResults }
})


// validateParams, dbQuery, serviceCall are thunks
async function handler () {  
  await validateParams()
  const dbResults = await dbQuery()
  const serviceResults = await serviceCall()
  return { dbResults, serviceResults }
})





