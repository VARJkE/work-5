const months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
let divId = 0

let tasksArray = [];

function addTask() {
    divId++;
    let taskName = document.getElementById('taskName').value;
    let taskDesc = document.getElementById('taskDesc').value;
    let taskAssign = document.getElementById('taskAssign').value;
    let taskStatus = document.getElementById('taskStatus').value;
    let todayTimeDate = new Date();
    let taskAddTime = todayTimeDate.getDate() + ' ' + months[todayTimeDate.getMonth()] + ' ' + todayTimeDate.getHours() + ':' + todayTimeDate.getMinutes() + ':' + todayTimeDate.getSeconds();
    let newTask = document.createElement('div');
    newTask.id = 'addedTask-'+divId;
    let buttonRemove = document.createElement('button');
    buttonRemove.setAttribute('class', 'button');
    buttonRemove.setAttribute('onclick', 'removeTask(this)');
    buttonRemove.textContent = 'Delete';

    let removeTask = document.createElement('img');
    removeTask.src = 'img/remove.png';
    removeTask.className = 'icon';
    removeTask.addEventListener('click', function() {
        document.getElementById(newTask.id).remove();
        removeTask.removeEventListener('click');
    });

    newTask.innerHTML = '<h3>'+taskName+'</h3> <p>'+taskDesc+'</p> <p>'+taskAssign+'</p> <p>'+taskAddTime+'</p> <p>'+taskStatus+'</p>';
    document.getElementById('tasksList').classList.add('border-bottom');
    
    switch (taskStatus) {
        case 'toDo':
            newTask.style.backgroundColor = '#e5eb42';
            document.getElementById('tasksToDo').appendChild(newTask);
            document.getElementById(newTask.id).appendChild(buttonRemove);
            document.getElementById(newTask.id).appendChild(removeTask);

            break;
        case 'inProgress':
            newTask.style.backgroundColor = '#48e8a3';
            document.getElementById('tasksInProgress').appendChild(newTask);
            document.getElementById(newTask.id).appendChild(buttonRemove);
            document.getElementById(newTask.id).appendChild(removeTask);
            break;    
        case 'testing':
            newTask.style.backgroundColor = '#8a8c88';
            document.getElementById('tasksTesting').appendChild(newTask);
            document.getElementById(newTask.id).appendChild(buttonRemove);
            document.getElementById(newTask.id).appendChild(removeTask);
            break;    
        case 'done':
            newTask.style.backgroundColor = '#45d96d';
            document.getElementById('tasksDone').appendChild(newTask);
            document.getElementById(newTask.id).appendChild(buttonRemove);
            document.getElementById(newTask.id).appendChild(removeTask);
            break;
        default:
            console.log('არასწორი მნიშნველობა');       
    }
    // document.getElementById('tasksForm').reset();
}

function removeTask(getDivId) {
    let parentId = getDivId.parentNode.id;
    document.getElementById(parentId).remove();
}

