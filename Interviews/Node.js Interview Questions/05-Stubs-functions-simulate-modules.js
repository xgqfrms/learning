// Stubs are functions/programs that simulate the behaviors of components/modules.



var fs = require('fs')

var writeFileStub = sinon.stub(fs, 'writeFile', function (path, data, cb) {  
  return cb(null)
})

expect(writeFileStub).to.be.called  
writeFileStub.restore()  