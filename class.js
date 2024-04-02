class twoBlock {
  constructor(V, occI, col) {
    this.vert = V;
    this.occ = occI;
    this.color = col;
    this.sel = false; // SELECTED
    this.occ.sort();
  }
  moveR() {
    if (this.vert == false && this.sel == true && ledger[this.occ[1]+1] == 0){
      for (let i = 0; i < this.occ.length; i++) {
          this.occ[i] += 1;
        }
    }
  }

  moveL() {
    if (this.vert == false && this.sel == true && ledger[this.occ[0]-1] == 0){
      for (let i = 0; i < this.occ.length; i++) {
        this.occ[i]-= 1;
      }
    }
  }

  moveU() {
    if (this.vert == true && this.sel == true && ledger[this.occ[0]-6] == 0){
      for (let i = 0; i < this.occ.length; i++) {
        this.occ[i]-= 6;
      }
    }
  }

  moveD() {
    if (this.vert == false && this.sel == true && ledger[this.occ[1]+6] == 0){
      for (let i = 0; i < this.occ.length; i++) {
        this.occ[i]+= 6;
      }
    }
  }

  epoch() {
    for (let i = 0; i < this.occ.length; i++) {
        rectMode(RADIUS);
        fill(this.color);
        if(this.sel === false){
            rect(squareToCords(this.occ[i]).x, squareToCords(this.occ[i]).y, 50, 50);
        }
        if(this.sel === true){
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
    if (this.vert == false && this.sel == true && ledger[this.occ[2]+1] == 0){
      for (let i = 0; i < this.occ.length; i++) {
          this.occ[i] += 1;
      }
    }
  }

  moveL() {
    if (this.vert == false && this.sel == true && ledger[this.occ[0]-1] == 0){
      for (let i = 0; i < this.occ.length; i++) {
        this.occ[i]-= 1;
      }
    }
  }

  moveU() {
    if (this.vert == true && this.sel == true && ledger[this.occ[0]-6] == 0){
      for (let i = 0; i < this.occ.length; i++) {
        this.occ[i]-= 6;
      }
    }
  }

  moveD() {
    if (this.vert == false && this.sel == true && ledger[this.occ[2]+6] == 0){
      for (let i = 0; i < this.occ.length; i++) {
        this.occ[i]+= 6;
      }
    }
  }

  epoch() {
    for (let i = 0; i < this.occ.length; i++) {
      rectMode(RADIUS);
      fill(this.color);
      if(this.sel === false){
          rect(squareToCords(this.occ[i]).x, squareToCords(this.occ[i]).y, 50, 50);
      }
      if(this.sel === true){
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
  console.log(coordsToSquare(mouseX, mouseY));
  if (ledger[mind] != 0) {
      focus=ledger[mind];
      cars[focus].sel = true;
  }
}