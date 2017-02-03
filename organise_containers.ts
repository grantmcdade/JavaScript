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
            // let containers: number[][] =  [];
            // for (let rowIndex = 0; rowIndex < M.length; rowIndex++) {
            //     let row = M[rowIndex];
            //     for (let colIndex = 0; colIndex < M[rowIndex].length; colIndex++) {
            //         let item = M[rowIndex][colIndex];
            //         containers
            //     }
            // }

            let foundSwap = true;
            while (foundSwap) {
                foundSwap = false;
                for (let row = 1; row < M.length; row++) {
                    for (let col = 0; col < M[row].length; col++) {
                        if (col > row) {
                            M[row][col] += 1;
                            M[row - 1][col] -= 1;
                            foundSwap = true;
                        }
                    }
                }
            }

            // Check if the result is valid
            let isValid = true;
            let itemCounts: number[] = [];
            for (let rowIndex = 0; rowIndex < M.length; rowIndex++) {
                let container = M[rowIndex];
                let items: number[] = [];

                for (let colIndex = 0; colIndex < container.length; colIndex++) {
                    let item = container[colIndex];
                    if (items.length === 0 || items[0] != item) {
                        items.push(item);
                        if (items.length > 1) {
                            isValid = false;
                            break;
                        }
                        if (itemCounts[item] === undefined) {
                            itemCounts[item] = rowIndex;
                        }
                        if (itemCounts[item] != undefined && itemCounts[item] != rowIndex) {
                            isValid = false;
                            break;
                        }
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