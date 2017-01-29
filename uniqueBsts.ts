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
 * UniqueBSTSolution
 */
export class UniqueBSTSolution {
    solve() {
        let input = 3;
        let maxBsts: number[] = [];

        for (var i = 1; i <= input; i++) {
            if (i === 1) {
                maxBsts.push(1);
            } else {
                maxBsts.push(maxBsts[i - 2] + 2);
            }
        }

        console.log(maxBsts[maxBsts.length - 1]);
    }
}