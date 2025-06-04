function getTotalWeight(weight, bwE) {
    const bw = parseFloat(localStorage.getItem("bw")) || 0;
    return bwE ? parseFloat(weight) + bw : parseFloat(weight);
}

function subtractBodyweight(rm, bwE) {
    const bw = parseFloat(localStorage.getItem("bw")) || 0;
    return bwE ? rm - bw : rm;
}

function calculate1RM(weight, reps, bwE) {
    const totalWeight = getTotalWeight(weight, bwE);
    const rm = totalWeight * (1 + reps / 30);
    const adjustedRm = subtractBodyweight(rm, bwE);
    return Math.round(adjustedRm * 100) / 100;
}

function calculate3RM(weight, reps, bwE) {
    const oneRM = calculate1RM(weight, reps, bwE);
    const rm = oneRM * 0.93;
    return Math.round(rm * 100) / 100;
}

function calculate6RM(weight, reps, bwE) {
    const oneRM = calculate1RM(weight, reps, bwE);
    const rm = oneRM * 0.85;
    return Math.round(rm * 100) / 100;
}



function calculateNW() {
    
}