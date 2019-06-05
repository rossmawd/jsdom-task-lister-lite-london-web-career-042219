document.addEventListener("DOMContentLoaded", () => {
  // your code here
 
    const input = document.getElementById('submit');

    input.addEventListener('click', function writeTask(){
      event.preventDefault()
      let list = document.getElementById("tasks");  //get the list
      let list_item = document.createElement("li");  //create a list item
      list.appendChild(list_item)                    //add the list item to list
      let new_task = document.getElementById("new-task-description"); //what you enter into the form!
      list_item.innerHTML = new_task.value     //add what you've entered into the list
    });

});





