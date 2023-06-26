const months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];

function addTask() {
    let taskName = document.getElementById('taskName').value;
    let taskDesc = document.getElementById('taskDesc').value;
    let taskAssign = document.getElementById('taskAssign').value;
    let taskStatus = document.getElementById('taskStatus').value;
    let todayTimeDate = new Date();
    let taskAddTime = todayTimeDate.getDate() + ' ' + months[todayTimeDate.getMonth()] + ' ' + todayTimeDate.getHours() + ':' + todayTimeDate.getMinutes() + ':' + todayTimeDate.getSeconds();
    let newTask = document.createElement('div');
    newTask.id = 'addedTask';
    newTask.innerHTML = '<h3>'+taskName+'</h3> <p>'+taskDesc+'</p> <p>'+taskAssign+'</p> <p>'+taskAddTime+'</p';
    document.getElementById('tasksList').classList.add('border-bottom');
    switch (taskStatus) {
        case 'toDo':
            newTask.style.backgroundColor = '#e5eb42';
            document.getElementById('tasksToDo').appendChild(newTask);
            break;
        case 'inProgress':
            newTask.style.backgroundColor = '#48e8a3';
            document.getElementById('tasksInProgress').appendChild(newTask);
            break;    
        case 'testing':
            newTask.style.backgroundColor = '#8a8c88';
            document.getElementById('tasksTesting').appendChild(newTask);
            break;    
        case 'done':
            newTask.style.backgroundColor = '#45d96d';
            document.getElementById('tasksDone').appendChild(newTask);
            break;
        default:
            console.log('არასწორი მნიშნველობა');       
    }
}