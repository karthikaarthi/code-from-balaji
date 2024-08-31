const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");
const app = express();

const FILE_PATH = path.join(__dirname, "./data/userRecords.json");
const users = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
const JWT_SECRET_KEY = "!@#$";

app.use(express.json());
app.use(cookieParser());


app.get("/api/v1/users", (req, res) => {
  const extractedUsers = [];
  for (let user of users) {
    const { password, ...extractedUser } = user;
    extractedUsers.push(extractedUser);
  }

  res.status(200).json({
    status: "success",
    count: users.length,
    data: {
      users: extractedUsers
    }
  });
});


app.post("/api/v1/auth/signup", (req, res) => {
  const { email } = req.body;
  
  for (let user of users) {
    if (user.email == email) {
      return res.status(409).json({
        status: "failed",
        message: "Duplicate Key"
      });
    }
  }

  const id = users[users.length -1].id + 1;
  const newUser = Object.assign({id: id}, req.body);
  const hashedPassword = bcryptjs.hashSync(newUser.password, 10);
  newUser.password = hashedPassword;
  users.push(newUser);

  const { password, ...user } = newUser;
  fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
    if (err) throw err;
    res.status(201).json({
      status: "success",
      data: {
        user: user
      }
    });
  });
});




app.post("/api/v1/auth/signin", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email == email);
  
  if (!user) {
    return res.status(404).json({
      status: "failed",
      message: "User not found"
    });
  }

  if (bcryptjs.compareSync(password, user.password)) {
    const accessToken = jwt.sign({id: user.id}, JWT_SECRET_KEY);
    const { password, ...rest } = user;
    res.status(200).cookie("access_token", accessToken, {httpOnly: true}).json({
      status: "success",
      data: {
        user: rest
      }
    });
  } else {
    res.status(401).json({
      status: "failed",
      message: "Unauthorized"
    });
  }
});



app.get("/api/v1/auth/signOut", (req, res) => {
  try {
    res.status(200).clearCookie("access_token").json({
      status: "success",
      message: "User has been logged out"
    });
  } catch(error) {
    res.status(500).json({
      status: "failed",
      message: error.message
    });
  }
});


function verifyToken(req, res, next) {
  const accessToken = req.cookies.access_token;
  if (!accessToken) {
    return res.status(401).json({
      status: "failed",
      message: "Unauthorized"
    });
  }

  try {
    const decoded = jwt.verify(accessToken, JWT_SECRET_KEY);
    req.verifiedUserId = decoded.id;
    next();
  } catch(error) {
    res.status(403).json({
      status: "failed",
      message: "Forbidden"
    });
  }
}


app.patch("/api/v1/users/update/:id", verifyToken, (req, res) => {
  if (req.verifiedUserId != req.params.id) {
    return res.status(401).json({
      status: "failed",
      message: "Unauthorized"
    });
  }

  const id = Number(req.params.id);
  const { email } = req.body;
  const userToUpdate = users.find((user) => user.id == id);
  
  if (email) {
    for (let user of users) {
      if (userToUpdate.email == email) 
        continue;
      if (user.email == email) {
        return res.status(409).json({
          status: "failed",
          message: "Duplicate Key"
        });
      }
    }
  }

  let hashedPassword = null;
  if (req.body.password) {
    hashedPassword = bcryptjs.hashSync(req.body.password, 10);
  }

  const index = users.indexOf(userToUpdate);
  const updatedUser = Object.assign(userToUpdate, req.body);
  updatedUser.password = (hashedPassword) ? hashedPassword : updatedUser.password;
  users[index] = updatedUser;
  const { password, ...user } = updatedUser;
  
  fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
    if (err) throw err;
    res.status(200).json({
      status: "success",
      data: {
        user: user
      }
    });
  });
});



app.delete("/api/v1/users/delete/:id", verifyToken, (req, res) => {
  if (req.verifiedUserId != req.params.id) {
    return res.status(401).json({
      status: "failed",
      message: "Unauthorized"
    });
  }

  const { email, password } = req.body;
  const user = users.find((user) => user.email == email);
  
  if (!user) {
    return res.status(404).json({
      status: "failed",
      message: "User not found"
    });
  }

  if (!bcryptjs.compareSync(password, user.password)) {
    return res.status(401).json({
      status: "failed",
      message: "Unauthorized"
    });
  }

  const index = users.indexOf(user);
  users.splice(index, 1);
  fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
    if (err) throw err;
    res.status(204).clearCookie("access_token").json({});
  });
});


app.listen(3000, () => console.log("Server is running ...."));


