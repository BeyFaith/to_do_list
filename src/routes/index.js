import { Router } from "express";
import taskController from "../controllers";
import taskValidation from "../middlewares";

const taskRouter = new Router();

taskRouter
  .post("/tasks", taskValidation, taskController.createTask)
  .get("/tasks/:id", taskController.getOneTask)
  .get("/tasks", taskController.getAllTasks)
  .delete("/tasks/:id", taskController.deleteTask)
  .put("/tasks/:id", taskValidation, taskController.editTask)
  

export default taskRouter;