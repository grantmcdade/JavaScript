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
"use strict";
/**
 * CoinChangeSolution
 */
var CoinChangeSolution = (function () {
    function CoinChangeSolution() {
    }
    CoinChangeSolution.prototype.solve = function (totalAmount, coins) {
        var maximumWays = [];
        for (var coin = 0; coin < coins.length; coin++) {
            var denomination = coins[coin];
            for (var amount = 0; amount <= totalAmount; amount++) {
                if (maximumWays[coin] === undefined) {
                    maximumWays[coin] = [];
                }
                if (amount === 0) {
                    maximumWays[coin][0] = 1;
                    continue;
                }
                if (amount >= denomination && coin > 0) {
                    maximumWays[coin][amount] = maximumWays[coin - 1][amount] + maximumWays[coin][amount - denomination];
                }
                else if (coin > 0) {
                    maximumWays[coin][amount] = maximumWays[coin - 1][amount];
                }
                else if (amount % denomination === 0 && coin === 0) {
                    maximumWays[coin][amount] = 1;
                }
                else {
                    maximumWays[coin][amount] = 0;
                }
            }
        }
        console.log(maximumWays[coins.length - 1][totalAmount]);
    };
    return CoinChangeSolution;
}());
exports.CoinChangeSolution = CoinChangeSolution;
//# sourceMappingURL=coinchange.js.map