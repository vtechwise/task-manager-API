const Task = require("../model/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
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

const getTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({
        success: false,
        msg: `No task matches the given id: ${taskID}`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
};
const editTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `No task with the given id:${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ task });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }

};

module.exports = {
  getAllTasks,
  editTask,
  createTask,
  deleteTask,
  getTask,
};
