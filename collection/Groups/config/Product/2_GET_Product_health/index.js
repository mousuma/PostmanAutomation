var fs = require('fs');
var Item = require('postman-collection').Item;

const EXEC = fs.readFileSync(`${__dirname}/test.js`, 'utf8').split("\n");

var myItems2 = new Item({
    name: "Health endpoint 2",
    description: "Product API /health 2 endpoint",
    request: {
        url: "{{URL}}/health",
        method: "GET",
    }
});

myItems2.events.add({
    listen: 'test',
    script: {
        exec: EXEC,
    }
});

exports.myItems2 = myItems2;
