# jakes-game-of-life

 Advanced Conway's Life-like life simulation.

This idea came from, well, my head many years aback. I decided to use Conway's Game of Life as the starting point due to its being well-known and because it can be a canvas on which to test my ideas.

## Todo

- [x] take a few hours to learn enough OpenGL (ES 3.0? whatever the hell webgl is)
- [ ] learn some linear algebra (I'm guessing) and related math such as geometry
- [ ] implement Conway's Life
- [ ] begin implementing simulation logic
- [ ] solve for NOT (INVERTER), saving allowed solutions
- [ ] solve for OR gate, with inverters and solutions being produced
- [ ] solve for AND gate
- [ ] solve for NOR gate
- [ ] solve for NAND gate
- [ ] solve for XOR gate
- [ ] maybe solve for XNOR gate
- [ ] try a 4- or 8-bit ADDER
- [ ] implement React+WebGL version

<table class="wikitable">
    <tbody>
        <tr style="background:gray; text-align:center;">
            <td colspan="2"><b>INPUT</b></td>
            <td colspan="6"><b>OUTPUT</b></td>
        </tr>
        <tr style="background:lightgray; text-align:center; color:gray;">
            <td>A</td>
            <td>B</td>
            <td>AND</td>
            <td>NAND</td>
            <td>OR</td>
            <td>NOR</td>
            <td>XOR</td>
            <td>XNOR</td>
        </tr>
        <tr style="background:lightyellow; text-align:center; color:gray;">
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr style="background:lightyellow; text-align:center; color:gray;">
            <td>0</td>
            <td>1</td>
            <td rowspan="2">0</td>
            <td rowspan="2">1</td>
            <td rowspan="2">1</td>
            <td rowspan="2">0</td>
            <td rowspan="2">1</td>
            <td rowspan="2">0</td>
        </tr>
            <tr style="background:lightyellow; text-align:center; color:gray;">
            <td>1</td>
            <td>0</td>
        </tr>
        <tr style="background:lightyellow; text-align:center; color:gray;">
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
        </tr>
    </tbody>
</table>

<!-- |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | B |AND|NAND|OR|NOR|XOR|XNOR|
| | --- | --- | |
| 0 | 0 | 0 | 1-xV | 0 | 1-xV | 0 | 1-xV |
| 0 | 1-xV | 0 | 1-xV | 1-xV | 0 | 1-xV | 0 |
| 1-xV | 0 | 0 | 1-xV | 1-xV | 0 | 1-xV | 0 |
| 1-xV | 1-xV | 1-xV | 0 | 1-xV | 0 | 0 | 1-xV | -->

**`<fun>`**

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

**`</fun>`**

**Eventually:**

- [ ] implement React-only version

## Simulator ("Game")

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

## Running

No framework is used here. I'll be making it a React app soon-ish, for portfolio reasons, but I'll try to keep things organized so that the framework can be easily pulled out, probably just two versions.

The simplest way I've found to run this so far is just to use VS Code with the Live Server plug in. I'll add additional details for running the React app when that is done. Make sure if you are using Live Server that you have `index.html` opened in a vscode tab. Good luck.
