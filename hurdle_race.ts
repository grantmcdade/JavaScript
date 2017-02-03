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
 * HurdleRaceSolution
 */
export class HurdleRaceSolution {
input_stdin_array:string[];
input_currentline: number;
    readLine(): string {
    return this.input_stdin_array[this.input_currentline++];
    }

    solve(input: string) {
        this.input_stdin_array = input.split('\n');
        this.input_currentline = 0;
        var n_temp = this.readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        let height = this.readLine().split(' ').map(Number);
        // your code goes here
        let maxHeight = k;
        let beveradgeCount = 0;
        for (let i = 0; i < height.length; i++) {
            if (height[i] > maxHeight) {
                let diff = height[i] - maxHeight;
                maxHeight += diff;
                beveradgeCount += diff;
            }
        }
        console.log(beveradgeCount);
    }
}