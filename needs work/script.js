function submitTask(event){
    event.preventDefault();
    const task=document.getElementById("task").value;
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = task;

    const list = document.getElementById("list-items");
    list.appendChild(listItem);
    document.getElementById("task").value = ""; // Clear the input field by setting its value to an empty string    
    // tasks.value="";    will not work as task is just aa string and not a reference to the input field

    // add button to list elements

    const btnDone=document.createElement("button");
    btnDone.textContent="Done";
    btnDone.id="done";
    listItem.appendChild(btnDone);
    btnDone.onclick=function() { // Use a function to handle the click event
        done(btnDone); 
    }


}


function done(btnDone){
    const listItem = btnDone.parentNode;
    const list = document.getElementById("list-items");
    list.removeChild(listItem);
}


// delete all functionality
function deleteAll(event){
    event.preventDefault();
    const list = document.getElementById("list-items");
    list.innerHTML="";
}


