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
 * Day10Solution
 */
export class Day10Solution {
    solve(input: string) {
        let value = parseInt(input);
        let consecutiveOnes = 0;
        let maxConsecutiveOnes = 0;

        do {
            if ((value & 1) === 1) {
                ++consecutiveOnes;
            } else {
                if (consecutiveOnes > maxConsecutiveOnes) {
                    maxConsecutiveOnes = consecutiveOnes;
                }
                consecutiveOnes = 0;
            }
            value = value >> 1;
        } while (value > 0);

        if (consecutiveOnes > maxConsecutiveOnes) {
            maxConsecutiveOnes = consecutiveOnes;
        }

        console.log(maxConsecutiveOnes);
    }
}