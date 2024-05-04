console.log('require가 가장 위에 없어도 돼');

module.exports = '날 찾아봐';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);
