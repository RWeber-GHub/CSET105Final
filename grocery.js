
function grocerylistcreator() {
    let item = prompt("Please enter your item").toLowerCase();
    let buttoncontainer = document.getElementsByClassName("buttoncontainer")[0];
    let button = document.createElement("button");

        button.classList.add("button");
        button.innerHTML = item;
        buttoncontainer.appendChild(button); 
        button.addEventListener('click', strikethrough)
}

function strikethrough() {
    var purchaseitem = document.getElementsByClassName("button")[0]
    purchaseitem.classList.add("buttonstrike")
}