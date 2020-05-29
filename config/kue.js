const kue = require('kue');
const queue = kue.createQueue();
console.log("InKue");
module.exports = queue;