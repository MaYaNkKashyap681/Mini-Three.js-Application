const express = require("express");
const {
  add,
  getAll,
  deleteTask,
  taskUpdate,
  complete,
} = require("../controllers/todocontroller");

const router = express.Router();

router.get("/all", getAll);
router.post("/add", add);
router.delete("/del/:id", deleteTask);
router.patch("/complete/:id", complete);
router.patch("/updateTask/:id", taskUpdate)


module.exports = router
