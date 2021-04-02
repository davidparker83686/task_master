
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, taskId, id = generateId()) {
    this.id = id
    this.name = name
    this.taskId = taskId
  }

  get Template() {
    return `
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" title='done'onclick="app.listsController.listCompleted('${this.id}')">
                <label class="form-check-label" for="flexCheckDefault">

                <p>${this.name} <i class="fas fa-times ml-2 text-danger" title='delete'onclick="app.listsController.deleteList('${this.id}')"></i></p>

                </label>
                </div>

`
  }
}