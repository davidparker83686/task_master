import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(i => i.id != id)
    saveState()

  }
  addList(newIng) {
    ProxyState.lists.push(new List(newIng.name, newIng.taskId))
    saveState()
    ProxyState.lists = ProxyState.lists
  }

  totalCompleted(id) {
    console.log(id);
    let list = ProxyState.lists.find(i => i.id == id)
    if (list.completed == true) {
      list.completed = false
    } else if (list.completed == false) {
      list.completed = true
    }

    console.log(list)
    saveState()
    ProxyState.lists = ProxyState.lists
  }
}

export const listsService = new ListsService();