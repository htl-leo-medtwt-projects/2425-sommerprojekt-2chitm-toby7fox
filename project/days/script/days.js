//openDay-----------------------------------------------------------
let number = 0;
function loadCategorys() {
    document.getElementById('contentBox').innerHTML = null; //HTML reseten

    for (let ö = 0; ö < days[number].categorys.length; ö++) {  //geht alle Kategorien durch und ladet dazu passendes HTML
        document.getElementById('contentBox').innerHTML += `
            <div class="categoryBox" id="${days[number].categorys[ö].name}">
                <div class="categoryTitleBox">
                    <p class="categoryTitle">${days[number].categorys[ö].name}</p>
                    <img src="img/hide.png" class="hideImg" onclick="hide(this)">
                </div>
            </div>
        `;
        for (let ä = 0; ä < days[number].categorys[ö].exercises.length; ä++) { //In der Kategorie werden auch direkt alle Exercises geladen
            document.getElementById(days[number].categorys[ö].name).innerHTML += `
                <div class="exercise">
                    <img src="img/exercise.png" alt="exercise" class="exerciseImg">
                    <div class="exerciseData">
                        <div class="exerciseNameBox">
                            <p class="exerciseName">${days[number].categorys[ö].exercises[ä].name}</p>
                            <img src="img/rename.png" alt="rename" class="renameIcon">
                        </div>
                        <div class="exerciseValues">
                            <div class="sets" onclick="rename(this)">${days[number].categorys[ö].exercises[ä].sets} sets</div>
                            <div class="reps" onclick="rename(this)">${days[number].categorys[ö].exercises[ä].reps} reps</div>
                            <div class="weight" onclick="rename(this)">${days[number].categorys[ö].exercises[ä].weight}kg</div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

loadCategorys();

function hide(e) {

}

function addExercise() {
    document.getElementById('optionBox').style.opacity = 0; //Optionbox unsichtbar machen
    for (let i = 0; i < days[number].categorys.length; i++) {  //Alle Kategorien durchgehen und schauen ob eine mit dem p Elemnte übereinander stimmt
        if (days[number].categorys[i].name == clickedElement.innerHTML) {
            days[number].categorys[i].exercises.push(
                {
                    "name": "Name",
                    "sets": 0,
                    "weight": 0,
                    "reps": 0
                }
            );
            loadCategorys();
            addRightClick();
            return;
        }
    }
}

function deleteCategory() {
    document.getElementById('optionBox').style.opacity = 0; //Optionbox unsichtbar machen

    for (let i = 0; i < days[number].categorys.length; i++) {  //Alle Kategorien durchgehen und schauen ob eine mit dem p Elemnte übereinander stimmt
        if (days[number].categorys[i].name == clickedElement.innerHTML) {
            days[number].categorys.splice(i, 1);
            loadCategorys();
            addRightClick();
            return;
        }
    }
}

function addCategory() {
    days[number].categorys.push(
        {
            "name": "Name",
            "exercises": [

            ]
        }
    );
    loadCategorys();
    addRightClick();
}

//renameCategory-------------------------------------------------------------------------------------
let categoryName;
function renameCategory() {
    document.getElementById('optionBox').style.opacity = 0; //Optionbox unsichtbar machen

    categoryName = clickedElement.innerHTML;
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

    let n = 1;
    for (let h = 0; h < days[number].categorys.length; h++) { //nachzählen wie viele gleichnamige es gibt
        if (e == days[number].categorys[h].name) {
            n++;
        }
    }

    for (let i = 0; i < days[number].categorys.length; i++) {
        if (days[number].categorys[i].name == categoryName) {  //wenn die Stelle im JSON mit dem alten p value übereinstimmt
            days[number].categorys[i].name = e;
            localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
            loadCategorys();
            addRightClick();
            return;
        }
    }
}
//---------------------------------------------------------------------------------------------------

function renameExerciseName(e) {
    category = e.parentElement.parentElement;

    for (let i = 0; i < days[number].categorys.length; i++) {  //Alle Kategorien durchgehen und schauen ob eine mit dem p Elemnte übereinander stimmt
        if (days[number].categorys[i].name == e.innerHTML) {

        }
    }
}

//option window-----------------------------------------------------
var clickedElement;
function addRightClick() {
    const dayElements = document.getElementsByClassName("categoryTitle");
    for (let i = 0; i < dayElements.length; i++) {
        dayElements[i].addEventListener("contextmenu", function (event) {
            event.preventDefault(); //Das Fenster verhindern was normalerweise bei Rechtsklick generiert wird

            clickedElement = event.currentTarget;
            console.log(clickedElement);


            document.getElementById('optionBox').style.opacity = 1; //Optionbox Sichtbar machen
            optionBox.style.left = event.clientX + 'px'; //Optionbox an Mausposition anpassen
            optionBox.style.top = event.clientY + 'px';
        });
    }
}
addRightClick();
//-------------------------------------------------------------------


//TODO:
//Dopellte Namen
//Gemeinsames JSON



