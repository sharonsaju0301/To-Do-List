const InputBox = document.getElementById("input-box"); //to access the input-box from html//
const ListContainer = document.getElementById("list-container"); //to access the list-container from html//

function addTask(){
    if(InputBox.value ==='') //to give error message if "add" button is pressed without anyting written in the "add your text" bar//
    {
        alert("You must write something in order for it to be added to the list!"); //alert message//
    }
    else //condition where we have entered task and want to save to list//
    {
        let li = document.createElement('li'); ///to take the input from inputbox and to display it beneath/
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);

        let span = document.createElement("span"); //to create the small "x" beside the tasks added
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    InputBox.value = ''; ///to empty the "add your text" bar after adding to list/
    saveData();
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){ /*to create line through if clicked on item of list*/
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){ /*to delete if x is pressed*/
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML);
}

function showtask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}

showtask();
