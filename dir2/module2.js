console.log('Direct from module2:',__dirname);

function foo(from) {

  console.error(`From ${from} but lazily called from func defined in module2` , __dirname);
}

foo('module2');

module.exports = foo;
