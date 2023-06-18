import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// connect to database
const uri = process.env.DB_URI;

mongoose.connect(uri);

// create user scheme
const userScheme = mongoose.Schema(
  {
    username: String,
    email: String,
  },
  {
    versionKey: false,
  }
);

// create superadmin scheme
const superAdminScheme = mongoose.Schema({
  admin: String,
  pwd: String,
});

// create user model
const User = mongoose.model("users", userScheme);
const SuperAdmin = mongoose.model("superadmins", superAdminScheme);

app.get("/", (req, res) => {
  res.send("<h2>This is Home page</h2>");
  console.log(data);
});

app.post("/create_user", (req, res) => {
  const data = req.body;

  const user = new User({
    username: data.username,
    email: data.email,
  });

  const userCheck = async (newUser) => {
    const allUsers = await User.find();

    allUsers && console.log(allUsers);
  };

  userCheck();
});

app.post("/super_admin_auth", (req, res) => {
  const data = req.body;
  const superAdminChecker = async (entity) => {
    const data = await SuperAdmin.find({ admin: entity.admin });
    !data.length
      ? res.send({ status: false })
      : data[0].pwd === entity.pwd
      ? res.send({ status: true })
      : res.send({ status: false });
  };

  superAdminChecker(data);
});

app.get("/users", async (req, res) => {
  const data = await User.find();
  data ? res.send(data) : res.send("We can't find data!");
});

app.listen(9090, () => {
  console.log("Server is run!");
});
