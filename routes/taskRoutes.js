const express = require("express");
const taskController = require("../controller/taskController");

const router = express.Router();

router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.createTasks);

router
  .route("/:id")
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);
