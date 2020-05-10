var fs = require('fs')
// read file 
fs.readFile('./cal.js', 'utf8', function(err, data){
    console.log('data : ' + data)
})
// create new file and write 
fs.writeFile('new-file.txt', 'This is content for the new file', function(err, data){
    console.log('File is saved..')
})

// append into end of file 
fs.appendFile('new-file.txt',', /n Addition is here in the file ', function (err, data){

    console.log('Added into the end of file ... ')
})
// Remove file

fs.unlink('new-file.txt',function(err){

    console.log('File deleted..')
})