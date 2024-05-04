import fs from "fs";

fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType,filename);
})
