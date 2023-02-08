class Player {
    static totalRuns = 0;
  
    constructor(PlayerID, PlayerName, PlayerRuns, PlayerDateofBirth, PlayerShirtNumber) {
      this.PlayerID = PlayerID;
      this.PlayerName = PlayerName;
      this.PlayerRuns = PlayerRuns;
      this.PlayerDateofBirth = PlayerDateofBirth;
      this.PlayerShirtNumber = PlayerShirtNumber;
      Player.totalRuns += PlayerRuns;
    }
  
    DisplayInfo() {
      console.log(`PlayerID: ${this.PlayerID}`);
      console.log(`PlayerName: ${this.PlayerName}`);
      console.log(`PlayerRuns: ${this.PlayerRuns}`);
      console.log(`PlayerDateofBirth: ${this.PlayerDateofBirth}`);
      console.log(`PlayerShirtNumber: ${this.PlayerShirtNumber}`);
    }
  
    GetRuns() {
      return this.PlayerRuns;
    }
  
    AddRuns(runs) {
      this.PlayerRuns += runs;
      Player.totalRuns += runs;
    }
  
    static DisplayTotalRuns() {
      console.log(`Total Runs by all players: ${Player.totalRuns}`);
    }
  }
  let player1 = new Player(1, "John Doe", 50, "01-01-2000", 10);
  player1.DisplayInfo();
  console.log(`Player Runs: ${player1.GetRuns()}`);
  player1.AddRuns(20);
  console.log(`Player Runs after adding runs: ${player1.GetRuns()}`);
  
  let player2 = new Player(2, "Jane Doe", 30, "01-01-2001", 11);
  player2.DisplayInfo();
  console.log(`Player Runs: ${player2.GetRuns()}`);
  
  Player.DisplayTotalRuns();
    