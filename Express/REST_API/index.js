const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const FILE_PATH = path.join(__dirname, "./data/userRecords.json");
const users = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));

app.use(express.json());

app.get("/api/v1/users", (req, res) => {
  const extractedUsers = [];
  for (let user of users) {
    const { password, ...extractedUser } = user;
    extractedUsers.push(extractedUser);
  }
  res.status(200).json({
    "status": "success",
    "count": users.length,
    "data": {
      "users": extractedUsers
    }
  });
});


app.post("/api/v1/users", (req, res) => {
  const id = users[users.length -1].id + 1;
  const newUser = Object.assign({id: id}, req.body);
  users.push(newUser);
  const {password, ...user} = newUser;
  fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
    if (err) throw err;
    res.status(201).json({
      "status": "success",
      "data": {
        "newUser": user
      }
    });
  });
});



app.get("/api/v1/users/:id", (req, res) => {
  const userID = Number(req.params.id);
  const user = users.find((user) => user.id == userID);
  if (user) {
    const {password, ...rest} = user;
    res.status(200).json({
      "status": "success",
      "data": {
        "user": rest
      }
    });
  } else {
    res.status(404).json({
      "status": "failed",
      "message": `User with id ${userID} is not found`
    });
  }
});




app.patch("/api/v1/users/:id", (req, res) => {
  const userID = Number(req.params.id);
  const userToUpdate = users.find((user) => user.id == userID);
  if (userToUpdate) {
    const index = users.indexOf(userToUpdate);
    const updatedUserRecord = Object.assign(userToUpdate, req.body);
    users[index] = updatedUserRecord;
    const {password, ...user} = updatedUserRecord;
    fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
      if (err) throw err;
      res.status(200).json({
        "status": "success",
        "data": {
          "user": user
        }
      });
    });
  } else {
    res.status(404).json({
      "status": "failed",
      "message": `User with id ${userID} is not found`
    });
  }
});



app.delete("/api/v1/users/:id", (req, res) => {
  const userID = Number(req.params.id);
  const userToDelete = users.find((user) => user.id == userID);
  if (userToDelete) {
    const index = users.indexOf(userToDelete);
    users.splice(index, 1);
    fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
      if (err) throw err;
      res.status(204).json({});
    });
  } else {
    res.status(404).json({
      "status": "failed",
      "message": `User with id ${userID} is not found`
    });
  }
});



app.listen(3000, () => console.log("Server is running ...."));
