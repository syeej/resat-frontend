//시간 입력
var hoursInput = document.getElementById('hours');
var minutesInput = document.getElementById('minutes');
var secondsInput = document.getElementById('seconds');
//버튼
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');
//타이머
var timerArea = document.getElementById('area-countdown');
var timer;
var countdown;

//시작버튼
startBtn.addEventListener('click', function(){
  //console.log(typeof(hoursInput.value)); //String Type
  var hours = parseInt(hoursInput.value) || 0;
  var minutes = parseInt(minutesInput.value) || 0;
  var seconds =  parseInt(secondsInput.value) || 0;
  countdown = hours*3600 + minutes*60 + seconds;

  if(countdown>0){
    showTimerArea();
    updateCountdown();

    //setInterval - clearInterval을 통해 설정
    timer = setInterval(function(){
      if(countdown > 0){
        countdown--;
        updateCountdown();
      }else{
        clearInterval(timer);
        timerArea.innerHTML = '타이머 종료';
      }
    }, 1000);
  }
});
//정지 버튼
stopBtn.addEventListener('click', function(){
  clearInterval(timer); //setInterval 중단
})
//리셋 버튼
resetBtn.addEventListener('click', function(){
  clearInterval(timer); //setInterval 중단
  showInputArea();
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
})

//입력창 X, 타이머 O
function showTimerArea(){
  document.getElementById('area-input').style.display = 'none';
  document.getElementById('area-countdown').style.display = 'block';
  startBtn.style.display = 'none';
}
//타이머 X, 입력창 O
function showInputArea(){
  document.getElementById('area-input').style.display = 'block';
  document.getElementById('area-countdown').style.display = 'none';
  startBtn.style.display = 'block';
}
//카운트다운 시간 계산
function updateCountdown(){
  var h = Math.floor(countdown/3600);
  var m = Math.floor((countdown%3600)/60);
  var s = Math.floor(countdown%60);
  if(h<10) h = "0"+h;
  if(m<10) m = "0"+m;
  if(s<10) s = "0"+s;
  timerArea.innerHTML = h + " : " + m + " : " + s;
}
