const express = require("express");
const tasks = require("./routes/tasks");
const app = express();

app.use(express.json());
app.use("/api/v1/tasks", tasks);

app.listen("5000", () => {
  console.log("server started at port 5000");
});
