
function grocerylistcreator() {
    let item = prompt("Please enter your item").toLowerCase();
    let buttoncontainer = document.getElementsByClassName("buttoncontainer")[0];
    let button = document.createElement("button");

    button.classList.add("button");
    button.innerHTML = item;
    buttoncontainer.appendChild(button); 

   
    button.addEventListener('click', function() {
        if (button.style.textDecoration === "line-through") {
            button.style.textDecoration = "none";  
        } 
        else {
            button.style.textDecoration = "line-through";
        }
    })
}



function showpurchased() {
    var buttons = document.getElementsByClassName("button");
    
   
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";  
    }

   
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].style.textDecoration !== "line-through") {
            buttons[i].style.display = "none";   
        }
    }
}


function showunpurchased() {
    var buttons = document.getElementsByClassName("button");
    
  
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";  
    }

   
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].style.textDecoration === "line-through") {
            buttons[i].style.display = "none";   
        }
    }
}
function displayPurchased(){
    
}
function showall() {
    var buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.display = "block";
    }
}

