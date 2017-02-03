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
 * OrganiseContainers2Solution
 */
export class OrganiseContainers2Solution {
    input_stdin_array = [""];
    input_currentline = 0;

    readLine() {
        return this.input_stdin_array[this.input_currentline++];
    }

    solve(input: string) {
        this.input_stdin_array = input.split('\n');
        var q = parseInt(this.readLine());
        for (var a0 = 0; a0 < q; a0++) {
            var n = parseInt(this.readLine());
            var M: number[][] = [];
            for (let M_i = 0; M_i < n; M_i++) {
                M.push(this.readLine().split(' ').map(Number));
            }
            // your code goes here
            for (let t = 0; t < M[0].length; t++) {

                for (let oc = 0; oc < M.length; oc++) {
                    for (let ic = 0; ic < M.length; ic++) {

                        let diff = Math.abs(M[oc][t] - M[ic][t]);
                        if (ic !== oc && oc !== t && diff > 0) {
                            let amountToMove = Math.min(M[oc][t], M[ic][t]);
                            if (oc > t) {
                                M[oc][t] -= amountToMove
                                M[ic][t] += amountToMove;
                            } else if (oc < t) {
                                M[oc][t] -= amountToMove
                                M[ic][t] += amountToMove;
                            }
                        }
                    }
                }

            }
        }

        // Check if the result is valid
        let isValid = true;
        for (let c = 0; c < M.length; c++) {
            for (let t = 0; t < M[c].length; t++) {
                if (c !== t && M[c][t] !== 0) {
                    isValid = false;
                    break;
                }
            }
            if (!isValid) {
                break;
            }
        }

        console.log(isValid ? 'Possible' : 'Impossible');
    }
}