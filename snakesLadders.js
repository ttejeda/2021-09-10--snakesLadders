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

let board = new Array;
for(let i = 0; i <= 100; i++){
    board.push(i);
}
let snakes = [1, 17, 20, 39, 5, 31, 15, 48, 52];
let ladders = [8, 22, 48, 95, 65, 76, 100, 82, 94];
for(let i = 0; i <= 8; i++){
    board[11 * (i + 1)] = snakes[i];
    board[11 * (i) + 2] = ladders[i];
}

let carlos = new Player("Carlos");
let juan = new Player("Juan");