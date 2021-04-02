import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";


export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    tasks: ProxyState.tasks,
    lists: ProxyState.lists
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    ProxyState.tasks = data.tasks.map(task => new Task(task.name, task.size, task.id));
    ProxyState.lists = data.lists.map(ing => new List(ing.name, ing.taskId, ing.completed, ing.id));
  }
}