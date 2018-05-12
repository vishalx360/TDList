const taskInput = document.querySelector('#tasks')
const form = document.querySelector("#task-form")
const taskList = document.querySelector('.collection')
const filter = document.querySelector('#filter')
const clearbtn = document.querySelector('.clear-tasks')
const addBtn = document.getElementById('addBtn').addEventListener('click', showAddCard)


function showAddCard(){
    addCard.style.display = "block"
    
}

function hide(){
    addCard.style.display = "none"
}

LEL();

function LEL(){

    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearbtn.addEventListener('click', clearAll);
    filter.addEventListener('keyup', filterTask)
    document.addEventListener('DOMContentLoaded', getTask)

}



function getTask(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task));
        
        
        const link = document.createElement('a')
        link.className = "delete-item secondary-content"
        link.innerHTML = '<i class="material-icons">clear</i>';
        li.appendChild(link);


        taskList.appendChild(li)

    })
    var addCard = document.getElementById('addCard')

    addCard.style.display = "none"
    
    Materialize.toast('Welcome To TDL!', 4000)



}

function addTask(e){
    if(taskInput.value === ''){
        Materialize.toast('Add Task First', 2000);
    }else{

    Materialize.toast('Task Added', 4000);    


    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    
    
    const link = document.createElement('a')
    link.className = "delete-item secondary-content"
    link.innerHTML = '<i class="material-icons">clear</i>';
    li.appendChild(link);


    taskList.appendChild(li)

    //store in Local Storage
    storeTaskInLS(taskInput.value);

    taskInput.value = ""

  

    }

    e.preventDefault();
}

function undo(){
    
}

function storeTaskInLS(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
    if(confirm('Are You Sure')){
        e.target.parentElement.parentElement.remove()
        removeTaskFromLS(e.target.parentElement.parentElement);
    }
    }


    e.preventDefault()

}


function removeTaskFromLS(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1)
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks))
}


function clearAll(e){
    // taskList.innerHTML = ""
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    clearAllTasksFromLS()
    e.preventDefault()

}

function clearAllTasksFromLS(){
    localStorage.clear()
}


function filterTask(e){
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
    
        }else{
            task.style.display = 'none'
        }
    })
    console.log(text)

}

