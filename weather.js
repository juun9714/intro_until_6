//사용자의 경도 위도 받기 ->

//위도, 경도를 넣어줄 곳 
const COORDS="coords" //객체가 들어가도록 하는 저장소 역할
const API_KEY="a46b64984d8ddb2efa8ff2c8d254fbc2"
const weather=document.querySelector(".jsweather")




function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj))


}//JSON의 형식으로 위도와 경도가 들어감


function handleSuccess(){
    console.log(position);
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude:latitude,
        longitude:longitude
    }//coordsObj=위도 경도
    saveCoords(coordsObj)
}

function handleError(){
    console.log('error');
}

function askforPosition(){
    navigator.geolocation.getCurrentPosition(handleSuccess,handleError);

}
//response = json --> js 에서 쓸 객체로 만들어줘야함
function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json);
        const temperature=json.main.temp;
        const name=json.name;
        console.log(temperature);
        console.log(name);
        weather.innerText=`Today's temperature is ${temperature}'C and Now we are here in git ${name}`

    })

}






function loadedCoords(){
    const loadedcoords=localStorage.getItem(COORDS)
    console.log(loadedcoords)
    if(loadedcoords===null){
        askforPosition();
    }else{
        const parsecoords=JSON.parse(loadedcoords);
        console.log(parsecoords);
        getWeather(parsecoords.latitude,parsecoords.longitude);
    }

}//위도, 경도를 넣어서 온도와 장소를 가져오는 함수


function init(){
    loadedCoords();
}
init();