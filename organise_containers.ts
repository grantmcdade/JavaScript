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
 * OrganiseContainersSolution
 */
export class OrganiseContainersSolution {
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
            for (let container = 0; container < M.length; container++) {
                let foundSwap = true;
                let extraRounds = 1;
                while (foundSwap || extraRounds > 0) {
                    foundSwap = false;
                    for (let outerType = 0; outerType < M[container].length; outerType++) {
                        if (container !== outerType && M[container][outerType] > 0) {
                            for (let innerType = 0; innerType < M[container].length; innerType++) {
                                if (outerType != innerType) {
                                    if (outerType < container) {
                                        let amountToTransfer = Math.min(M[container][outerType], M[container][innerType]);
                                        M[container][innerType] += amountToTransfer;
                                        M[container][outerType] -= amountToTransfer;
                                        foundSwap = foundSwap ? foundSwap : amountToTransfer > 0;
                                    } else if (outerType > container) {
                                        let amountToTransfer = Math.min(M[container][outerType], M[container][innerType]);
                                        M[container][outerType] -= amountToTransfer;
                                        M[container][innerType] += amountToTransfer;
                                        foundSwap = foundSwap ? foundSwap : amountToTransfer > 0;
                                    }
                                }
                            }
                        }
                    }

                    if (!foundSwap) {
                        --extraRounds;
                    } else {
                        extraRounds = 1;
                    }
                }
            }

            // Check if the result is valid
            let isValid = true;
            for (let container = 0; container < M.length; container++) {
                for (let type = 0; type < M[container].length; type++) {
                    if (container !== type && M[container][type] !== 0) {
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
}