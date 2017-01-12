// Use Promises



fs.readFile('./package.json', 'utf-8', function (err, data) {  
  if (err) {
    return console.log(err)
  }

  try {
    JSON.parse(data)
  } catch (ex) {
    return console.log(ex)
  }
  console.log(data.name)
})



fs.readFileAsync('./package.json').then(JSON.parse).then((data) => {  
  console.log(data.name)
})
.catch((e) => {
  console.error('error reading/parsing file', e)
})










