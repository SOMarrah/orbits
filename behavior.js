var treasureChest = Math.floor(Math.random() * 5)
var bomb = Math.floor(Math.random() * 5)
var clicks = 0;
var wins = 0;
var loss = 0;
//arrays are lists of things - make planets variables that objects


const treasure = (location) => {
  if (treasureChest === bomb){
    bomb = Math.floor(Math.random() * 5)
  }
else if (location === treasureChest) {
     wins += 1;
     document.getElementById(location).innerHTML = "WIN!"
     document.getElementById("wins").innerHTML = wins;
     document.getElementById("circle-orbit-container").style.pointerEvents = "none"
     console.log("itworks")
}
  else if (location === bomb) {
     document.getElementById(location).innerHTML = "BOMB!"
     loss += 1;
     document.getElementById("loss").innerHTML = loss;
     document.getElementById("circle-orbit-container").style.pointerEvents = "none"
     console.log("itworks")
}
else if(clicks === 8){
  alert("You've run out of fuel!")
  document.getElementById("circle-orbit-container").style.pointerEvents = "none"
  loss += 1;
  document.getElementById("loss").innerHTML = loss;
  console.log("itworks")
}
  else{
    document.getElementById(location).innerHTML = "TRY AGAIN!"
    alert(`${treasureChest} , ${bomb}`)
    clicks =+ 1;
    console.log("itworks")
  }
}

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function reload() {
  console.log("asasdfdf")
  clicks = 0
  document.getElementById(0).innerHTML= '<img src="https://cdn.pixabay.com/photo/2018/10/22/01/00/blue-3764277_1280.png" width="20px">';
  document.getElementById(1).innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Arcadian_Planet_Gamma.png" width="30px">';
  document.getElementById(2).innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Bringer_of_War_Planet.png" width="35px">';
  document.getElementById(3).innerHTML='<img src="https://cdn.pixabay.com/photo/2017/04/04/14/26/pluto-2201446_1280.png" width="35px">';
  document.getElementById(4).innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Ice_planet.png" width="40px">';
  document.getElementById(5).innerHTML='<img src="https://cdn.pixabay.com/photo/2019/07/03/12/14/saturn-4314403_1280.png" width="100px">';
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("circle-orbit-container").style.pointerEvents = "all"
  treasureChest = Math.floor(Math.random() * 5)
  bomb = Math.floor(Math.random() * 5)
}
