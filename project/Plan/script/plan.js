//add-Funktion ------------------------------------------------------------------
function addDay(){
    for(i = 0; i < days.length; i++){ //FEHLERMEDLDUNG FIXEN!!!!!!!!!!!!!!!!
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

    loaddays(); //neu laden
}
//--------------------------------------------------------------------------------


//rename-progress ------------------------------------------------------------
let dayName;
function rename(e) {
    event.stopPropagation(); //laden der Übungen stopen

    dayName = e.innerHTML; //das p-Element abspeichern
    e.innerHTML = `<input onchange="rename2(this.value)" onblur="rename2(this.value)" class="inputCN">`; //input feld generieren
    


    const newInput = e.querySelector('input'); //Fokus im Input Feld setzen
    setTimeout(() => {
        newInput.focus();
    }, 0);
}

function rename2(value){  //ÜBERPRÜFUNG AUF DOPPELTE NAMEN
    if (value.value == ""){ //wenn der input lehr ist: alles reseten
        loaddays();
        return;
    }else{
        for(i = 0; i < days.length; i++){ //FEHLERMEDLDUNG FIXEN!!!!!!!!!!!!!!!!
            if (days[i].name == dayName){
                days[i].name = value;
                loaddays();
            }
        }
    }
    
}
//------------------------------------------------------------------------------

//lade-funktion -------------------------------------------
function loaddays(){
    document.getElementById('contentBox').innerHTML = ""; //alles resten

    for(i = 0; i < days.length; i++){  //neu laden
        document.getElementById('contentBox').innerHTML += `
        <div class="day" onclick="loaddays(this)">
            <p class="dayName" onclick="rename(this)">${days[i].name}</p>
        </div>
    `;
    }
}
loaddays(); //beim laden der website: alle elemente laden
//----------------------------------------------------------
