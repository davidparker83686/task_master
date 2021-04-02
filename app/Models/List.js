
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, taskId, completed, id = generateId()) {
    this.id = id
    this.name = name
    this.completed = completed || false
    this.taskId = taskId
  }

  get Template() {
    return `
                <div class="form-check">
                <input ${this.completed == true ? 'checked' : ""} class="form-check-input" type="checkbox" value="" title='done' onclick="app.listsController.totalCompleted('${this.id}')">



                <p>${this.name} 
                <span><i class="fas fa-times ml-2 text-danger" title='delete'onclick="app.listsController.deleteList('${this.id}')"></i></span></p>
                </div>
`
  }
}

