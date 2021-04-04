
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, taskId, completed, id = generateId()) {
    this.id = id
    this.name = name
    this.completed = completed || false
    this.taskId = taskId
  }

  //   get Template() {
  //     return `
  //                 <div class="form-check">
  //                 <input ${this.completed == true ? 'checked' : ""} class="form-check-input" type="checkbox" value="" title='done' onclick="app.listsController.totalCompleted('${this.id}')">



  //                 <p>${this.name}

  //                 <span><i class="fas fa-times ml-2 text-danger" title='delete'onclick="app.listsController.deleteList('${this.id}')"></i></span></p>

  //                 </div>
  // `
  //   }
  // }


  get Template() {
    return `
                <div class="form-check">
                <input ${this.completed == true ? 'checked' : ""} class="form-check-input" type="checkbox" value="" title='done' onclick="app.listsController.totalCompleted('${this.id}')">



                <p>${this.name}
                
                <span><i class="fas fa-times ml-2 text-danger" data-toggle="modal" data-target="#view-cart-two" title='delete'></i></span></p>

                 
                </div>




            <div class="modal fade" id="view-cart-two" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            onclick="app.listsController.deleteList('${this.id}')">Delete</button>
                    </div>

                </div>
            </div>
        </div>
`
  }
}




