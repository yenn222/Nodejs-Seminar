import { promises as fs } from "fs";

console.log('시작');
fs.readFile('./readme2.txt').then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .catch((err) => {
        console.log(err);
    });
