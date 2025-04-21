//add-Funktion ------------------------------------------------------------------
function addDay() {
    let number = 1;
    for (let h = 0; h < days.length; h++) { //nachzählen wie viele gleichnamige es gibt
        if (days[h].name == "Name") {
            number++;
        }
    }

    days.push( //hinzufügen eines Tages zum JSON
        {
            "name": "Name",
            "id": `Name${number}`,
            "categorys": []
        }
    );
    localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
    loaddays(); //neu laden
}
//--------------------------------------------------------------------------------


//rename-progress ------------------------------------------------------------
let dayName;
function rename(e) {
    event.stopPropagation(); //laden der Übungen stopen

    dayName = e.getAttribute("id"); //das p-Element abspeichern
    e.innerHTML = `<input onchange="rename2(this.value)" onblur="rename2(this.value)" class="inputCN">`; //input feld generieren



    const newInput = e.querySelector('input'); //Fokus im Input Feld setzen
    setTimeout(() => {
        newInput.focus();
    }, 0);
}

function rename2(e) {  //DOPELLTE ÜBERPRÜFEN
    if (e == "") { //wenn der input lehr ist: alles reseten
        loaddays();
        return;
    }

    let number = 1;
    for (let h = 0; h < days.length; h++) { //nachzählen wie viele gleichnamige es gibt
        if (e == days[h].name) {
            number++;
        }
    }

    for (let i = 0; i < days.length; i++) {
        if (days[i].id == dayName) {  //wenn die Stelle im JSON mit dem alten p value übereinstimmt
            days[i].name = e;
            days[i].id = e + number;
            localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
            loaddays();
            return;
        }
    }


}
//------------------------------------------------------------------------------

//lade-funktion -------------------------------------------
function loaddays() {
    document.getElementById('contentBox').innerHTML = ""; //alles reseten
    for (let i = 0; i < days.length; i++) {  //neu laden
        document.getElementById('contentBox').innerHTML += `
        <div class="day" onclick="openDay(this)">
            <p class="dayName" onclick="rename(this)" id="${days[i].id}">${days[i].name}</p>
        </div>
    `;
    }
    console.log(days);
}

days = JSON.parse(localStorage.getItem("data") ?? days); //days aus localStorage auslesen (oder die Standart days aus data.js)
loaddays(); //beim laden der website: alle elemente ladenlocalStorage.setItem("name", "Max");

//----------------------------------------------------------


//option window-----------------------------------------------------
const dayElements = document.getElementsByClassName("day");
for (let i = 0; i < dayElements.length; i++) {
    dayElements[i].addEventListener("contextmenu", function(event) {
        event.preventDefault();

        const optionBox = document.getElementById('optionBox');
        optionBox.style.opacity = 1;
        optionBox.style.left = event.clientX + 'px';
        optionBox.style.top = event.clientY + 'px';
    });
}



//-------------------------------------------------------------------


//TODO:
// - rename, klick stuff