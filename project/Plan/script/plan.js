//add-Funktion ------------------------------------------------------------------
function addDay(){
    for(let i = 0; i < days.length; i++){ //FEHLERMEDLDUNG FIXEN!!!!!!!!!!!!!!!!
        if (days[i].name == "Name"){
            alert("gscheide Fehlermeldung einfügen");
            return;
        }
    }

    days.push( //hinzufügen eines Tages zum JSON
        {
            "name": "Name",
            "days": []
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

    dayName = e.getAttribute("data-info");; //das p-Element abspeichern
    e.innerHTML = `<input onchange="rename2(this.value)" onblur="rename2(this.value)" class="inputCN">`; //input feld generieren
    


    const newInput = e.querySelector('input'); //Fokus im Input Feld setzen
    setTimeout(() => {
        newInput.focus();
    }, 0);
}

function rename2(e){  //ÜBERPRÜFUNG AUF DOPPELTE NAMEN
    if (e == ""){ //wenn der input lehr ist: alles reseten
        loaddays();
        return;
    }else{
        for(let i = 0; i < days.length; i++){
            if (days[i].name == dayName){  //wenn die Stelle im JSON mit dem alten p value übereinstimmt (AUF SEPEARTE VARIABLE STATT P VALUE ÄNDERN)
                days[i].name = e;
                localStorage.setItem("data", JSON.stringify(days)); //days in Localstorage speichern
                loaddays();
                return;
            }
        }
    }
    
}
//------------------------------------------------------------------------------

//lade-funktion -------------------------------------------
function loaddays(){
    document.getElementById('contentBox').innerHTML = ""; //alles resten
    for(let i = 0; i < days.length; i++){  //neu laden
        document.getElementById('contentBox').innerHTML += `
        <div class="day">
            <p class="dayName" onclick="rename(this)" data-info="${days[i].name}">${days[i].name}</p>
        </div>
    `;
    }
    
}


days = JSON.parse(localStorage.getItem("data") ?? days); //days aus localStorage auslesen (oder die Standart days aus data.js)
console.log(days);
loaddays(); //beim laden der website: alle elemente ladenlocalStorage.setItem("name", "Max");

//----------------------------------------------------------
