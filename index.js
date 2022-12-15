const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async(req, res)=>{
  res.send("Home");
})

app.post("/register", register);
app.post("/login", login);



app.use("/users", userController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(PORT)
    console.log("listening on port 8080");
  } catch (err) {
    console.error(err.message);
  }
  
});
