const getAllTasks = (req,res) => {
    res.send('Hello world my irst server')
}

const createTask = (req, res) => {
    res.send('task created')
}
const getTask = (req, res) => {
    res.send('get single task')
}
const editTask = (req,res) => {
    res.send('task edited')
}
const deleteTask = (req,res) => {
    res.send('task deleted')
}

module.exports = {
  getAllTasks,
  editTask,
  createTask,
  deleteTask,
  getTask,
};