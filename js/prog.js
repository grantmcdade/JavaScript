"use strict";
var solution_1 = require("./solution");
function processData(input) {
    //Enter your code here
    var solution = new solution_1.EqualSolution();
    solution.solve();
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
    processData(_input);
});
//# sourceMappingURL=prog.js.map