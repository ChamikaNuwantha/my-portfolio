const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Chamika Nuwantha SE.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('resume_text.txt', data.text);
    console.log('Done!');
}).catch(function(error) {
    console.error('Error:', error);
});
