const foo = require('./dir2/module2');

console.log('Direct from module1:',__dirname);
foo('module1');
