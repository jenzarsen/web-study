/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import {input} from '@inquirer/prompts';
import fs from 'fs';
import qr from 'qr-image'

const answer = await input({message: 'Type Anything'});
 
var qr_image = qr.image(answer, { type: 'png' });
qr_image.pipe(fs.createWriteStream('qr.png'));

fs.writeFile("URL.txt", answer, (err) =>{
    if(err) throw err;
});