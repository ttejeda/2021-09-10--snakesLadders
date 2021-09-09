class Player{

    constructor(name){
        this.name = name;
        this.position = 0;
    }

    throwDice(){
        let a = Math.ceil(Math.random() * 6);
        this.position += a;
    }

    getName(){
        return this.name;
    }

    getPosition(){
        return this.position;
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
}

let carlos = new Player("Carlos");
let juan = new Player("Juan");
let SL = new Board();