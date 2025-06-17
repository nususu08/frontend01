/*
        asynchronous.js 비동기 처리에 대한 이해
        자바스크립트 특징이 싱글 스레드, 비동기 처리를 한다.
    */

console.log("-- 시작 --");
// 인자 2개
// 1. 콜백
// 2. 밀리세컨드
setTimeout(() => console.log("안녕"), 3000);
console.log("-- 끝 --");
