# jakes-game-of-life
 Advanced Conway's Life-like life simulation.

This idea came from, well, my head many years aback. I decided to use Conway's Game of Life as the starting point due to its being well-known and because it can be a canvas on which to test my ideas.

## Todo

- [ ] implement Conway's Life 
- [ ] begin implementing simulation logic
- [ ] solve for INVERTER, saving allowed solutions
- [ ] solve for OR gate, with inverters and solutions being produced
- [ ] solve for AND gate

## Game
### Conway's Life Differences
- It is not an actual game, but a simulation where interaction if accomplished via setting values: average lifespan of "creatures", voltage range of gate outputs, speed, chances of creature spawning via implicit but non-existence of molecules combining to produce life-like entities that then become life, board size, etc.
- The object of the simulation is to evolve solutions to Boolean logic gates in order to produce food and procreate
- The output of gates are not only high and low but low and highs of variable intensity measured in voltage; the higher the voltage, the more food is produced, extending the life of "creatures"
- There are not only one solution to gates and thus food production but also 
- Block colors have meanings: 
  - red:    dying
  - green:  food
  - black:  life or life-like entity
  - gray:   protolife construct (may turn into creature)
- Smaller creatures tend to be faster, though certain shapes can speed up larger creatures, and faster creatures evolve with more speed