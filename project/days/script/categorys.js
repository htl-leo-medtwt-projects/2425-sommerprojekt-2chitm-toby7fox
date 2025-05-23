

function deleteCategory() {
    if (!globalLock){
        return;
    }
    document.getElementById('optionBox').style.display = "none"; //Optionbox unsichtbar machen

    for (let i = 0; i < days[dayNumber].categorys.length; i++) {  //Alle Kategorien durchgehen und schauen ob eine mit dem p Elemnte übereinander stimmt
        if (days[dayNumber].categorys[i].id == clickedElement.getAttribute("id")) {
            days[dayNumber].categorys.splice(i, 1);
            localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
            loadCategorys();
            addRightClick();
            return;
        }
    }
}

function addCategory() {
    if (!globalLock){
        return;
    }


    let dNumber = 1;
    for (let i = 0; i < days[dayNumber].categorys.length; i++) {
        if (days[dayNumber].categorys[i].name == "Name"){
            dNumber++;
        }
    }

    days[dayNumber].categorys.push(
        {
            "name": "Name",
            "id": `Name${dNumber}`,
            "exercises": []
        }
    );
    localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
    loadCategorys();
    addRightClick();
}

let categoryName;
function renameCategory() {
    if (!globalLock){
        return;
    }
    document.getElementById('optionBox').style.display = "none"; //Optionbox unsichtbar machen

    categoryName = clickedElement.getAttribute("id");
    clickedElement.innerHTML = `<input class="inputCN" onchange="renameCategory2(this.value)">`;



    const newInput = clickedElement.querySelector('input'); //Fokus im Input Feld setzen
    setTimeout(() => {
        newInput.focus();
    }, 0);
}

function renameCategory2(e) {
    if (e == "") { //wenn der input lehr ist: alles reseten
        loadCategorys();
        addRightClick();
        return;
    }

    let dNumber = 1;
    for (let i = 0; i < days[dayNumber].categorys.length; i++) {
        if (days[dayNumber].categorys[i].name == "Name"){
            dNumber++;
        }
    }

    for (let i = 0; i < days[dayNumber].categorys.length; i++) {
        if (days[dayNumber].categorys[i].id == categoryName) {  //wenn die Stelle im JSON mit dem alten p value übereinstimmt
            days[dayNumber].categorys[i].name = e;
            days[dayNumber].categorys[i].id = `${e}${dNumber}`;
            localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
            alert("vor dem loadCategorys")
            loadCategorys();
            addRightClick();
            return;
        }
    }
}

var clickedElement;
function addRightClick() {
    if (!globalLock){
        return;
    }
    const dayElements = document.getElementsByClassName("categoryTitle");
    for (let i = 0; i < dayElements.length; i++) {
        dayElements[i].addEventListener("contextmenu", function (event) {
            event.preventDefault(); //Das Fenster verhindern was normalerweise bei Rechtsklick generiert wird

            clickedElement = event.currentTarget;
            console.log(clickedElement);


            document.getElementById('optionBox').style.display = "flex"; //Optionbox Sichtbar machen
            optionBox.style.left = event.clientX + 'px'; //Optionbox an Mausposition anpassen
            optionBox.style.top = event.clientY + 'px';
        });
    }
}
addRightClick();
//-------------------------------------------------------------------


//hide Funktion ----------------------------------------------------------------------------------------
function hide(e) {
    if (!globalLock){
        return;
    }
    if (!e.style.transform || e.style.transform == "none") {
        e.style.transform = "rotate(90deg)";
        const boxes = e.parentElement.parentElement.querySelectorAll('.extendetExerciseBox');
        boxes.forEach(box => {
            box.style.display = "none";
        });
    } else if (e.style.transform == "rotate(90deg)") {
        e.style.transform = "none";
        const boxes = e.parentElement.parentElement.querySelectorAll('.extendetExerciseBox');
        boxes.forEach(box => {
            box.style.display = "block";
        });
    }
}