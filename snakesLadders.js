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

let carlos = new Player("Carlos");
let juan = new Player("Juan");