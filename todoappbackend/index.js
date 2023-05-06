const express = require("express");
const cors = require("cors");
const { connectDB } = require("./mongoDb/connectDb");

const app = express();

//global middlewares
app.use(cors());
app.use(express.json());

//custom middlewares
app.use("/v1/", require("./routes/todoroutes"));


app.get('/', (req, res) => {
  res.status(200).json({
    msg: "The Api is Working Now!!!!!"
  })
})

function startServer() {
  try {
    connectDB(`mongodb+srv://root:root@cluster0.fdzjlxe.mongodb.net/?retryWrites=true&w=majority`);
    app.listen(4000, () => {
      console.log("Server is Started");
    });
  } catch (err) {
    console.log(err);
  }
}
startServer();
