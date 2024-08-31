const url = new URL("http://localhost:8080/index.html?userName=Ram&password=ram1234");

console.log("Href: ", url.href);
console.log("Protocol: ", url.protocol);
console.log("Host: ", url.hostname);
console.log("Port: ", url.port);
console.log("PathName: ", url.pathname);
console.log("Search: ", url.search);
console.log("SearchParms: ", url.searchParams);

// get method
console.log("\nUserName: ", url.searchParams.get("userName"));
console.log("Password: ", url.searchParams.get("password"));

// set method
url.searchParams.set("email", "ram@gmail.com");
console.log("\nSearch: ", url.search);

url.searchParams.append("gender", "M");
console.log("\nSearch: ", url.search);

console.log("\nHas: ", url.searchParams.has("userName"));

url.searchParams.delete("userName");
console.log("\nSearch: ", url.search);

console.log("\nkeys: ", url.searchParams.keys());
console.log("Values: ", url.searchParams.values());
console.log("Entries: ", url.searchParams.entries());



url.searchParams.append("coures", "c");
url.searchParams.append("coures", "c++");
url.searchParams.append("coures", "java");
console.log("\nSearch: ", url.search);
console.log("Get All: ", url.searchParams.getAll("coures"));