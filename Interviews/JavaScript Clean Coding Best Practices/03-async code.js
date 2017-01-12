// async code


// AVOID
asyncFunc1((err, result1) => {  
  asyncFunc2(result1, (err, result2) => {
    asyncFunc3(result2, (err, result3) => {
      console.lor(result3)
    })
  })
})

// PREFER
asyncFuncPromise1()  
  .then(asyncFuncPromise2)
  .then(asyncFuncPromise3)
  .then((result) => console.log(result))
  .catch((err) => console.error(err))




// AVOID
const fs = require('fs')

function readJSON (filePath, callback) {  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return callback(err)
    }

    try {
      callback(null, JSON.parse(data))
    } catch (ex) {
      callback(ex)
    }
  })
}

readJSON('./package.json', (err, pkg) => { console.log(err, pkg) })

// PREFER
const fs = require('fs')  
const promisify = require('es6-promisify')

const readFile = promisify(fs.readFile)  
function readJSON (filePath) {  
  return readFile(filePath)
    .then((data) => JSON.parse(data))
}

readJSON('./package.json')  
  .then((pkg) => console.log(pkg))
  .catch((err) => console.error(err))






const request = require('request-promise-native')

function getExtractFromWikipedia (title) {  
  return request({
    uri: 'https://en.wikipedia.org/w/api.php',
    qs: {
      titles: title,
      action: 'query',
      format: 'json',
      prop: 'extracts',
      exintro: true,
      explaintext: true
    },
    method: 'GET',
    json: true
  })
    .then((body) => Object.keys(body.query.pages).map((key) => body.query.pages[key].extract))
    .then((extracts) => extracts[0])
    .catch((err) => {
      console.error('getExtractFromWikipedia() error:', err)
      throw err
    })
} 

// PREFER
async function getExtractFromWikipedia (title) {  
  let body
  try {
    body = await request({ /* same parameters as above */ })
  } catch (err) {
    console.error('getExtractFromWikipedia() error:', err)
    throw err
  }

  const extracts = Object.keys(body.query.pages).map((key) => body.query.pages[key].extract)
  return extracts[0]
}

// or
const co = require('co')

const getExtractFromWikipedia = co.wrap(function * (title) {  
  let body
  try {
    body = yield request({ /* same parameters as above */ })
  } catch (err) {
    console.error('getExtractFromWikipedia() error:', err)
    throw err
  }

  const extracts = Object.keys(body.query.pages).map((key) => body.query.pages[key].extract)
  return extracts[0]
})

getExtractFromWikipedia('Robert Cecil Martin')  
  .then((robert) => console.log(robert))




