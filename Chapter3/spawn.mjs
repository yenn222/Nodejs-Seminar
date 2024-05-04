import spawn from 'child_process';

const process = spawn('python3', ['test.py']); // python3 입력해야 돌아가용

process.stdout.on('data', function (data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function (data) {
    console.log(data.toString());
}); // 실행 에러
