let number = localStorage.getItem("dayNumber");
days = JSON.parse(localStorage.getItem("data") ?? days);

function loadCategorys() {
    document.getElementById('contentBox').innerHTML = null; //HTML reseten

    for (let ö = 0; ö < days[number].categorys.length; ö++) {  //geht alle Kategorien durch und ladet dazu passendes HTML
        document.getElementById('contentBox').innerHTML += `
            <div class="categoryBox" id="${days[number].categorys[ö].name}">
                <div class="categoryTitleBox">
                    <p class="categoryTitle">${days[number].categorys[ö].name}</p>
                    <img src="days/img/hide.png" class="hideImg" onclick="hide(this)">
                </div>
            </div>
        `;
        for (let ä = 0; ä < days[number].categorys[ö].exercises.length; ä++) { //In der Kategorie werden auch direkt alle Exercises geladen
            document.getElementById(days[number].categorys[ö].name).innerHTML += `
            <div class="extendetExerciseBox" onclick="extendExercise(this)">
                <div class="exercise">
                    <img src="days/img/exercise.png" alt="exercise" class="exerciseImg">
                    <div class="exerciseData">
                        <div class="exerciseNameBox">
                            <p class="exerciseName">${days[number].categorys[ö].exercises[ä].name}</p>
                        </div>
                        <div class="exerciseValues">${days[number].categorys[ö].exercises[ä].sets} sets / ${days[number].categorys[ö].exercises[ä].reps} reps / ${days[number].categorys[ö].exercises[ä].weight}kg</div>
                        
                    </div>
                </div>
            </div>
            `;
        }
    }
}

loadCategorys();


function extendExercise(e){
    let exerciseName = e.querySelector('.exerciseName').innerHTML;
    
    for(let i = 0; i < days[number].categorys.length; i++){
        for(let k = 0; k < days[number].categorys[i].exercises.length; k++){
            console.log(days[number].categorys[i].exercises[i].name);
            
            
            if (days[number].categorys[i].exercises[i].name == exerciseName){
                e.innerHTML = `
                
                <div class="exercise">
                    <img src="days/img/exercise.png" alt="exercise" class="exerciseImg">
                    <div class="exerciseData">
                        <div class="exerciseNameBox">
                            <p class="exerciseName">${days[number].categorys[i].exercises[i].name}</p>
                        </div>
                        <div class="exerciseValues">${days[number].categorys[i].exercises[i].sets} sets / ${days[number].categorys[i].exercises[i].reps} reps / ${days[number].categorys[i].exercises[i].weight}kg</div>
                    </div>
                </div>
                <div class="exerciseInfoBox">
                    <div class="nameInfoBox">
                        <p class="nameInfo1">Name :</p>
                        <div class="nameInfo2">${days[number].categorys[i].exercises[i].name}</div>
                    </div>
                    <div class="countInfoBox">
                        <div class="setsInfoBox">
                            <p class="setsInfo1">sets :</p>
                            <div class="setsInfo2">${days[number].categorys[i].exercises[i].sets}</div>
                        </div>
                        <div class="repsInfoBox">
                            <p class="repsInfo1">reps :</p>
                            <div class="repsInfo2">${days[number].categorys[i].exercises[i].reps}</div>
                        </div>
                    </div>
                    <div class="weightsInfoBox">
                        <div class="weightInfoBox">
                            <p class="weightInfo1">weight :</p>
                            <div class="weightInfo2">${days[number].categorys[i].exercises[i].weight}kg</div>
                        </div>
                        <div class="rmInfoBox">
                            <p class="rmInfo1">1RM :</p>
                            <div class="rmInfo2">error</div>
                        </div>
                    </div>
                    <div class="poInfoBox">
                        <div class="repRInfoBox">
                            <p class="repRInfo1">rep.r :</p>
                            <div class="repRInfo2">${days[number].categorys[i].exercises[i].rangeLow}-${days[number].categorys[i].exercises[i].rangeHigh}</div>
                        </div>
                        <div class="nweightInfoBox">
                            <p class="nweightInfo1">n.weight :</p>
                            <div class="nweightInfo2">error</div>
                        </div>
                    </div>
                </div>
                
                `;
                return;
            }
        }
    }
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
                    "reps": 0,
                    "rangeLow": 0,
                    "rangeHigh": 0
                }
            );
            localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
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
            localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
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
    localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
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

function hide(e){
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

//TODO:
//Dopellte Namen
//Gemeinsames JSON



