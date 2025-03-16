function addCategory(){
    for(i = 0; i < days.length; i++){
        if (days[i].name == "Name"){
            alert("gscheide Fehlermeldung einfügen");
            return;
        }
    }

    days.push(
        {
            "name": "Name",
            "categorys": [
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

let categorytext;
let text;
function rename(e) {
    event.stopPropagation();
    text = e.innerHTML;
    e.innerHTML = `<input onchange="rename2(this)" onblur="rename2(this)" class="inputNN">`;
    categorytext = e;
  
    const newInput = e.querySelector('.inputNN');
    setTimeout(() => {
        newInput.focus();
    }, 0);
}

function rename2(i){
    if (i.value == ""){
        categorytext.innerHTML = `<p onclick="rename(this.parentElement)">${text}</p>`;
    }else{
        categorytext.innerHTML = `<p onclick="rename(this.parentElement)">${i.value}</p>`;
    }
    
}

function loaddays(){
    document.getElementById('categoryBox').innerHTML = "";

    for(i = 0; i < days.length; i++){
        document.getElementById('categoryBox').innerHTML += `
        <div class="category" onclick="loadcategorys(this)">
            <p class="categorytext" onclick="rename(this.parentElement.querySelector('p'))">${days[i].name}</p>
        </div>
    `;
    }
}

function loadcategorys(e){
    document.getElementById('categoryBox').innerHTML = "";

    for(i = 0; i < days.length; i++){
        if (days[i].name == e.querySelector('p').innerHTML){
            for(j = 0; j < days[i].categorys.length; j++){
                document.getElementById('categoryBox').innerHTML += `
                    




            `;
            }

        }
    }

    
}

const days = [
    {
        "name": "Push",
        "categorys": [
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
                        "name": "Shoukderpress",
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