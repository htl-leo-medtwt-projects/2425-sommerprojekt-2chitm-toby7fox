function remove(object){
    object.innerHTML = null;
}

function addExersice(object){
    if (object.className === "exersice"){
        object.innerHTML += `
            <div class="exersice">
                <input type="name" class="name" value="name" onchange="changeValue(this)"> 
                <input class="weight" placeholder="weig." onchange="changeValue(this)"> 
                <input class="reps" placeholder="reps" onchange="changeValue(this)">
                <img src="delete.png" alt="delete" onclick="remove(this.parentElement)">
            </div>
            `;
    }else{
        object.innerHTML += `
            <div class="exersice">
                <input type="name" class="name" value="name" onchange="changeValue(this)"> 
                <input class="weight" placeholder="weig." onchange="changeValue(this)"> 
                <input class="reps" placeholder="reps" onchange="changeValue(this)">
                <img src="add.png" alt="addExersice" onclick="addExersice(this.parentElement)">
                <img src="delete.png" alt="delete" onclick="remove(this.parentElement)">
            </div>
            `;
    }
}

function addFolder(object){
    object.innerHTML += `
    <div class="folder">
        <input type="text" class="name" value="name" onchange="changeValue(this)">
        <img src="addFolder.png" alt="addFolder" onclick="addFolder(this.parentElement)">
        <img src="add.png" alt="addExersice" onclick="addExersice(this.parentElement)">
        <img src="hide.png" alt="hide" onclick="hide(this.parentElement)">
        <img src="delete.png" alt="delete" onclick="remove(this.parentElement)">
    </div>    
    `;
}

let boolean = "none";

function hide(object) {
    const children = object.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];


        if (!(child.tagName.toLowerCase() === 'img' && child.alt && child.alt.toLowerCase() === 'hide') && !(child.tagName.toLowerCase() === 'input' && child.classList.contains('name'))) {
    	    if (boolean === "none") {
                child.dataset.originalDisplay = child.style.display || getComputedStyle(child).display;
                child.style.display = "none";
            } else {
                child.style.display = child.dataset.originalDisplay || "";
            }
        }
    }

    boolean = (boolean === "none") ? "show" : "none";
}

function changeValue(object){
    const value = object.value;
    alert(value);
    alert(object);
    object.innerHTML = `<input type="text" class="name" value="${value}" onchange="changeValue(this)">`;
    alert(object.value);
}
