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

declare var console: any;

/**
 * Day11Solution
 */
export class Day11Solution {
    solve(input: string) {
        let lines = input.split('\n');
        let arr: number[][] = [];
        for (let i = 0; i < 6; i++) {
            arr[i] = lines[i].split(' ').map(Number);
        }

        let maxHourglass = Number.MIN_SAFE_INTEGER;
        for (let row = 0; row < arr.length - 2; row++) {
            let element = arr[row];
            for (let col = 0; col < element.length - 2; col++) {
                let cell = element[col];
                let currentHourglass = arr[row][col + 0] + arr[row][col + 1] + arr[row][col + 2] + arr[row + 1][col + 1] + arr[row + 2][col + 0] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
                maxHourglass = Math.max(maxHourglass, currentHourglass);
            }
        }

        console.log(maxHourglass);
    }
}