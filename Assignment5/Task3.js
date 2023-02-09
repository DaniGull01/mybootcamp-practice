class Game {
     info() {
        console.log("I love game and sports")
    }
}
class Cricket extends Game {
    info() {
        console.log("I love Cricket");
    }
}
class Football extends Game {
    info() {
        console.log("I love football");
    }
}
const game = new Game();
const cricket = new Cricket();
const football = new Football();
 game.info();
 cricket.info();
 football.info();
