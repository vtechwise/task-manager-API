const Task = require("../model/task");

const getAllTasks = (req, res) => {
  res.send("Hello world my irst server");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, msg: error });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const editTask = (req, res) => {
  res.send("task edited");
};
const deleteTask = (req, res) => {
  res.send("task deleted");
};

module.exports = {
  getAllTasks,
  editTask,
  createTask,
  deleteTask,
  getTask,
};
