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

interface Node {
    id: number
}

interface Edge {
    ui: number,
    vi: number,
    weight: number
}

/**
 * Solution
 */
export class TournamentSolution {
    solve(input: string) {
        let currentLine = 0;
        let lines = input.split('\n');
        let games = parseInt(lines[currentLine++]);
        for (let game = 0; game < games; game++) {
            let n = parseInt(lines[currentLine++]);
            let values: number[] = lines[currentLine++].split(' ').map(Number);
            let edges: Edge[] = [];
            for (let i = 0; i < n; i++) {
                edges.push({
                    ui: values[0],
                    vi: values[1],
                    weight: values[2]
                });
            }

            let removed: number[] = [];
            let visited: boolean[] = [];

            let next = [edges[0].ui];
            while (next.length > 0) {
                if (visited[edges[0].ui] != true) {
                    visited[edges[0].ui] = true;
                    edges.forEach(edge => {
                        if (edge.ui === next[0]) {
                            next.push(edge.vi);
                        }
                    });
                }
                next.shift();
            }
        }
    }
}