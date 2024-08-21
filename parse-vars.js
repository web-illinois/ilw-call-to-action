/*
 * This simple script parses the CSS file for variables and their descriptions.
 */
import {readFileSync} from "fs";

const contents = readFileSync("src/ilw-call-to-action.css", "utf-8");
const regex = /^\s*(--[\w-]+):[^;]+;\s*\/\*\s*(var|vardep):\s*(.+)\*\s*\/$/gm;

let output = [];
let m;
while (m = regex.exec(contents)) {
    output.push({
        name: m[1],
        depreciated: m[2] === "vardep",
        description: m[3]
    })
}

console.log(JSON.stringify(output, null, 4));
