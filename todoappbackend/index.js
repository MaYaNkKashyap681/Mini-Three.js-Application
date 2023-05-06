const express = require("express");
const cors = require("cors");
const { connectDB } = require("./mongoDb/connectDb");

const app = express();

//global middlewares
app.use(cors());
app.use(express.json());

//custom middlewares
app.use("/v1/", require("./routes/todoroutes"));

function startServer() {
  try {
    connectDB("mongodb://localhost/todoappNew");
    app.listen(4000, () => {
      console.log("Server is Started");
    });
  } catch (err) {
    console.log(err);
  }
}
startServer();
