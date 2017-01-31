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
        let currentLine = 0;
        let lines = input.split('\n');
        let testCount = parseInt(lines[currentLine++]);
        let options = [1, 2, 5];

        // Tests
        for (let test = 1; test <= testCount; test++) {

            let coInternCount = parseInt(lines[currentLine++]);
            let chocolateCounts = lines[currentLine++].split(' ').map(Number);
            let minChocolateCount = Number.MAX_SAFE_INTEGER;
            let maxChocolateCount = Number.MIN_SAFE_INTEGER;
            chocolateCounts.forEach(element => {
                minChocolateCount = Math.min(minChocolateCount, element);
                maxChocolateCount = Math.max(maxChocolateCount, element);
            });

            let operationsTable: number[][] = [];
            // Buil a table of minimum operations
            let columnCount = maxChocolateCount - minChocolateCount;
            for (let row = 0; row < options.length; row++) {
                for (let col = 0; col <= columnCount; col++) {
                    if (operationsTable[row] === undefined) {
                        operationsTable[row] = [];
                    }

                    operationsTable[row][col] = Number.MAX_SAFE_INTEGER;

                    if (col === 0) {
                        operationsTable[row][col] = 1;
                        continue;
                    }

                    if (row === 0) {
                        operationsTable[row][col] = col;
                        continue;
                    }

                    let option = options[row];

                    if (col < option) {
                        operationsTable[row][col] = operationsTable[row - 1][col];
                        continue;
                    }

                    let operations = this.operationsRequired(col);
                    operationsTable[row][col] = Math.min(operationsTable[row][col - (option - 1)] + 1, operations);
                }
            }

            let minOperationsNeeded = Number.MAX_SAFE_INTEGER;
            chocolateCounts.forEach((element, index) => {
                let operationsNeeded = operationsTable[2][element - minChocolateCount];
                minOperationsNeeded = Math.min(minOperationsNeeded, operationsNeeded);
            });

            console.log(minOperationsNeeded);
        }
    }

    operationsRequired(amount: number) {
        let operations = 0;
        if (amount >= 5) {
            operations += Math.floor(amount / 5);
            amount = amount % 5;
        }

        if (amount >= 2) {
            operations += Math.floor(amount / 2);
            amount = amount % 2;
        }

        if (amount >= 1) {
            operations += amount;
        }

        return operations;
    }
}