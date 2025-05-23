function addExercise() {
    if (!globalLock){
        return;
    }
    document.getElementById('optionBox').style.display = "none"; //Optionbox unsichtbar machen

    for (let i = 0; i < days[dayNumber].categorys.length; i++) {  //Alle Kategorien durchgehen und schauen ob eine mit dem p Elemnte übereinander stimmt
        if (days[dayNumber].categorys[i].id == clickedElement.getAttribute("id")) {
            alert(days[dayNumber].categorys[i].id + " == " + clickedElement.getAttribute("id"));
            alert(i);
            console.log(days);
            
            days[dayNumber].categorys[i].exercises.push(
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