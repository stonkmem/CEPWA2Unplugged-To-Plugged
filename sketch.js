let cars = [], ledger = [], focus = 0, goal = 17, moves = 0, purgatory = true, level = -1;
let button
function setup() {
    createCanvas(800, 800);
    newMap();
    button = createButton("New Game");
    button.position(0, 0);
    button.mousePressed(newMap);
    for (let i = 0; i < 36; i++) {
        ledger.push(0);
    }

    for (let i = 0; i < cars.length; i++) {
        for (let j = 0; j < cars[i].occ.length; j += 1) {
            ledger[cars[i].occ[j]] = i + 1;
        }
    }

    for (let i = 0; i < ledger.length; i += 1) {
        console.log(ledger[i]);
    }
}

function draw() {
    // background("lightblue");
    background(255);

    //LAYOUT AND AESTHETICS
    strokeWeight(1)
    //horizontal grid lines
    fill("lightblue");
    rectMode(CORNERS);
    rect(0, 0, 600, 600);
    for (let i = 0; i <= 600; i += 100) {
        line(0, i, 600, i);
        line(i, 0, i, 600);
    }
    // line(0, height * 1 / 6, width, height * 1 / 6)
    // line(0, height * 2 / 6, width, height * 2 / 6)
    // line(0, height * 3 / 6, width, height * 3 / 6)
    // line(0, height * 4 / 6, width, height * 4 / 6)
    // line(0, height * 5 / 6, width, height * 5 / 6)

    // //vertical grid lines
    // line(width * 1 / 6, 0, width * 1 / 6, height)
    // line(width * 2 / 6, 0, width * 2 / 6, height)
    // line(width * 3 / 6, 0, width * 3 / 6, height)
    // line(width * 4 / 6, 0, width * 4 / 6, height)
    // line(width * 5 / 6, 0, width * 5 / 6, height)

    //exit zone
    strokeWeight(0)
    fill("red")
    rectMode(CORNER);
    rect(600, 200, 10, 100);

    for (let i = 0; i < 36; i += 1) {
        ledger[i] = 0;
    }
    for (let i = 0; i < cars.length; i++) {
        cars[i].occ.sort((a, b) => a - b);
        for (let j = 0; j < cars[i].occ.length; j += 1) {
            ledger[cars[i].occ[j]] = i + 1;
        }
    }

    for (let i = 0; i < cars.length; i += 1) {
        cars[i].epoch();
    }

    //check for win
    for (let i = 0; i < cars[0].occ.length; i += 1) {
        if (cars[0].occ[i] == goal) {
            purgatory = true;
            console.log(":)");
            fill("black")
            rect(0, 0, 600, 600);
            fill("white")
            textSize(90)
            text("You Win!", 100, 150)
            button.position(230, 300)
            button.size(100, 50)

        }
    }
}