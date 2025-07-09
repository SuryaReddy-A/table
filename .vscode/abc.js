function addTask(){
    const newTask=document.createElement('li');
    const taskList=document.getElementById('taskList');
    newTask.textContent=document.getElementById('inputTask').value
    taskList.appendChild(newTask);
    document.getElementById('inputTask').value=""
    deleteTask(newTask)

}
function deleteTask(newTask)
{
    const deletebtn=document.createElement('button');
          deletebtn.textContent="Delete";
          deletebtn.classList.add("delete-btn");
          newTask.appendChild(deletebtn)
          deletebtn.onclick=function(){
            newTask.remove();
          }
}
