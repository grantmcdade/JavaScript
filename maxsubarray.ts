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
 * MaxSubArraySolution to calculate the maximum contiguous
 * subarray sum.
 */
export class MaxSubArraySolution {
    solve() {
        let input = [2, -9, 5, 1, -4, 6, 0, -7, 8];

        let currSum = 0;
        let maxSum = 0;
        input.forEach(value => {
            currSum += value;
            if (currSum > maxSum) {
                maxSum = currSum;
            }

            if (currSum < 0) {
                currSum = 0;
            }
        });

        console.log(maxSum);
    }
}