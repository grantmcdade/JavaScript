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
 * LuckyNumbersSolution
 */
export class LuckyNumbersSolution {
    solve(input: string) {
        let currentLine = 0;
        let lines = input.split('\n');
        let numberCount = parseInt(lines[currentLine++]);
        for (let i = 0; i < numberCount; i++) {
            let n = parseInt(lines[currentLine++]);
            let success = false;
            for (var j = 0; j < n; j++) {
                if (n % 4 === 0 || n % 7 === 0) {
                    console.log("Yes");
                    success = true;
                    break;
                }
                n -= 7;
            }
            if (!success) {
                console.log("No");
            }
        }
    }
}