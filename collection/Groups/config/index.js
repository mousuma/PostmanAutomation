
var itemGroup = require('postman-collection').ItemGroup;
var checkout = require('./Product');


 var ItemFolder = new itemGroup({
    name: "This is API test folder",
    description: "This is my second postman Folder"
});


var item;
var obj=[];
var rst;

for(var c in checkout)
{
    item = checkout[c];
    for(var key in item)
    {
         rst = item[key];
        for (var k in rst )
        {
            obj.push(rst[k]);
        }
    }
}


for(var o in obj) {

    console.log(JSON.stringify(obj[0]));
    ItemFolder.items.add(obj[o]);
}

exports.ItemFolder = ItemFolder;