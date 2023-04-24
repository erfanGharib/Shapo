const fs = require('fs');

// let data;
// for (let index = 11; index <= 14; index++) {
//     data += `import img${index} from '@/assets/images/products/585x585 (${index}).jpg';\n`
    
// }
// console.log(__dirname);
// fs.writeFile(__dirname + '\\data.json', data, () => console.log('file created'));
for (let index = 12; index <= 13; index++) {
    fs.rename(__dirname + `\\585x585 (${index}).jpg`, __dirname + `\\585x585 (${index-1}).jpg`, () => console.log('file Renamed'))
}