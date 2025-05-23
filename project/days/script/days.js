let dayNumber = localStorage.getItem("dayNumber");
days = JSON.parse(localStorage.getItem("data") ?? days);
let globalLock = true;

function loadCategorys() {
    if (!globalLock) {
        return;
    }
    document.getElementById('contentBox').innerHTML = null; //HTML reseten

    for (let ö = 0; ö < days[dayNumber].categorys.length; ö++) {  //geht alle Kategorien durch und ladet dazu passendes HTML
        document.getElementById('contentBox').innerHTML += `
            <div class="categoryBox" id="${days[dayNumber].categorys[ö].name}">
                <div class="categoryTitleBox">
                    <p class="categoryTitle">${days[dayNumber].categorys[ö].name}</p>
                    <img src="days/img/hide.png" class="hideImg" onclick="hide(this)">
                </div>
            </div>
        `;
        for (let ä = 0; ä < days[dayNumber].categorys[ö].exercises.length; ä++) { //In der Kategorie werden auch direkt alle Exercises geladen
            document.getElementById(days[dayNumber].categorys[ö].name).innerHTML += `
            <div class="extendetExerciseBox" onclick="extendExercise(this)">
                <div class="exercise">
                    <img src="days/img/exercise.png" alt="exercise" class="exerciseImg">
                    <div class="exerciseData">
                        <div class="exerciseNameBox">
                            <p class="exerciseName">${days[dayNumber].categorys[ö].exercises[ä].name}</p>
                        </div>
                        <div class="exerciseValues">${days[dayNumber].categorys[ö].exercises[ä].sets} sets / ${days[dayNumber].categorys[ö].exercises[ä].reps} reps / ${days[dayNumber].categorys[ö].exercises[ä].weight}kg</div>
                        
                    </div>
                </div>
            </div>
            `;
        }
    }
}

loadCategorys();

function renameExerciseName(e) {
    event.stopPropagation();

    e.innerHTML = `<input class="${e.className}" onchange="renameExerciseName2(this)">`;

    const newInput = e.querySelector('input'); //Fokus im Input Feld setzen
    setTimeout(() => {
        newInput.focus();
    }, 0);
}

function renameExerciseName2(e) {
    const p = document.createElement("p");
    p.className = e.className;
    p.textContent = e.value;
    p.onclick = function () {
        renameExerciseName(this);
    };

    e.replaceWith(p);
}

function submit(){

}

//----------------------------------------------------------------------------------------------------------------------------

//TODO:
//Dopellte Namen
//Gemeinsames JSON



