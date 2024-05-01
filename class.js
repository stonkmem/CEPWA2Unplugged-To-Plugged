class twoBlock {
    constructor(V, occI, col) {
        this.vert = V;
        this.occ = occI;
        if (col != "red") this.color = color(random(255), random(255), random(255));
        else this.color = col;
        this.sel = false; // SELECTED
        this.occ = this.occ.sort();
        this.corporeal = createVector((squareToCords(this.occ[0]).x + squareToCords(this.occ[1]).x) / 2, (squareToCords(this.occ[0]).y + squareToCords(this.occ[1]).y) / 2);
        this.spirit = createVector((squareToCords(this.occ[0]).x + squareToCords(this.occ[1]).x) / 2, (squareToCords(this.occ[0]).y + squareToCords(this.occ[1]).y) / 2);
    }
    moveR() {
        if (this.vert == false && this.sel == true && ledger[this.occ[1] + 1] == 0 && this.occ[1] % 6 != 5) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] += 1;
                moves += 1;
            }
        }
        else {
            screenShake();
        }
    }

    moveL() {
        if (this.vert == false && this.sel == true && this.occ[0] != 0 && ledger[this.occ[0] - 1] == 0 && this.occ[0] % 6 != 0) {
            for (let i = 0; i < this.occ.length; i += 1) {
                this.occ[i] -= 1;
                moves += 1
            }
        }
        else {
            screenShake();
        }
    }
    moveU() {

        if (this.vert == true && this.sel == true && ledger[this.occ[0] - 6] == 0 && this.occ[0] > 5) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] -= 6;
                moves += 1;
            }
        }
        else {
            screenShake();
        }
    }

    moveD() {
        if (this.vert == true && this.sel == true && ledger[this.occ[1] + 6] == 0 && this.occ[1] < 30) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] += 6;
                moves += 1;
            }
        }
        else {
            screenShake();
        }
    }

    epoch() {

        this.corporeal = createVector((squareToCords(this.occ[0]).x + squareToCords(this.occ[1]).x) / 2, (squareToCords(this.occ[0]).y + squareToCords(this.occ[1]).y) / 2);

        if (this.vert) {
            if (this.corporeal.y - this.spirit.y != 0)
                this.spirit.y += 1 * log(max(this.corporeal.y - this.spirit.y, this.spirit.y - this.corporeal.y)) * Math.sign(this.corporeal.y - this.spirit.y);
            if (max(this.corporeal.y - this.spirit.y, this.spirit.y - this.corporeal.y) < 2) this.spirit.y = this.corporeal.y;
            // if (this.corporeal.y - this.spirit.y != 0) console.log(Math.sign(this.corporeal.y - this.spirit.y));
        }
        else {
            if (this.corporeal.x - this.spirit.x != 0)
                this.spirit.x += 1 * log(max(this.corporeal.x - this.spirit.x, this.spirit.x - this.corporeal.x)) * Math.sign(this.corporeal.x - this.spirit.x);
            if (max(this.corporeal.x - this.spirit.x, this.spirit.x - this.corporeal.x) < 2) this.spirit.x = this.corporeal.x;
        }

        fill(this.color);
        if (this.vert == false) {
            rectMode(CENTER);
            rect(this.spirit.x, this.spirit.y, 198, 98);
        }
        else {
            rectMode(CENTER);
            rect(this.spirit.x, this.spirit.y, 98, 198)
        }
        // for (let i = 0; i < this.occ.length; i++) {
        //     rectMode(RADIUS);
        //     fill(this.color); stroke(0); strokeWeight(2);
        //     if (this.sel === false) {
        //         rect(squareToCords(this.occ[i]).x, squareToCords(this.occ[i]).y, 50, 50);
        //     }
        //     if (this.sel === true) {
        //         rect(squareToCords(this.occ[i]).x, squareToCords(this.occ[i]).y, 60, 60);
        //     }
        // }
        // console.log(this.spirit);
    }
}

