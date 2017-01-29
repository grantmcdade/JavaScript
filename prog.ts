import { EqualSolution } from "./solution"

declare var process: any;
declare var _input: string;

function processData(input) {
    //Enter your code here
    let solution = new EqualSolution();
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
