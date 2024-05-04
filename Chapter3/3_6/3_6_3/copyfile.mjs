import { promises as fs } from "fs";

fs.copyFile('../3_6_2/readme4.txt', '../3_6_2/writeme4.txt')
    .then(() => {
        console.log('복사 완료');
    })
    .catch((error) => {
        console.log(error);
    })
