const Bluebird = global.Promise = require ('bluebird');
console.log ('before cote load');
console.log ('Promise === Bluebird ? ' + (Promise === Bluebird));
const cote = require ('cote');
console.log ('after cote load');
console.log ('Promise === Bluebird ? ' + (Promise === Bluebird));
