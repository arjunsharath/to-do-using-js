const inputbox = document.getElementById("input");
const listcontainer = document.getElementById("tasks");

function addtask(){
    if(inputbox.value === ''){
        alert("ADD A TASK FIRST");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    saveData();
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
         e.target.classList.toggle("checked");
         saveData();
    }
   else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
   } 
}, false);

function saveData() {
    const tasks = listcontainer.innerHTML;
    localStorage.setItem("tasks", tasks);
 }
 function showTask(){
    listcontainer.innerHTML = localStorage.getItem("tasks");
 }
 showTask();
