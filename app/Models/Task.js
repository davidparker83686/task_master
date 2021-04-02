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

                <p class="text-success text-right">
                <i class="fas fa-times" title='delete' onclick="app.tasksController.deleteTask('${this.id}')"></i>
                </p>

                    <h5 class="card-title">${this.name}</h5>
                    <h5 class="card-title"> ${this.totalCompleted()}/${this.total()}</h5>
                </div>
                <div class="card-body">

                    <p class="card-text">${this.Lists}</p>

                    <div>
                                        <form class="d-flex p-2" onsubmit="app.listsController.addList('${this.id}')" required min="3" max="15">
                        <input type="text" name="name" class="form-control" placeholder="Add Task.."
                            aria-describedby="helpId" required minlength="3" maxlength="15">
                        <button type="submit" class="btn btn-success ml-5" title='add task'><i
                                class="fas fa-plus"></i></button>
                    </form>

                    <button class="mt-4 btn btn-info d-flex" title='complete task'>Submit </button>

                    </div>


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

    total() {
        let tasks = ProxyState.lists.filter(i => i.taskId === this.id)
        return tasks.length
    }

    totalCompleted() {
        let totalCompleted = ProxyState.lists.filter(i => i.taskId === this.id && i.completed)
        return this.total() - totalCompleted.length
    }

    submit() {
        totalCompleted == total ? '' : "disabled"
    }




}