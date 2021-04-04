import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor(name, color, id = generateId()) {
        this.name = name
        this.color = color
        this.id = id
    }


    get Template() {
        return `
            <div class="card p-0 col-3 mx-5 mb-5">
                <div class="card-header ${this.color}">

             <button title="Delete" type="button" class="btn btn-outline-white shadow-none text-white"data-toggle="modal" data-target="#view-cart"><b>x</b></button>




                     <div class="modal fade" id="view-cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="align-self: center;">
                        <h5 class="modal-title text-dark" id="exampleModalLabel">Are You Sure You Want To Delete?</h5>
                    </div>

                    <div style="align-self: center;">
                        <button type="button" title="Keep" class="btn btn-info mx-5 my-3"
                            data-dismiss="modal">Keep</button>

                        <button type="submit" title="Delete" class="btn btn-danger mx-5 my-3" data-dismiss="modal"
                            onclick="app.tasksController.deleteTask('${this.id}')">Delete</button>
                    </div>

                </div>
            </div>
        </div>






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