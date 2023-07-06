const months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
let divId = 0
let tasksArray = [];
let currentDiv = 0;

function addTask() {
    let tasksObj = {};
    let taskName = document.getElementById('taskName').value;
    let taskDesc = document.getElementById('taskDesc').value;
    let taskAssign = document.getElementById('taskAssign').value;
    let taskStatus = document.getElementById('taskStatus').value;
    let todayTimeDate = new Date();
    let taskAddTime = todayTimeDate.getDate() + ' ' + months[todayTimeDate.getMonth()] + ' ' + todayTimeDate.getHours() + ':' + todayTimeDate.getMinutes() + ':' + todayTimeDate.getSeconds();
    let newTask = document.createElement('div');
    newTask.id = divId;
    
    //წაშლის მეორე ვარიანტი
    // let buttonRemove = document.createElement('button');
    // buttonRemove.setAttribute('class', 'button');
    // buttonRemove.setAttribute('onclick', 'removeTask(this)');
    // buttonRemove.textContent = 'Delete';

    let removeIcon = document.createElement('img');
    removeIcon.src = 'img/remove.png';
    removeIcon.className = 'icon';
    removeIcon.addEventListener('click', function() {
        document.getElementById(newTask.id).remove();
    });


    let editIcon = document.createElement('img');
    editIcon.src = 'img/edit.png';
    editIcon.className = 'icon';
    editIcon.addEventListener('click', function() {
        editTask(newTask.id);
    });

    newTask.innerHTML = '<h3>Task Title: '+taskName+'</h3> <p>Task Desc: '+taskDesc+'</p> <p>Task Assign: '+taskAssign+'</p> <p>Add Time: '+taskAddTime+'</p>';
    document.getElementById('tasksList').classList.add('border-bottom');

    tasksObj = {
        taskName: taskName,
        taskDesc: taskDesc,
        taskAssign: taskAssign,
        taskTime: taskAddTime,
        taskStatus: taskStatus,
        removeIcon: removeIcon,
        editIcon: editIcon
    };

    tasksArray.push(tasksObj);

    switch (taskStatus) {
        case 'toDo':
            newTask.style.backgroundColor = '#e5eb42';
            document.getElementById('tasksToDo').appendChild(newTask);
            // document.getElementById(newTask.id).appendChild(buttonRemove);
            document.getElementById(newTask.id).appendChild(removeIcon);
            document.getElementById(newTask.id).appendChild(editIcon);
            break;
        case 'inProgress':
            newTask.style.backgroundColor = '#48e8a3';
            document.getElementById('tasksInProgress').appendChild(newTask);
            // document.getElementById(newTask.id).appendChild(buttonRemove);
            document.getElementById(newTask.id).appendChild(removeIcon);
            document.getElementById(newTask.id).appendChild(editIcon);
            break;    
        case 'testing':
            newTask.style.backgroundColor = '#8a8c88';
            document.getElementById('tasksTesting').appendChild(newTask);
            // document.getElementById(newTask.id).appendChild(buttonRemove);
            document.getElementById(newTask.id).appendChild(removeIcon);
            document.getElementById(newTask.id).appendChild(editIcon);
            break;    
        case 'done':
            newTask.style.backgroundColor = '#45d96d';
            document.getElementById('tasksDone').appendChild(newTask);
            // document.getElementById(newTask.id).appendChild(buttonRemove);
            document.getElementById(newTask.id).appendChild(removeIcon);
            document.getElementById(newTask.id).appendChild(editIcon);
            break;
        default:
            console.log('არასწორი მნიშნველობა');       
    }
    divId++;
    // document.getElementById('tasksForm').reset();
}
//წაშლის მეორე ვარიანტი
// function removeTask(getDivId) {
//     let parentId = getDivId.parentNode.id;
//     document.getElementById(parentId).remove();
// }

function saveTask() {
    let editTaskName = document.getElementById('taskName').value;
    let editTaskDesc = document.getElementById('taskDesc').value;
    let editTaskAssign = document.getElementById('taskAssign').value;
    let editTaskStatus = document.getElementById('taskStatus').value;
    let todayTimeDate = new Date();
    let taskEditTime = todayTimeDate.getDate() + ' ' + months[todayTimeDate.getMonth()] + ' ' + todayTimeDate.getHours() + ':' + todayTimeDate.getMinutes() + ':' + todayTimeDate.getSeconds();

    tasksArray[currentDiv].taskName = editTaskName;
    tasksArray[currentDiv].taskDesc = editTaskDesc;
    tasksArray[currentDiv].taskAssign = editTaskAssign;
    tasksArray[currentDiv].taskAddTime = taskEditTime;
    tasksArray[currentDiv].taskStatus = editTaskStatus;

    let editedTask = document.createElement('div');
    editedTask.id = currentDiv;
    editedTask.innerHTML = '<h3>Task Name: '+editTaskName+'</h3> <p>Task Desc: '+editTaskDesc+'</p> <p>Task Assign: '+editTaskAssign+'</p> <p>Edit time: '+taskEditTime+'</p>';
    
    switch (document.getElementById('taskStatus').value) {
        case 'toDo':
            editedTask.style.backgroundColor = '#e5eb42';
            document.getElementById(currentDiv).remove();
            document.getElementById('tasksToDo').appendChild(editedTask);
            document.getElementById(currentDiv).appendChild(tasksArray[currentDiv].removeIcon);
            document.getElementById(currentDiv).appendChild(tasksArray[currentDiv].editIcon);
            break;
        case 'inProgress':
            editedTask.style.backgroundColor = '#48e8a3';
            document.getElementById(currentDiv).remove();
            document.getElementById('tasksInProgress').appendChild(editedTask);
            document.getElementById(currentDiv).appendChild(tasksArray[currentDiv].removeIcon);
            document.getElementById(currentDiv).appendChild(tasksArray[currentDiv].editIcon);
            break;    
        case 'testing':
            editedTask.style.backgroundColor = '#8a8c88';
            document.getElementById(currentDiv).remove();
            document.getElementById('tasksTesting').appendChild(editedTask);
            document.getElementById(currentDiv).appendChild(tasksArray[currentDiv].removeIcon);
            document.getElementById(currentDiv).appendChild(tasksArray[currentDiv].editIcon);
            break;    
        case 'done':
            editedTask.style.backgroundColor = '#45d96d';
            document.getElementById(currentDiv).remove();
            document.getElementById('tasksDone').appendChild(editedTask);
            document.getElementById(currentDiv).appendChild(tasksArray[currentDiv].removeIcon);
            document.getElementById(currentDiv).appendChild(tasksArray[currentDiv].editIcon);
            break;
        default:
            console.log('არასწორი მნიშნველობა'); 
    }

    document.getElementById('saveButton').setAttribute('disabled', true);
    document.getElementById('tasksForm').reset();
    let icons = document.getElementsByClassName('icon');
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = 'inline-block';
    };

}

function editTask(taskId) {
    document.getElementById('taskName').value = tasksArray[taskId].taskName;
    document.getElementById('taskDesc').value = tasksArray[taskId].taskDesc;
    document.getElementById('taskAssign').value = tasksArray[taskId].taskAssign;
    document.getElementById('taskStatus').value = tasksArray[taskId].taskStatus;

    document.getElementById('saveButton').removeAttribute('disabled');

    let icons = document.getElementsByClassName('icon');
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = 'none';
    };

    currentDiv = taskId;
}

