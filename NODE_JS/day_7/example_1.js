const querystring = require("querystring");

const user = querystring.parse("userName=Ram&password=ram1234");
const { userName, password } = user;
console.log("UserName: ", userName);
console.log("Password: ", password);

console.log("QueryString: ", querystring.stringify(user));