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

interface Vertex
{
    i: number;
    j: number;
    dist: number;
    prev: Vertex;
    char: string;
}

/**
 * GridlandProvincesSolution
 */
export class GridlandProvincesSolution {
    solve(input: string) {
        let currentLine = 0;
        let lines = input.split('\n');
        let provinceCount = parseInt(lines[currentLine++]);
        let provinces = [];
        for (let i = 0; i < provinceCount; i++) {
            let characterCout = parseInt(lines[currentLine++]);
            provinces[i] = [
                lines[currentLine++],
                lines[currentLine++]
            ];
        }
        console.log(provinces);

        provinces.forEach(province => {
            console.log(this.distinctStringCount(province));

        });
    }

    distinctStringCount(province: string[]): number {
        let strings = [];
        let vertices: Vertex[] = [];
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < province[i].length; j++) {
                vertices.push({
                    "i": i,
                    "j": j,
                    dist: Number.MAX_SAFE_INTEGER,
                    prev: undefined,
                    char: province[i][j]
                });
            }
        }


        vertices.forEach(vertex => {
            vertices.forEach(item => {
                item.dist = Number.MAX_SAFE_INTEGER;
                item.prev = undefined

                let next: Vertex[] = [];
                vertices[0].dist = 0;
                next.push(vertices[0]);

                let currentString = '';
                let visited: any = {};

                while (next.length > 0) {
                    let item =  next[0];
                    if (visited[item.i + '-' + item.j] != true) {
                        visited[item.i + '-' + item.j] = true;

                        currentString += province[item.i][item.j];

                        // if (item.i > 0) {
                        //     next.push({ "i": item.i - 1, "j": item.j });
                        // }
                        // if (item.i < 1) {
                        //     next.push({ "i": item.i + 1, "j": item.j });
                        // }
                        // if (item.j > 0) {
                        //     next.push({ "i": item.i, "j": item.j - 1 });
                        // }
                        // if (item.j < province[item.i].length - 1) {
                        //     next.push({ "i": item.i, "j": item.j + 1 });
                        }
                    }
                    next.shift();
                //}

                // if (currentString.length > 0 && strings.indexOf(currentString) === -1) {
                //     strings.push(currentString);
                // }
            });
        });

        // return strings.length;
        return 0;
    }

    // search(province: string[], item: { i: number, j: number }, visited: {}, order: string[]): string {
    //     let currentString = '';
    //     if (visited[item.i + '-' + item.j] != true) {
    //         visited[item.i + '-' + item.j] = true;
    //         order.push(item.i + '-' + item.j);

    //         if (item.j > 0) {
    //             currentString += this.search(province, { "i": item.i, "j": item.j - 1 }, visited, order);
    //         }
    //         else if (item.j < province[item.i].length - 1) {
    //             currentString += this.search(province, { "i": item.i, "j": item.j + 1 }, visited, order);
    //         }
    //         else if (item.i > 0) {
    //             currentString += this.search(province, { "i": item.i - 1, "j": item.j }, visited, order);
    //         }
    //         else if (item.i < 1) {
    //             currentString += this.search(province, { "i": item.i + 1, "j": item.j }, visited, order);
    //         }

    //         currentString += province[item.i][item.j];
    //     }
    //     return currentString;
    // }

    // path(provinces: string[]) : number {
    //     let dp: number[][] = [];

    //     for (let row = 0; row < 2; row++) {
    //         for (let col = 0; col < provinces[row].length; col++) {
    //             if (col === 0) {
    //                 dp[row][col] = 0;
    //             }

    //             if (row === 0) {
    //                 dp[row][col] = col;
    //             }
    //         }
    //     }
    // }
}