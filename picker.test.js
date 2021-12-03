const picker = require("./picker");

describe("Team picker", () => {
    it.each([
        [[]],
        [undefined]
    ])("should return empty object for no players", (players) => {
        const result = picker.generateTeams(players)

        expect(result).toEqual({})
    })

    it.each([
        [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"], 6],
        [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",], 5],
        [["Bob", "Bill", "Ben", "Brett", "Barry", "Brad"], 3],
        [["Ben", "Brett", "Barry", "Brad"], 2]
    ]("should generate teams for players %s with a size of %d", (players, expectedLength) => {
        const result = picker.generateTeams(players)

        expect(result.teamA.length).toBe(expectedLength)
        expect(result.teamB.length).toBe(expectedLength)
    })

    it.each([
        [["Ben", "Brett", "Barry", "Brad"]],
        [["Bob", "Bill", "Ben", "Brett", "Barry", "Brad"]],
    ])("should include all names in generated teams for players %s", (players) => {
        const result = picker.generateTeams(players)

        expect(result.teamA.concat(result.teamB)).toEqual(expect.arrayContaining(players))
    })
  })
})