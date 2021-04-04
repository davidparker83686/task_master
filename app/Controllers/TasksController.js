import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState } from "../Utils/LocalStorage.js";


//Private
function _draw() {
  let tasks = ProxyState.tasks;
  let template = ''
  if (tasks.length == 0) {
    template += '<div class="col text-center text-white"><p><em>no tasks</em><p></div>'
  }
  tasks.forEach(p => template += p.Template)
  document.getElementById("tasks").innerHTML = template
}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);
    ProxyState.on("lists", _draw);
    loadState()
    _draw()
  }

  addTask() {
    window.event.preventDefault()
    let form = window.event.target
    let rawTask = {
      name: form['name'].value,
      color: form['color'].value
    }
    tasksService.addTask(rawTask)
    form.reset()
  }

  deleteTask(id) {
    tasksService.deleteTask(id)
  }
}