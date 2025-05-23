function addExercise() {
    if (!globalLock){
        return;
    }
    document.getElementById('optionBox').style.display = "none"; //Optionbox unsichtbar machen

    for (let i = 0; i < days[dayNumber].categorys.length; i++) {  //Alle Kategorien durchgehen und schauen ob eine mit dem p Elemnte übereinander stimmt
        if (days[dayNumber].categorys[i].name == clickedElement.innerHTML) {
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