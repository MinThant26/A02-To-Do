let timeoutId; // Define a variable to store the timeout ID

function addTask(){
    const userInput = document.querySelector('.input');

    if(userInput.value == null || userInput.value != ""){
        const ul = document.querySelector('.taskList');

        const li = document.createElement('li');
        li.classList = "task";
        ul.appendChild(li);
        // li.setAttribute("id", )
    
        const description = document.createElement('div');
        description.classList = "description";
        li.appendChild(description);

        const checkbox = document.createElement('input');
        checkbox.classList = "checkbox";
        checkbox.type = "checkbox";
        checkbox.onclick = function(){
            checkTask(checkbox, text);
        }

        const text = document.createElement('p');
        text.classList = "text";
        text.textContent = userInput.value;

        description.append(checkbox, text);

        const controls = document.createElement('div');
        controls.classList = "controls";
        li.appendChild(controls);
        
        const editBtn = document.createElement('button');
        editBtn.textContent = "✏️";
        editBtn.onclick = function(){
            editTask(text);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = function(){
            deleteTask(li);
        }
        
        controls.append(editBtn, deleteBtn);

        userInput.value = "";
        message('New task added');
    }
    else{
        message('Please enter the text');
    }
}
function checkTask(checkbox, text){
    if(checkbox.checked){
        text.style.textDecoration = "line-through";

        message('Task done');
    }
    else{
        text.style.textDecoration = "none";

        message('Task undone');
    }
}
function editTask(text){
    let newText = prompt("Enter new text:");

    if(newText == ""){
        alert("If you don't want to change click 'Cancel'.");
        editTask(text);
    }
    else if(newText != null){
        text.textContent = newText;
        message('Task changed');
    }
}
function deleteTask(element){
    element.remove();
    message('Task removed');
}
function message(text){
    const message = document.getElementById('message');

    display('show');
    
    // Clear any existing timeout
    clearTimeout(timeoutId);
    
    // Set a new timeout to hide the message after 2 seconds
    timeoutId = setTimeout(() => {
        display('hide');
    }, 2000); // 2 seconds

    function display(mode){
        message.classList = mode;
        message.textContent = text;
    }
}