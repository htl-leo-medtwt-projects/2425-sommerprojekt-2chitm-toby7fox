//openDay-----------------------------------------------------------
let number = 0;
function loadCategorys() {
    document.getElementById('contentBox').innerHTML = null;

    for (let ö = 0; ö < days[number].categorys.length; ö++) {
        document.getElementById('contentBox').innerHTML += `
            <div class="categoryBox" id="${days[number].categorys[ö].name}">
                <div class="categoryTitleBox">
                    <p class="categoryTitle" onclick="addExercise(this)">${days[number].categorys[ö].name}</p>
                    <img src="img/hide.png" alt="hide" class="hideImg" onclick="hide(this)">
                </div>
            </div>
        `;
        for (let ä = 0; ä < days[number].categorys[ö].exercises.length; ä++) {
            document.getElementById(days[number].categorys[ö].name).innerHTML += `
                <div class="exercise">
                    <img src="img/exercise.png" alt="exercise" class="exerciseImg">
                    <div class="exerciseData">
                        <div class="exerciseNameBox">
                            <p class="exerciseName">${days[number].categorys[ö].exercises[ä].name}</p>
                            <img src="img/rename.png" alt="rename" class="renameIcon">
                        </div>
                        <div class="exerciseValues">
                            <div class="sets" onclick="rename(this)">${days[number].categorys[ö].exercises[ä].sets} sets</div>
                            <div class="reps" onclick="rename(this)">${days[number].categorys[ö].exercises[ä].reps} reps</div>
                            <div class="weight" onclick="rename(this)">${days[number].categorys[ö].exercises[ä].weight}kg</div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

loadCategorys();

function hide(e){
    
}

function addExercise(e){
    for(let i = 0; i < days[number].categorys.length; i++){
        if (days[number].categorys[i].name == e.innerHTML){
            days[number].categorys[i].exercises.push(
                {
                    "name": "Name",
                    "sets": 0,
                    "weight": 0,
                    "reps": 0
                }
            );
            loadCategorys();
            return;
        }
    }
}

function addCategory(){
    days[number].categorys.push(
        {
            "name": "Name",
            "exercises": [
                
            ]
        }
    );
    loadCategorys();
}
