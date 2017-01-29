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
        for (let test = 1; test <= testCount; test += 2) {
            let coInterCount = parseInt(lines[test]);
            let chocolateCount = lines[test + 1].split(' ');
            chocolateCount.map(Number);

            // Find the least number of operations
            let minOperations: number[][] = [];
            for (let intern = 0; intern < coInterCount; intern++) {
                let currentChocolateCount = chocolateCount[intern];

            }
        }
    }
}