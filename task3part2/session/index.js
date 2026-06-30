const addproduct = require('./modules/addproduct');
const listproduct = require('./modules/listproduct');
const listtask = require('./modules/listproduct');
const removeproduct = require('./modules/removeproduct');
const removetask = require('./modules/removeproduct');
const update = require('./modules/update');

console.log('session/index.js running');
listproduct();
removeproduct(2);
listproduct();
update(3, "airpodes", "active");
addproduct("express");
listproduct();