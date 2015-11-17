fs = require('fs');

var content = "asas";

fs.writeFile('test.txt', content);

fs.writeFile('test.txt', content + "\n", function (err) {
    if (err) 
        return console.log(err);
    console.log('saved');
});
