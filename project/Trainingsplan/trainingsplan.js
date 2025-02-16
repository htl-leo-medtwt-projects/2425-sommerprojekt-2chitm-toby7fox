function remove(object){
    object.remove();

    saveAll();
}

function addExersice(object){
    if (object.className === "exersice"){
        object.innerHTML += `
            <div class="exersice">
                <div class="exersiceStuff">
                    <p class="name" onclick="rename(this)">clickToRename</p>
                    <p class="weight" onclick="rename(this)">weight</p>
                    <p> kg/</p>
                    <p class="reps" onclick="rename(this)">reps</p>
                    <img src="delete.png" alt="delete" onclick="remove(this.parentElement.parentElement)">
                </div>
            </div>
            `;
    }else{
        object.innerHTML += `
            <div class="exersice">
                <div class="exersiceStuff">
                    <p class="name" onclick="rename(this)">clickToRename</p>
                    <p class="weight" onclick="rename(this)">weight</p>
                    <p> kg/</p>
                    <p class="reps" onclick="rename(this)">reps</p>
                    <img src="add.png" alt="addExersice" onclick="addExersice(this.parentElement.parentElement)">
                    <img src="delete.png" alt="delete" onclick="remove(this.parentElement.parentElement)">
                </div>
            </div>
            `;
    }

    saveAll();
}

function addFolder(object){
    object.innerHTML += `
    <div class="folder">
        <div class="folderStuff">
            <p class="name" onclick="rename(this)">clickToRename</p>
            <img src="addFolder.png" alt="addFolder" onclick="addFolder(this.parentElement.parentElement)">
            <img src="add.png" alt="addExersice" onclick="addExersice(this.parentElement.parentElement)">
            <img src="hide.png" alt="hide" onclick="hide(this.parentElement.parentElement, this)">
            <img src="delete.png" alt="delete" onclick="remove(this.parentElement.parentElement)">
        </div>
    </div>    
    `;

    saveAll();
}

function rename(object){
    let benutzereingabe = prompt("Bitte gib etwas ein:");
    object.textContent  = benutzereingabe;
    saveAll();
}


function hide(object, icon) {
    const children = object.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];

        if (child.classList.contains('folderStuff')) {
            continue;
        }

        if (child.style.display === "none"){
            child.style.display = "flex";
            icon.src = "hide.png"
        }else{
            child.style.display = "none";
            icon.src = "see.png";
        }
    }

    saveAll();
}


function saveAll(){
    localStorage.setItem('trainingsplan', document.getElementById('trainingsplan').innerHTML);
}

function loadAll(){
    document.getElementById('trainingsplan').innerHTML = localStorage.getItem('trainingsplan');
}

window.onload = function() {
    loadAll();
};


