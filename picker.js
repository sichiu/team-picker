const { random } = require("./random");

const generateTeams = (players) => {
    if (!players.length) return {};

    const teamA = [];
    const teamB;
    const totalPlayers = players.length;

    while (teamA.length <= players / 2) {
        const index = random(players.length);
        const selectedPlayer = players(index);
        players.splice(index, 1);
        teamA.push(selectedPlayer)
    }

    teamB.push(...players);

    return {
        teamA, teamB
    }
}

module.exports = {
    generateTeams
}


