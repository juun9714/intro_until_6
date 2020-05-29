//1. 증가할 변수 timelap 선언 = 0
//2. 1초마다 1씩 증가
//3. timelap / 60 한 결과에 바닥함수를 적용하면 분이 나온다
//4. timelap % 60 한 결과는 초다.
//minute, second 10 이하일 때 0 붙여주는 조건문 만들기
//let minute=Math.floor(timelap/60)  // let second=timelap%60 //let timenow=minute+':'+second
//5. 그 결과를 변수에 넣어서 화면에 띄우기 -> let timeshow=document.querySelector('#stopwatch h1')
// timeshow.textContent=timenow;
// 이 단계를 함수로 정의하고 이 함수를 1초마다 반복하기
// 이걸 start 버튼을 눌렀을때 실행하기 & start 버튼을 누르면 버튼 value를 stop으로 바꾸기 (조건문)
// reset 버튼을 누르면 화면에 00:00을 띄우고 timelap 변수도 0으로 초기화 해주기.

let timelap=0;
const startbtn=document.querySelector('#start');
const rstbtn=document.querySelector('#reset');

let stopfunc=function(){
    timelap=timelap+1;
    let minute=Math.floor(timelap/60);
    let second=timelap%60;
    if(minute<10) minute='0'+minute;
    if(second<10) second='0'+second;
    let timenow=minute+':'+second;

    let timeshow=document.querySelector('#stopwatch h1')
    timeshow.textContent=timenow;
}
let a;
startbtn.onclick = function(){

    let cur=document.querySelector('#start').textContent;
    if(cur==='start'){
        document.querySelector('#start').textContent='stop';
        a=setInterval(stopfunc,1000);
    }else{
        document.querySelector('#start').textContent='start';
        clearInterval(a);
    }
}

rstbtn.onclick=function(){
    timelap=0;
    let timeshow=document.querySelector('#stopwatch h1');
    timeshow.textContent='00:00';
}
