function submit(submitButton) {
    let elementId = submitButton.parentElement.parentElement.parentElement.querySelector(".exercise").getAttribute("id");
    let infoBox = document.getElementById(elementId).parentElement.querySelector(".exerciseInfoBox");
    let name = infoBox.querySelector(".nameInfoBox").querySelector(".nameInfo2").textContent;
    let sets = infoBox.querySelector(".countInfoBox").querySelector(".setsInfoBox").querySelector(".posEnd").querySelector(".setsInfo2").textContent;
    let reps = infoBox.querySelector(".countInfoBox").querySelector(".repsInfoBox").querySelector(".posEnd").querySelector(".repsInfo2").textContent;
    let kg = infoBox.querySelector(".weightsInfoBox").querySelector(".weightInfoBox").querySelector(".posEnd").querySelector(".weightInfo2").textContent;
    let repR = infoBox.querySelector(".poInfoBox").querySelector(".repRInfoBox").querySelector(".posEnd").querySelector(".repRInfo2").textContent;
    let bwE = infoBox.querySelector(".nameInfoBox").querySelector(".checkBoxBox").querySelector(".checkBox").checked;

    for (let i = 0; i < days[dayNumber].categorys.length; i++) {
        for (let k = 0; k < days[dayNumber].categorys[i].exercises.length; k++) {
            if (days[dayNumber].categorys[i].exercises[k].id == elementId) {
                days[dayNumber].categorys[i].exercises[k].name = name;
                days[dayNumber].categorys[i].exercises[k].id = name;
                days[dayNumber].categorys[i].exercises[k].sets = sets;
                days[dayNumber].categorys[i].exercises[k].reps = reps;
                days[dayNumber].categorys[i].exercises[k].weight = kg;
                days[dayNumber].categorys[i].exercises[k].rangeLow = repR.substring(0, 1);
                days[dayNumber].categorys[i].exercises[k].rangeHigh = repR.substring(2, 3);
                days[dayNumber].categorys[i].exercises[k].bwE = bwE;
            }
        }
    }

    addProgression(name, reps, kg, bwE);

    localStorage.setItem("data", JSON.stringify(days));
    setTimeout(function () {
        globalLock = true;
        loadCategorys();
    }, 10);
    addRightClick();

}


function cancel() {
    setTimeout(function () {
        globalLock = true;
        loadCategorys();
        addRightClick();
    }, 10);
}


// Daten p Tags verändern-------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------