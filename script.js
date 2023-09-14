const inputBox = document.querySelector(".input input");
const listContent = document.querySelector(".content");

function addTask(){
    if(inputBox.value==''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContent.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value='';
    saveData();
}

inputBox.addEventListener('keypress', (e)=>{
    if(e.key=='Enter'){
        e.preventDefault();
        document.querySelector('.input button').click();
    }
});

listContent.addEventListener('click', (e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData(){
    localStorage.setItem("data", listContent.innerHTML);
}

function showTask(){
    listContent.innerHTML = localStorage.getItem("data");
}


showTask();