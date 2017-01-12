// error-first callback

fs.readFile(filePath, function(err, data) {  
    if (err) {
        // handle the error, the return is important here
        // so execution stops here
        return console.log(err)
    }
    // use the data object
    console.log(data)
})



