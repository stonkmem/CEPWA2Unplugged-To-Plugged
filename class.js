class twoBlock {
    constructor(V, occI, col) {
        this.vert = V;
        this.occ = occI;
        this.color = col;
    }
    moveR() {
        for (let i = 0; i < this.occ.length; i++) {
            i += 1;
        }
    }
    moveL() {
        for (let i = 0; i < this.occ.length; i++) {
            i -= 1;
        }
    }
    moveU() {
        for (let i = 0; i < this.occ.length; i++) {
            i -= 6;
        }
    }
    moveD() {
        for (let i = 0; i < this.occ.length; i++) {
            i += 6;
        }
    }
    epoch() {
        for (let i = 0; i < this.occ.length; i++) {
            rectMode(RADIUS);
            fill(this.color);
            rect(squareToCords(this.occ[i]).x, squareToCords(this.occ[i]).y, 50, 50);
        }
    }
}


class threeBlock {
    constructor(V, occI, col) {
        this.vert = V;
        this.occ = occI;
        this.color = col;
    }
    moveR() {
        for (let i = 0; i < this.occ.length; i++) {
            i += 1;
        }
    }
    moveL() {
        for (let i = 0; i < this.occ.length; i++) {
            i -= 1;
        }
    }
    moveU() {
        for (let i = 0; i < this.occ.length; i++) {
            i -= 6;
        }
    }
    moveD() {
        for (let i = 0; i < this.occ.length; i++) {
            i += 6;
        }
    }
    epoch() {
        for (let i = 0; i < this.occ.length; i++) {
            rectMode(RADIUS)
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
    console.log(coordsToSquare(mouseX, mouseY));
}