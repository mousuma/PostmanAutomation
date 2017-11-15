var fs = require('fs');

 var Item = require('postman-collection').Item;

 const EXEC = fs.readFileSync(`${__dirname}/test.js`, 'utf8').split("\n");

var myItems3 = new Item({
    name: "Health endpoint 3",
    description: "Product API /health 3 endpoint",
    request: {
        url: "{{URL}}/product/:id",
        method: "POST",
    }
});

myItems3.events.add({
    listen: 'test',
    script: {
        exec: EXEC,
    }
});


exports.myItems3 = myItems3;



