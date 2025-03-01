var music1 = new Audio('Rose_Ft_Bruno_Mars_-_APT.mp3');
var music2 = new Audio('Imn Oficial FC Rapid.mp3');
var music3 = new Audio('Undertale - Megalovania.mp3');
function newAudio1(){
    music2.pause();
    music3.pause();
    music1.play();  
}

function newAudio2(){
    music1.pause();
    music3.pause();
    music2.play();  
}

function newAudio3(){
    music1.pause();
    music2.pause();
    music3.play();  
}

function musicStop(){
    music1.pause();
    music2.pause();
    music3.pause();
}
