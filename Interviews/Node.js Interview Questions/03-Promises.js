// Promises



new Promise((resolve, reject) => {  
    setTimeout(() => {
        resolve('result')
    }, 100)
})
.then(console.log())
.catch(console.error())






