/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

declare var console;

/**
 * EqualSolution
 */
export class EqualSolution {
    public solve(input: string) {
        let lines = input.split('\n');
        let testCount = parseInt(lines[0]);
        let currentLine = 1;
        let options = [1, 2, 5];
        for (let test = 1; test <= testCount; test++) {
            let coInterCount = parseInt(lines[currentLine++]);
            let chocolateCount = lines[currentLine++].split(' ').map(Number);

            let minOperations: number[][][] = [];
            for (let k = 0; k < coInterCount; k++) {
                let internChocolateCount: number = <any>chocolateCount[k] as number;
                if (minOperations[k] === undefined) {
                    minOperations[k] = [];
                }
                for (let m = 0; m <= internChocolateCount; m++) {
                    if (minOperations[k][m] === undefined) {
                        minOperations[k][m] = [];
                    }
                    for (var n = 0; n < options.length; n++) {
                        if (minOperations[k][m][n] === undefined) {
                            minOperations[k][m][n] = Number.MAX_SAFE_INTEGER;
                        }
                    }
                }
            }

            // Find the least number of operations
            for (let intern = 0; intern < coInterCount; intern++) {
                let internChocolateCount: number = <any>chocolateCount[intern] as number;
                let internTable = minOperations[intern];
                for (let chocolateCount = 1; chocolateCount <= internChocolateCount; chocolateCount++) {
                    for (let optionIndex = 0; optionIndex < options.length; optionIndex++) {

                        let option = options[optionIndex];
                        if (option === chocolateCount) {
                            internTable[chocolateCount][option] = Math.min(internTable[chocolateCount - 1][option] + 1, chocolateCount / option);
                        }

                        // if (chocolateCount < options[optionIndex]) {
                        //     minOperations[intern][chocolateCount][optionIndex] = minOperations[intern][chocolateCount - 1][options[optionIndex]];
                        // } else if (chocolateCount === options[optionIndex]) {
                        //     minOperations[intern][chocolateCount][optionIndex] = 1;
                        // }
                        // else if (chocolateCount % options[optionIndex] === 0) {
                        //     minOperations[intern][chocolateCount][optionIndex] = Math.min(minOperations[intern][chocolateCount - 1][options[optionIndex]] + 1, chocolateCount / options[optionIndex]);
                        // }
                        // else {
                        //     minOperations[intern][chocolateCount][optionIndex] = minOperations[intern][chocolateCount - 1][optionIndex] + 1;
                        // }

                    }
                }
            }

            console.log(minOperations);
        }
    }
}