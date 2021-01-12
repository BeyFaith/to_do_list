import { Task } from "../database/models";

class taskController {
  static async createTask(req, res) {
    try {
      const { task } = req.body;
      const addTask = await Task.create({
        task,
      });
      if (addTask) {
        return res
          .status(201)
          .send({ message: "Task has been successfully created", tasks:addTask });
      }
    } catch (error) {
      return res.status(500).send({ message: "Server error" });
    }
  }

  static async getAllTasks(req, res) {
    try {
      const getAllTasks = await Task.findAll({where:{id:0}});
      console.log(getAllTasks);
      if (!getAllTasks.length) {
        return res.status(204).send({ message: 'no tasks found!' });
      }
      return res.status(200).send({ message:"successful", tasks:getAllTasks });
    }
    catch (error) {
      console.log(error)
      return res.status(500).send({ message: 'Server error' });
    }
  }

  static async getOneTask(req, res) {
    try{
      const { id } = req.params;
    const getOneTask = await Task.findOne({
      where: {
        id,
      },
    });
    if (!getOneTask) {
      return res.status(404).json({ message: "Task does not exist" });
    }
    res.status(200).json({
      message: "Successful",
      task: getOneTask,
    });
    }
    catch (error) {
      return res.status(500).send({ message: 'Server error'})
    }
    
  }

  static async deleteTask(req, res) {
    try{
      const { id } = req.params;
    await Task.destroy({
      where: { id },
    })
    .then((data) => {
      if(data){
        return res.status(202).send({message: 'Task deleted successfully'})
      }
    })
    
    }catch (error) {
      return res.status(500).send({message: 'Server error'})
    }
    
  }

  static async editTask(req, res) {
    try {
      const { id } = req.params;
      const {task, isCompleted} = req.body
      return await Task.findOne({ where: { id }})

      .then((data) => {
        if(!data){
          return res.status(404).send({ message: 'The task doesnot exist!'})
        }
        return data.update({
          task,
          isCompleted
        })
        .then(() => {
          return res.status(200).send({ message: 'Task successfully updated', tasks:data})
        })
        .catch(() => {
          return res.status(409).send({message: 'Failed', err})
        })
      })
    }catch (error) {
      return res.status(500).send({message: 'Server error'})
   }
    
  }
}

export default taskController;
