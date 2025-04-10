//openDay-----------------------------------------------------------
function loadCategorys() {
    let number = 0;

    for (let ö = 0; ö < days[number].categorys.length; ö++) {
        document.getElementById('contentBox').innerHTML += `
            <div class="categoryBox" id="${days[number].categorys[ö].name}" onclick="addExercise(this)">
                <div class="categoryTitleBox">
                    <p class="categoryTitle" onclick="rename(this)">${days[number].categorys[ö].name}</p>
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
    e.innerHTML += `
    <div class="exercise">
                    <img src="img/exercise.png" alt="exercise" class="exerciseImg">
                    <div class="exerciseData">
                        <div class="exerciseNameBox">
                            <p class="exerciseName">Name</p>
                            <img src="img/rename.png" alt="rename" class="renameIcon">
                        </div>
                        <div class="exerciseValues">
                            <div class="sets" onclick="rename(this)">0 sets</div>
                            <div class="reps" onclick="rename(this)">0 reps</div>
                            <div class="weight" onclick="rename(this)">0kg</div>
                        </div>
                    </div>
                </div>
                `;
}

function addCategory(){
    document.getElementById('contentBox').innerHTML += `
        <div class="categoryBox" id="Name" onclick="addExercise(this)">
                <div class="categoryTitleBox">
                    <p class="categoryTitle" onclick="rename(this)">Name</p>
                    <img src="img/hide.png" alt="hide" class="hideImg" onclick="hide(this)">
                </div>
            </div>
    `;
}
