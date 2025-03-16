function addDay(){
    for(i = 0; i < days.length; i++){
        if (days[i].name == "Name"){
            alert("gscheide Fehlermeldung einfügen");
            return;
        }
    }

    days.push(
        {
            "name": "Name",
            "days": [
                {
                    "name": "Name",
                    "sets": 0,
                    "weight": 0,
                    "reps": 0
                }
            ]
        }
    );

    loaddays();


}

let daytext;
let text;
let className;
function rename(e) {
    event.stopPropagation();
    text = e.innerHTML;
    daytext = e;
    className = e.className;

    if (className == "daytext" || className == "dayTitle"){
        e.innerHTML = `<input onchange="rename2(this)" onblur="rename2(this)" class="inputCN">`;
    } else if (className == "exerciseName"){

    } else if (className == "sets" || className == "reps" || className == "weight"){

    }

    
    const newInput = e.querySelector('input');
    setTimeout(() => {
        newInput.focus();
    }, 0);
}

function rename2(i){
    if (i.value == ""){
        daytext.innerHTML = `<p onclick="rename(this.parentElement)">${text}</p>`;
    }else{
        daytext.innerHTML = `<p onclick="rename(this.parentElement)">${i.value}</p>`;
    }
    
}

function loaddays(){
    document.getElementById('contentBox').innerHTML = "";

    for(i = 0; i < days.length; i++){
        document.getElementById('contentBox').innerHTML += `
        <div class="day" onclick="loaddays(this)">
            <p class="daytext" onclick="rename(this.parentElement.querySelector('p'))">${days[i].name}</p>
        </div>
    `;
    }
}

function loadCategorys(e){
    document.getElementById('contentBox').innerHTML = "";

    for(i = 0; i < days.length; i++){
        if (days[i].name == e.querySelector('p').innerHTML){
            for(j = 0; j < days[i].days.length; j++){
                document.getElementById('contentBox').innerHTML += `
                    




            `;
            }

        }
    }

    
}

const days = [
    {
        "name": "Push",
        "days": [
            {
                "name": "Chest",
                exercises: [
                    {
                        "name": "Benchpress",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    },
                    {
                        "name": "Dips",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    }
                ]
            },
            {
                "name": "Shoulder",
                exercises: [
                    {
                        "name": "Shoulderpress",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    },
                    {
                        "name": "Sidelift",
                        "sets": 2,
                        "weight": 90,
                        "reps": 5
                    }
                ]
            }
        ]
    }
]

loaddays();