# team-picker
This is a team generator that will randomly assign a list of players into teams.

## Steps
Ensure you commit after each step.

 - Fix all the Javascript syntax errors - the test and code don't currently run. Tip: There are syntax errors in both the picker.js and picker.test.js - some of these the IDE will highlight for you. The tests should run (but fail) once fixed.
 - Ensure all the tests pass.
 - There is currently a bug when you execute the generator from the terminal - there are some unwanted arguments in the generated teams. 
 - Modify this code so that it reads the names from a file that you specify at runtime e.g. node index.js players.txt
 - If there are an odd number of players the last player should be made a substitute.
 - There are two players that are more skilled than the rest and need to be on separate teams e.g Bill and Ben. Adapt the solution to allow players to have a rating.
 - More players have decided to join in each week. There are potentially 20 players each week, rather than having two teams of ten they'd like four teams of five. Expand the solution so that the number of teams to generate can be specified.