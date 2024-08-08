// const fs = require('fs');

// fs.readFile('hello.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });


const fs = require('node:fs/promises');

async function example() {
    try {
        const data = await fs.readFile('hello.txt', { encoding: 'utf8' });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
example();

