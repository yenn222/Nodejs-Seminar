process.on('uncaughtExeption', (err) => {
    console.error('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('서버 고장내기');
}, 2000);

setTimeout(() => {
    console.log('실행됩니다');
}, 3000);
