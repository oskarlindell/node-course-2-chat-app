var moment = require("moment");

// var date = new Date();
// console.log(date.getMonth());

var createdAt = 1234;
var date = moment(createdAt);
//date.add(100, "year").subtract(9, "months");
console.log(date.format("MMM Do, YYYY"));
console.log(date.format("hh:mm"));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
