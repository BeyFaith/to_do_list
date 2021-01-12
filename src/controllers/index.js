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
          .send({ message: "Todo item created successfully", tasks:addTask });
      }
    } catch (error) {
      return res.status(500).send({ message: "Server error" });
    }
  }

  static async getAllTasks(req, res) {
    try {
      const getAllTasks = await Task.findAll();
      console.log(getAllTasks);
      if (!getAllTasks) {
        return res.status(401).send({ message: 'no tasks found!' });
      }
      return res.status(200).send({ message:"successful", tasks:getAllTasks });
    }
    catch (error) {
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
      message: "Success",
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
        return res.status(202).send({message: 'Todo item deleted successfully'})
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
          return res.status(401).send({ message: 'no todo item found'})
        }
        return data.update({
          task,
          isCompleted
        })
        .then(() => {
          return res.status(200).send({ message: 'successfully updated', tasks:data})
        })
        .catch(() => {
          return res.status(409).send({message: 'conflict', err})
        })
      })
    }catch (error) {
      return res.status(500).send({message: 'Server error'})
   }
    
  }
}

export default taskController;
