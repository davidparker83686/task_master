import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor(name, size, id = generateId()) {
        this.name = name
        this.size = size
        this.id = id
    }


    get Template() {
        return `
            <div class="card p-0 col-3 mx-5 mb-5">
                <div class="card-header bg-info">

                <p class="text-success text-end">
                <i class="fas fa-times" title='delete' onclick="app.tasksController.deleteTask('${this.id}')"></i>
                </p>

                    <h5 class="card-title">${this.name}</h5>
                    <h5 class="card-title">0/${this.Lists.length}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">${this.Lists}</p>
                    <form class="d-flex p-2" onsubmit="app.listsController.addList('${this.id}')" required min="3" max="15">
                        <input type="text" name="name" id="name" class="form-control" placeholder="Add Task.."
                            aria-describedby="helpId" required minlength="3" maxlength="15">
                        <button type="submit" class="btn btn-success" title='add task'><i
                                class="fas fa-plus"></i></button>
                    </form>
                </div>
            </div>
    `
    }

    get Lists() {
        let ings = ProxyState.lists.filter(i => i.taskId === this.id)
        let template = ''
        ings.forEach(i => template += i.Template)
        return template
    }

}