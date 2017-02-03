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

declare  var console: any;

/**
 * FibSolution
 */
export class FibSolution {
    solve() {
        let target = 10;
        let dp: number[] = [];

        for (let i = 0; i <= target; i++) {
            if (i === 0) {
                dp.push(0);
            } else if (i === 1) {
                dp.push(1);
            } else {
                dp.push(dp[i - 1] + dp[i - 2]);
            }
        }

        console.log(dp[dp.length - 1]);
    }
}