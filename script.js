function Game(){
var confom = document.getElementById("result").innerHTML;
if(confom ===`You Lose !!` || confom ===`You Won !!`){
alert("Game Over Please Restart the game !!")


}else{

    document.getElementById('desc').style.display = "none";

    let ranNum ;


do{

   ranNum = Math.floor(Math.random() * 13) + 1;
    console.log(ranNum)

}while(ranNum === 0)

    let img = document.createElement("img");
    img.src = `Images/${ranNum}.png`;
    img.height = 100;
    document.getElementById("game-box").appendChild(img);

    let value = parseInt(document.getElementById('score').innerHTML);
    let updatedScore = value + ranNum;

      document.getElementById('score').innerHTML = updatedScore;
        

    if(updatedScore < 21){

        document.getElementById("message").innerHTML = `Your Score is ${updatedScore} less than 21. Please Generate more cards ..!`

    }else if(updatedScore > 21){

         document.getElementById("message").innerHTML = `
                  
    <p>Your score is ${updatedScore}, Great than 21.</p>
`;
        document.getElementById("result").style.display = "block";
        document.getElementById("result").style.color = "white";
         document.getElementById("result").innerHTML = `You Lose !!`;

         document.getElementById("restart").style.display = "block";
        

    }else if(updatedScore === 21){
       document.getElementById("message").innerHTML = `
                    
    <p>Your score is ${updatedScore}, Equal 21.</p>
    
`;
document.getElementById("result").style.display = "block";
document.getElementById("result").style.color = "#0dff00";
 document.getElementById("result").innerHTML = `You Won !!`;

 document.getElementById("restart").style.display = "block";




    }

   


}



}

function restart(){
    location.reload();
}


function Playsound(){
    
    var audio = new Audio('backMusic.mp3');
    audio.play();
}

function play(){

    document.getElementById('play').style.display = "none";
    document.getElementById('genaratecard').style.display = "block";
    document.getElementById('desc').innerHTML = " Genarate Card for press Button !!";
    



}