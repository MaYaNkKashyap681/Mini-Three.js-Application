const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
   completionStatus : {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.model("todoModel", todoSchema);

module.exports = todoModel;
