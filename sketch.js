let cars = [], ledger = [], focus = 0, goal = 17, moves = 0, purgatory = true, level = -1, screenCount = -20;
let newMapButton
//let img, img1, img2, img3, img4, img5
// function preLoad() {
//     img = loadImage("images/green_2_block.png")
//     img1 = loadImage("images/green_3_block.png")
//     img2 = loadImage("images/orange_2_block.png")
//     img3 = loadImage("images/purple_2_block.png")
//     img4 = loadImage("images/red_2_block.png")
//     img5 = loadImage("images/yellow_3_block.png")
// }
function setup() {
    createCanvas(windowWidth, windowHeight);
    newMap();
    newMapButton = createButton("New Game");
    newMapButton.position(0, 600);
    newMapButton.mousePressed(newMap);
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

    // green2block = loadImage("green_2_block.png")
    // orange2block = loadImage("orange_2_block.png")
    // purple2block = loadImage("purple_2_block.png")
    // red2block = loadImage("red_2_block.png")
    // yellow2block = loadImage("yellow_2_block.png")
    // green3block = loadImage("green_3_block.png")
}

function draw() {
    // background("lightblue");
    background(255);
    push();
    if (frameCount < screenCount + 20) translate(random(-10, 10), random(-10, 10));
    //LAYOUT AND AESTHETICS
    strokeWeight(1)
    //horizontal grid lines
    fill(255);
    rectMode(CORNERS);
    rect(0, 0, 600, 600);
    for (let i = 0; i <= 600; i += 100) {
        line(0, i, 600, i);
        line(i, 0, i, 600);
    }
    // if (frameCount % 1000 === 0) {
    //     screenShake(frameCount);
    //     console.log("4444s");
    // }
    // console.log(frameCount);
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
            rect(0, 0, 610, 610);
            fill("white")
            textSize(90)
            text("You Win!", 100, 150)



        }
    }
    pop();
}
