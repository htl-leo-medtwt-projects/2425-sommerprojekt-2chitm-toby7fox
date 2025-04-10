//openDay-----------------------------------------------------------
function loadCategorys() {
    let number = 0;

    for (let ö = 0; ö < days[number].categorys.length; ö++) {
        document.getElementById('contentBox').innerHTML += `
            <div class="categoryBox" id="${days[number].categorys[ö].name}">
                <div class="categoryTitleBox">
                    <p class="categoryTitle" onclick="rename(this)">${days[number].categorys[ö].name}</p>
                    <img src="img/hide.png" alt="hide" class="hideImg">
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
                            <img src="img/rename.png" alt="rename" class="renameIcon" onclick="rename(this.parentElement.querySelector('p'))">
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
