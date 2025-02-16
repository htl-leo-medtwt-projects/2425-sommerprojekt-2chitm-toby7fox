function remove(object){
    object.innerHTML = null;
}

function addExersice(object){
    alert(object);
    object.innerHTML = null;
}

function addFolder(object){
    object.innerHTML += `
    <div class="ordner">
        <input type="text" class="name" value="name">
        <img src="addFolder.png" alt="addFolder" onclick="addFolder(this.parentElement)">
        <img src="add.png" alt="addExersice" onclick="addExersice(this.parentElement)">
        <img src="hide.png" alt="hide" onclick="hide(this.parentElement)">
        <img src="delete.png" alt="hide" onclick="remove(this.parentElement)">
    </div>    
    `;
}

function hide(object){
    object.innerHTML = null;
}