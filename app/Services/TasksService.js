import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    saveState()
  }
  addTask(newTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(newTask.name, newTask.color)]
    saveState()
  }
}

export const tasksService = new TasksService();