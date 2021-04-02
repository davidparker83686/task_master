
import { listsService } from "../Services/ListsService.js";


//Public
export default class ListsController {

  addList(taskId) {
    window.event.preventDefault()
    let form = window.event.target
    let rawIng = {
      name: form['name'].value,
      taskId: taskId
    }
    listsService.addList(rawIng)
    // @ts-ignore
    form.reset()
  }

  deleteList(id) {
    listsService.deleteList(id)
  }
  listCompleted(id) {
    listsService.deleteList(id)
  }

}