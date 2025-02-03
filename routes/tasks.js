const express = require("express");
const {
  getAllTasks,
  createTask,
  editTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").patch(editTask).delete(deleteTask);

module.exports = router;
