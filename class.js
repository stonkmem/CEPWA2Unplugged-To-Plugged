class twoBlock {
    constructor(V, occI, col) {
        this.vert = V;
        this.occ = occI;
        this.color = col;
        this.sel = false; // SELECTED
        this.occ.sort();
    }
    moveR() {
        if (this.vert == false && this.sel == true && ledger[this.occ[1] + 1] == 0 && this.occ[1] % 6 != 5) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] += 1;
                moves += 1;
            }
        }
    }

    moveL() {
        if (this.vert == false && this.sel == true && this.occ[0] != 0 && ledger[this.occ[0] - 1] == 0 && this.occ[0] % 6 != 0) {
            for (let i = 0; i < this.occ.length; i += 1) {
                this.occ[i] -= 1;
                moves += 1
            }
        }
    }
    moveU() {
        if (this.vert == true && this.sel == true && ledger[this.occ[0] - 6] == 0 && this.occ[0] > 5) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] -= 6;
                moves += 1;
            }
        }
    }

    moveD() {
        if (this.vert == true && this.sel == true && ledger[this.occ[1] + 6] == 0 && this.occ[1] < 30) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] += 6;
                moves += 1;
            }
        }
    }

    epoch() {
        for (let i = 0; i < this.occ.length; i++) {
            rectMode(RADIUS);
            fill(this.color);
            if (this.sel === false) {
                rect(squareToCords(this.occ[i]).x, squareToCords(this.occ[i]).y, 50, 50);
            }
            if (this.sel === true) {
                rect(squareToCords(this.occ[i]).x, squareToCords(this.occ[i]).y, 60, 60);
            }
        }
    }
}

class threeBlock {
    constructor(V, occI, col) {
        this.vert = V;
        this.occ = occI;
        this.color = col;
        this.sel = false; // SELECTED
        this.occ.sort();
    }
    moveR() {
        if (this.vert == false && this.sel == true && ledger[this.occ[2] + 1] == 0 && this.occ[2] % 6 != 5) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] += 1;
            }
        }
    }

    moveL() {
        if (this.vert == false && this.sel == true && ledger[this.occ[0] - 1] == 0 && this.occ[0] % 6 != 0) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] -= 1;
            }
        }
    }

    moveU() {
        if (this.vert == true && this.sel == true && ledger[this.occ[0] - 6] == 0 && this.occ[0] > 5) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] -= 6;
            }
        }
    }

    moveD() {
        if (this.vert == true && this.sel == true && ledger[this.occ[2] + 6] == 0 && this.occ[2] < 30) {
            for (let i = 0; i < this.occ.length; i++) {
                this.occ[i] += 6;
            }
        }
    }

    epoch() {
        for (let i = 0; i < this.occ.length; i++) {
            rectMode(RADIUS);
            fill(this.color);
            if (this.sel === false) {
                rect(squareToCords(this.occ[i]).x, squareToCords(this.occ[i]).y, 50, 50);
            }
            if (this.sel === true) {
                rect(squareToCords(this.occ[i]).x, squareToCords(this.occ[i]).y, 60, 60);
            }
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
    if (ledger[mind] != 0 && cars[ledger[mind] - 1].sel == true) {
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
}