const $screen = document.querySelector("#screen");
const $toggleButton = document.querySelector("#button");

console.log("screen", $screen);
console.log("toggleButton", $toggleButton);
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

if ($screen && $toggleButton) {
  // 첫번째 아규먼트 : 문자열(이벤트 이름)
  // 두번째 아규먼트 : 함수 주솟값 >> 콜백함수
  function cllickBtn() {
    alert("하하");
  }

  // $toggleButton.addEventListener("click", cllickBtn); // (값1, 값2)
  //   $toggleButton.addEventListener("click", function () {
  //     alert("호호");
  //   });
  $toggleButton.addEventListener("click", () => {
    stopWatchOn = !stopWatchOn;
    $toggleButton.innerHTML = stopWatchOn ? "■" : "▶";
    // innerHTML은 실제로 HTML태그값도 먹히는 반면 innerText는 텍스트값 그대로 나온다.
    $toggleButton.classList.toggle("stop-color");
    // $toggleButton.style.backgroundColor = stopWatchOn ? "tomato" : "steelblue";
    if (stopWatchOn) {
      // 첫번째 인자(아규먼트): 콜백함수
      // 두번째 인자(아규먼트): 숫자(Number) - ms
      timeInterval = setInterval(() => {
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, "0");
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, "0");
        const cs = String(seconds % 100).padStart(2, "0");
        $screen.innerText = `${mm}:${ss}:${cs}`;
      }, 10);
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      $screen.innerText = "00:00:00";
    }
  });
}
