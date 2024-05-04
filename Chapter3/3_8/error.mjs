import { promises as fs } from "fs";

setInterval(() => {
    fs.unlink('./abcdefg.js').catch(console.error);
}, 1000);