class threeBlock {
    constructor(V, occI, col) {
        this.vert = V;
        this.occ = occI;
        this.color = col;
        this.sel = false; // SELECTED
        this.occ.sort();
        this.corporeal = createVector((squareToCords(this.occ[0]).x + squareToCords(this.occ[2]).x) / 2, (squareToCords(this.occ[0]).y + squareToCords(this.occ[2]).y) / 2);
        this.spirit = createVector((squareToCords(this.occ[0]).x + squareToCords(this.occ[2]).x) / 2, (squareToCords(this.occ[0]).y + squareToCords(this.occ[2]).y) / 2);
    }
    moveR() {
        if (this.vert == false && this.sel == true && ledger[this.occ[2] + 1] == 0 && this.occ[2] % 6 != 5) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] += 1;
            }
        }
        else screenShake();
    }

    moveL() {
        if (this.vert == false && this.sel == true && ledger[this.occ[0] - 1] == 0 && this.occ[0] % 6 != 0) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] -= 1;

            }
        }
        else screenShake();
    }

    moveU() {
        if (this.vert == true && this.sel == true && ledger[this.occ[0] - 6] == 0 && this.occ[0] > 5) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] -= 6;
            }
        }
        else screenShake();
    }

    moveD() {
        if (this.vert == true && this.sel == true && ledger[this.occ[2] + 6] == 0 && this.occ[2] < 30) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] += 6;
            }
        }
        else screenShake();
    }

    epoch() {
        this.corporeal = createVector((squareToCords(this.occ[0]).x + squareToCords(this.occ[2]).x) / 2, (squareToCords(this.occ[0]).y + squareToCords(this.occ[2]).y) / 2);

        if (this.vert) {
            if (this.corporeal.y - this.spirit.y != 0)
                this.spirit.y += 1 * log(max(this.corporeal.y - this.spirit.y, this.spirit.y - this.corporeal.y)) * Math.sign(this.corporeal.y - this.spirit.y);
            if (max(this.corporeal.y - this.spirit.y, this.spirit.y - this.corporeal.y) < 2) this.spirit.y = this.corporeal.y;
            // if (this.corporeal.y - this.spirit.y != 0) console.log(Math.sign(this.corporeal.y - this.spirit.y));
        }
        else {
            if (this.corporeal.x - this.spirit.x != 0)
                this.spirit.x += 1 * log(max(this.corporeal.x - this.spirit.x, this.spirit.x - this.corporeal.x)) * Math.sign(this.corporeal.x - this.spirit.x);
            if (max(this.corporeal.x - this.spirit.x, this.spirit.x - this.corporeal.x) < 2) this.spirit.x = this.corporeal.x;
        }
        fill(this.color);
        if (this.vert == false) {
            rectMode(CENTER);
            rect(this.spirit.x, this.spirit.y, 298, 98);
        }
        else {
            rectMode(CENTER);
            rect(this.spirit.x, this.spirit.y, 98, 298)
        }

    }
}

function coordsToSquare(x, y) {
    if (x > 600 || y > 600) {
        return -1;
    }
    return 6 * (Math.floor(y / 100)) + Math.floor(x / 100);
}

function squareToCords(i) {
    return createVector(50 + (i % 6) * 100, 50 + Math.floor(i / 6) * 100);
}

function mousePressed() {
    let mind = coordsToSquare(mouseX, mouseY);
    if (mind != -1 && (ledger[mind] != 0 && cars[ledger[mind] - 1].sel == true)) {
        cars[focus - 1].sel = false;
    }
    else {
        if (mind < 0) mind = 0;
        // console.log(focus);
        if (focus != 0) {
            cars[focus - 1].sel = false;
        }
        // console.log(ledger[mind]);
        focus = ledger[mind];
        if (ledger[mind] != 0) {
            cars[focus - 1].sel = true;
        }
    }
}

function keyPressed() {
    if (!purgatory) {
        if (keyCode === RIGHT_ARROW) {
            cars[focus - 1].moveR();
        }
        if (keyCode === LEFT_ARROW) {
            cars[focus - 1].moveL();
        }
        if (keyCode === UP_ARROW) {
            cars[focus - 1].moveU();
        }
        if (keyCode === DOWN_ARROW) {
            cars[focus - 1].moveD();
        }
    }
    cars[focus - 1].occ.sort((a, b) => a - b);
    // console.log(cars[focus - 1].occ);
}

function screenShake(FC) {
    screenCount = frameCount;
}