let cars, ledger;

function setup() {
    createCanvas(600, 600);
    cars = new twoBlock(true, [1, 2], color(56, 90, 255));
    for (let i = 0; i < 6; i++) {
        ledger.push(0);
    }

    ledger
}

function draw() {
    background("lightblue")

    //LAYOUT AND AESTHETICS
    strokeWeight(1)
    //horizontal grid lines
    line(0, height * 1 / 6, width, height * 1 / 6)
    line(0, height * 2 / 6, width, height * 2 / 6)
    line(0, height * 3 / 6, width, height * 3 / 6)
    line(0, height * 4 / 6, width, height * 4 / 6)
    line(0, height * 5 / 6, width, height * 5 / 6)

    //vertical grid lines
    line(width * 1 / 6, 0, width * 1 / 6, height)
    line(width * 2 / 6, 0, width * 2 / 6, height)
    line(width * 3 / 6, 0, width * 3 / 6, height)
    line(width * 4 / 6, 0, width * 4 / 6, height)
    line(width * 5 / 6, 0, width * 5 / 6, height)

    //exit zone
    strokeWeight(0)
    fill("red")
    rect(width - 10, height * 1 / 6, 10, 100)

    cars.epoch();
}