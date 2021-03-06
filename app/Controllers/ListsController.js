
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
    debugger
    listsService.deleteList(id)
  }

  totalCompleted(id) {
    listsService.totalCompleted(id)
  }

}