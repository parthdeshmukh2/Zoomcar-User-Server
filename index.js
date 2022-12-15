const express = require("express");
const connect = require("./configs/db.js");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const userController = require("./Routes/user.Routes.js");


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async(req, res)=>{
  res.send("Home");
})


app.use("/user", userController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(PORT)
    console.log("listening on port 8080");
  } catch (err) {
    console.error(err.message);
  }
  
});
