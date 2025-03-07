function remove(object){
    object.remove();
    saveAll();
}

function addExersice(object){
    if (object.className === "exersice"){
        object.innerHTML += `
            <div class="exersice">
            <div class="exersiceStuff">
                <p class="name" onclick="rename(this)">clickToName</p>
                <div class="exersiceStats">
                    <p class="count" onclick="rename(this)">0</p>
                    <p class="x">x</p>
                    <p class="weight" onclick="rename(this)">weight</p>
                    <p> kg/</p>
                    <p class="reps" onclick="rename(this)">reps</p>
                    <img src="img/delete.png" alt="delete" onclick="remove(this.parentElement.parentElement.parentElement)">
                </div>
            </div>
            </div>
            `;
    }else{
        object.innerHTML += `
            <div class="exersice">
            <div class="exersiceStuff">
                <p class="name" onclick="rename(this)">clickToName</p>
                <div class="exersiceStats">
                    <p class="count" onclick="rename(this)">0</p>
                    <p class="x">x</p>
                    <p class="weight" onclick="rename(this)">weight</p>
                    <p> kg/</p>
                    <p class="reps" onclick="rename(this)">reps</p>

                    <img src="img/add.png" alt="addExersice" onclick="addExersice(this.parentElement.parentElement.parentElement)">
                    <img src="img/delete.png" alt="delete" onclick="remove(this.parentElement.parentElement.parentElement)">
                </div>
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
            <p class="name" onclick="rename(this)">clickToName</p>
            <img src="img/addFolder.png" alt="addFolder" onclick="addFolder(this.parentElement.parentElement)">
            <img src="img/add.png" alt="addExersice" onclick="addExersice(this.parentElement.parentElement)">
            <img src="img/hide.png" alt="hide" onclick="hide(this.parentElement.parentElement, this)">
            <img src="img/delete.png" alt="delete" onclick="remove(this.parentElement.parentElement)">
        </div>
    </div>    
    `;

    saveAll();
}


function rename(object) {
    let renameBox = document.getElementById('renameBox');
    let renameText = document.getElementById('renameText');
    let renameInput = document.getElementById('renameInput');

    renameBox.style.display = "flex";

    if (object.parentElement.classList.contains("folderStuff")) {
        renameInput.outerHTML = `<input id="renameInput" list="categorys"></input>`;
        renameInput = document.getElementById('renameInput'); // Neu holen
    }

    if (object.classList.contains("name")) {
        renameText.textContent = "New Name:";
    } else if (object.classList.contains("weight")) {
        renameText.textContent = "Weight in kg:";
    } else if (object.classList.contains("reps")) {
        renameText.textContent = "Rep count:";
    } else if (object.classList.contains("count")) {
        renameText.textContent = "Set count:";
    }

    // Vorherige Listener entfernen
    renameInput.replaceWith(renameInput.cloneNode(true));
    renameInput = document.getElementById('renameInput');

    renameInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && renameInput.value.trim() !== "") {
            object.textContent = renameInput.value.trim();
            renameBox.style.display = "none";
            saveAll();
        }
    });

    renameInput.focus();
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
            icon.src = "img/hide.png"
        }else{
            child.style.display = "none";
            icon.src = "img/see.png";
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



