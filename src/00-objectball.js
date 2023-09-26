function gameObject(){
    return{
        home:{
            teamName:"Brooklyn Nets",
            colors: ["Black","White"],
            players:{
                "Allan Anderson":{
                    Number:0,
                    Shoe:16,
                    Points:22,
                    Rebounds:12,
                    Assists:12,
                    Steals:3,
                    Blocks:1,
                    Slam_Dunks:1
                },
                "Reggie Evans":{
                    Number:30,
                    Shoe:14,
                    Points:12,
                    Rebounds:12,
                    Assists:12,
                    Steals:12,
                    Blocks:12,
                    Slam_Dunks:7
                },
                "Brook Lopez" :{
                    Number:11,
                    Shoe:17,
                    Points:17,
                    Rebounds:19,
                    Assists:10,
                    Steals:3,
                    Blocks:1,
                    Slam_Dunks:15
                },
                "Mason Plumlee":{
                    Number:1,
                    Shoe:19,
                    Points:26,
                    Rebounds:12,
                    Assists:6,
                    Steals:3,
                    Blocks:8,
                    Slam_Dunks:5
                },
                "Jason Terry":{
                    Number:31,
                    Shoe:15,
                    Points:19,
                    Rebounds:2,
                    Assists:2,
                    Steals:4,
                    Blocks:11,
                    Slam_Dunks:1
                }
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien":{
                    Number:4,
                    Shoe:18,
                    Points:10,
                    Rebounds:1,
                    Assists:1,
                    Steals:2,
                    Blocks:7,
                    Slam_Dunks:2
                },
                "Bismak Biyombo":{
                    Number:0,
                    Shoe:16,
                    Points:12,
                    Rebounds:4,
                    Assists:7,
                    Steals:7,
                    Blocks:15,
                    Slam_Dunks:10
                },
                "DeSagna Diop" :{
                    Number:2,
                    Shoe:14,
                    Points:24,
                    Rebounds:1,
                    Assists:12,
                    Steals:4,
                    Blocks:5,
                    Slam_Dunks:5
                },
                "Ben Gordon":{
                    Number:8,
                    Shoe:15,
                    Points:33,
                    Rebounds:3,
                    Assists:2,
                    Steals:1,
                    Blocks:1,
                    Slam_Dunks:0
                },
                "Brendan Haywood":{
                    Number:33,
                    Shoe:15,
                    Points:6,
                    Rebounds:12,
                    Assists:12,
                    Steals:22,
                    Blocks:5,
                    Slam_Dunks:12
                }
            }
        }
    }
}
function homeTeamName(){
    let object = gameObject()
    return object["home"]["teamName"]
}

/* or function homeTeamName(){
  return gameObject()['home']['teamName']
}
 */
console.log(homeTeamName())

// number of points Scored

function numPointsScored(player) {
    const game = gameObject();
    for (let key in game) {
      const players = game[key].players;
      if (players[player]) {
        return players[player].Points;
      }
    }
  }
  console.log(numPointsScored("Ben Gordon"));
  
  // the player shoeSize
  
  function shoeSize(playerName) {
    const game = gameObject();
    for (let key in game) {
      const players = game[key].players;
      if (players[playerName]) {
        return players[playerName].Shoe;
      }
    }
  }
  console.log(shoeSize("Brendan Haywood"));
  
// Team Colors

function teamColors(teamName) {
    const game = gameObject();
    for (let key in game) {
      if (teamName) {
        return game[key].colors;
      }
    }
  }
  console.log(teamColors("Charlotte Hornets"));


// Team name

function teamNames() {
    const game = gameObject();
    const teamNamesArray = Object.values(game);
    const teamNames = teamNamesArray.map(element => element.teamName);
    return teamNames;
  }
  console.log(teamNames());
  
  //  Team players numbers
  
  function playerNumbers(name) {
    const game = gameObject();
  
    for (let key in game) {
      if (game[key].teamName === name) {
        const playersNames = Object.values(game[key].players).map(element => element.Number);
        return playersNames;
      }
    }
  }
  console.log(playerNumbers("Charlotte Hornets"));
  
  // Player's stats
  
  function playerStats(playerName) {
    const game = gameObject();
    for (let key in game) {
      if (game[key].players[playerName]) {
        return game[key].players[playerName];
      }
    }
  }
  console.log(playerStats("Allan Anderson"));
  
  // big shoe rebounds
  
  function bigShoeRebounds() {
    const game = gameObject();
    let shoeSize = 0;
    let rebounds = 0;
    const newArray = [];
    Object.values(game).forEach(team => {
      Object.values(team.players).forEach(player => {
        if (player.Shoe > shoeSize) {
          shoeSize = player.Shoe;
          rebounds = player.Rebounds;
        }
      });
    });
    newArray.push(shoeSize, rebounds);
    return newArray;
  }
  
  console.log(bigShoeRebounds());
  
  function mostPointsScored() {
    const game = gameObject();
    let points = 0;
    Object.values(game).forEach(team => {
      Object.values(team.players).forEach(player => {
        points = Math.max(points, player.Points);
      });
    });
    return points;
  }
  console.log(mostPointsScored());
  
  // winning team
  
  function winningTeam() {
    const game = gameObject();
    const homeTotalPoints = Object.values(game.home.players).reduce(
      (acc, curr) => {
        return acc + curr.Points;
      },
      0
    );
    const awayTotalPoints = Object.values(game.away.players).reduce(
      (acc, curr) => {
        return acc + curr.Points;
      },
      0
    );
    const winner = Math.max(homeTotalPoints, awayTotalPoints);
    return winner;
  }
  console.log(winningTeam());
  
  // the player with the longest name
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    Object.values(game).forEach(team => {
      Object.keys(team.players).forEach(player => {
        if (longestName > player.length) {
          longestName = player.length;
        }
        longestName = player;
      });
    });
    return longestName;
  }
  console.log(playerWithLongestName());
  
  // the player with the most steals
  
  function doesLongNameStealATon() {
    const game = gameObject();
    let mostSteals = 0;
    const longestName = playerWithLongestName();
    Object.values(game).forEach(team => {
      Object.values(team.players).forEach(player => {
        if (player.steals > mostSteals) {
          mostSteals = player.steals;
        }
      });
    });
    const value =
      game.home.players[longestName] || game.away.players[longestName];
    return value.steals === mostSteals;
  }
  console.log(doesLongNameStealATon());