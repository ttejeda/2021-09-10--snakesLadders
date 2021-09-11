class Player{

    constructor(name){
        this.name = name;
        this.position = 0;
    }

    throwDice(dice){
        this.position += dice.throw();
    }

    getName(){
        return this.name;
    }

    getPosition(){
        return this.position;
    }

    advance(number){
        if(number == undefined){
            this.position = 100;
        } else {
            this.position += number;
        }
    }
}

class Dice{

    constructor(faces){
        this.faces = faces;
    }

    throw(){
        let face = Math.ceil(Math.random() * this.faces);
        return face;
    }
}

class Board{

    constructor(){
        this._board = this._generator();
    }

    _board(){
        let board = new Array;
        for(let i = 0; i <= 100; i++){
            board.push(0);
        }

        return board;
    }

    _snakes(board){
        for(let i = 1; i <= 9; i++){
            let a = Math.ceil(Math.random() * 15);
            board[11 * i] = -a;
        }

        return board;
    }

    _ladders(board){
        for(let i = 0; i < 9; i++){
            let b = Math.ceil(Math.random() * 15);
            board[11 * i + 2] = b;
        }

        return board;
    }

    _generator(){
        let board = this._board();
        this._snakes(board);
        this._ladders(board);

        return board;
    }

    getBoard(){
        return this._board;
    }
    
    showSquare(position){
        return this._board[position];
    }
}

let carlos = new Player("Carlos");
let juan = new Player("Juan");
let dice = new Dice(6);
let SL = new Board();

while(carlos.getPosition() < 100 && juan.getPosition() < 100){
    carlos.throwDice(dice);
    let a = SL.showSquare(carlos.getPosition());
    carlos.advance(a);

    juan.throwDice(dice);
    a = SL.showSquare(juan.getPosition());
    juan.advance(a);
}

if(carlos.getPosition() >= 100){
    console.log("¡Carlos es el ganador!");
} else {
    console.log("¡Juan es el ganador!");
}