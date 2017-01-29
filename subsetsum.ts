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
 * SubsetSumSolution
 */
export class SubsetSumSolution {
    solve() {
        let input = [1, 3, 9, 2];
        let target = 5;
        let dp: boolean[][] = [];

        for (let i = 0; i < input.length + 1; i++) {
            dp.push([true]);
        }

        for (let i = 1; i <= target; i++) {
            dp[0].push(false);
        }

        for (let row = 1; row <= input.length; row++) {
            for (let col = 1; col <= target; col++) {
                dp[row].push(dp[row - 1][col]);
                if (dp[row][col] === false && col >= input[row - 1]) {
                    dp[row][col] = dp[row - 1][col - input[row - 1]];
                }
            }
        }

        console.log(dp);
    }
}