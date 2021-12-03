const picker = require("./picker");

const args = process.argv

const result = picker.generateTeams(args);

console.log("GENERATED TEAMS", `\nA - ${result.teamA.join(",")} \nB - ${result.teamB.join(",")}`)