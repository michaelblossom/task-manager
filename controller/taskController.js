const Tour = require("../models/taskModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
// create tour
exports.createTasks = catchAsync(async (req, res, next) => {
  const newTour = await Task.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      task: newTask,
    },
  });
});