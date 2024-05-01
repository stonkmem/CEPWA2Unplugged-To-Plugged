let
map1 = {
    "goal": 17,
    "cars": [
        [2, false, [12, 13], "red"], [2, false, [0, 1], "blue"], [2, false, [2, 3], "black"], [2, true, [14, 20], "gray"], [2, true, [26, 32], "yellow"], [2, true, [10, 16], "palegreen"], [3, true, [5, 11, 17], "gray"], [3, true, [19, 25, 31], "gray"], [3, false, [6, 7, 8], "purple"]
    ],
    "walls": []
}


map2 = {
    "goal": 17,
    "cars": [
        [2, false, [12, 13], "red"], [2, true, [8, 14], "blue"], [2, true, [17, 23], "blue"], [2, false, [28, 29], "blue"], [2, false, [34, 35], "blue"], [2, true, [24, 30], "blue"], [2, true, [25, 31], "blue"], [2, true, [26, 32], "blue"], [3, false, [18, 19, 20], "blue"], [3, true, [10, 16, 22], "blue"]
    ], //PRIVILEGED CAR AT THE FRONT
    "walls": []
}

map3 = {
    "goal": 17,
    "cars": [
        [2, false, [14, 15], "red"], [2, false, [0, 1], "blue"], [2, false, [24, 25], "blue"], [2, true, [2, 8], "blue"], [2, true, [6, 12], "blue"], [2, true, [16, 22], "blue"], [2, true, [29, 35], "blue"], [3, false, [9, 10, 11], "blue"], [3, false, [26, 27, 28], "blue"]
    ],
    "walls": []
}

let maps = [map1, map2, map3];
function newMap() {
  
    cars = [], ledger = [], focus = 0, moves = 0, purgatory = false;
    if (level === 4) { console.log("Nah, I'd win."); noLoop(); }
    else {
        level += 1;
        level %= 3;
        for (i in maps[level].cars) {
            if (maps[level].cars[i][0] === 2) cars.push(new twoBlock(maps[level].cars[i][1], maps[level].cars[i][2], maps[level].cars[i][3]));
            else cars.push(new threeBlock(maps[level].cars[i][1], maps[level].cars[i][2], maps[level].cars[i][3]));
        }
    }
    for (let ii = 0; ii < cars.length; ii += 1) {
        console.log(cars[ii].occ);
    }
}
