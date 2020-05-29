const V_clock=document.querySelector('#selectClock');
const V_stopwatch=document.querySelector('#selectStop');
const V_timer=document.querySelector('#selectTimer');
const C_clock=document.querySelector('#clock');
const C_stopwatch=document.querySelector('#stopwatch');
const C_timer=document.querySelector('#timer');


V_clock.onclick=function(){
    C_clock.style.display='block';
    C_stopwatch.style.display='none';
    C_timer.style.display='none';
}


V_stopwatch.onclick=function(){
    C_clock.style.display='none';
    C_stopwatch.style.display='block';
    C_timer.style.display='none';
}
V_timer.onclick=function(){
    C_clock.style.display='none';
    C_stopwatch.style.display='none';
    C_timer.style.display='block';
}

//1. 타이머에 버튼 만들기
//2. 스탑워치에 분, 초 입력칸이랑 버튼 만들기 
//3. 이름이랑 숫자 사이에 마진 조정하기 
//4. 윈도우 박스 꾸미기
//5. 배경화면 만들기
//6. 글씨 그림자 만들기
