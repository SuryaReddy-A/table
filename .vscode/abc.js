function addTask(){
    const newTask  =  document.createElement('li');
    const taskList = document.getElementById('taskList');
    newTask.textContent= document.getElementById('inputTask').value;
    taskList.appendChild(newTask);
    document.getElementById('inputTask').value=""
    deleteTask(newTask)
    deleteTask1(inputTask)
}
function deleteTask(newTask)
{
  const deleteBtn= document.createElement("button")
        deleteBtn.textContent="Delete"
        newTask.appendChild(deleteBtn)
        deleteBtn.onclick=function(){
            newTask.remove()
        }
}
function deleteTask1(inputTask)
{
    const deleteBtn1=document.createElement("Button")
          deleteBtn1.textContent="Delete"
          inputTask.appendchild(deleteBtn1)
          deleteBtn1.onclick=function(){
          inputTask.remove()
           
          }
}