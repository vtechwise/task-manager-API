const express = require("express");
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const app = express();

app.use(express.json());
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB;
    app.listen("5000", () => {
      console.log("server started at port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
