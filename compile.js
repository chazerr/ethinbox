const path = require('path');
const fs = require ('fs'); //filesystem module
const solc = require ('solc')

//for windows or unix
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source,1));
