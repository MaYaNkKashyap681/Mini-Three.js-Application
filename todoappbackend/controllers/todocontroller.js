const todoModel = require("../mongoDb/models/todomodel");

module.exports.getAll = async (req, res) => {
  try {
    const tasks = await todoModel.find({});

    if (tasks) {
      res.status(200).send(tasks);
    }
  } catch (err) {
    res.status(400).json({
      msg: "Internal Error",
    });
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await todoModel.findByIdAndDelete(id);

    if (deletedTask) {
      res.status(200).json({
        msg: "Task Deleted",
      });
    }
  } catch (err) {
    res.status(400).json({
      msg: "Internal Error",
    });
  }
};

module.exports.complete = async (req, res) => {
  const { id } = req.params;

  try {
    const completion = await todoModel.findByIdAndUpdate(id, {
      $set: { completionStatus: true },
    });

    if (completion) {
      res.status(200).json({
        msg: "Task Completed",
      });
    }
  } catch (err) {
    res.status(400).json({
      msg: "Internal Error",
    });
  }
};

module.exports.add = async (req, res) => {
  try {
    const { task } = req.body;

    const addTask = await todoModel.create({
      task: task,
    });
    if (addTask) {
      res.status(200).json({
        msg: "New task added Successfully",
      });
    }
  } catch (err) {
    res.status(400).json({
      msg: "Internal Error",
    });
  }
};

module.exports.taskUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { updatedTask } = req.body;
    const newTask = await todoModel.findByIdAndUpdate(id, {
      $set: { task: updatedTask },
    });
    if (newTask) {
      res.status(200).json({
        msg: "Task Updated Successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: "There is Internal fault",
    });
  }
};
