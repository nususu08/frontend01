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
    console.log("stopWathOn", stopWatchOn);
  });
}
