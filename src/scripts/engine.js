const emojis = [
"☯️",
"☯️",
"♟️",
"♟️",
"👮‍♂️",
"👮‍♂️",
"💪",
"💪",
"👨‍👩‍👧‍👦",
"👨‍👩‍👧‍👦",
"🎵",
"🎵",
"🧭",
"🧭",
"✝️",
"✝️",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));


for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
    box.classList.add("boxOpen");
    setTimeout(()=> box.classList.remove("boxOpen"), 5000);
    clearTimeout()
}




function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    
    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }

}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []
    

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        //endTime();
        alert("You Win");
        clearInterval(count);
    }
}


let segundos = 0;
let minutos = 0;
let horas = 0;

function contador() {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
        if (minutos == 60) {
            minutos = 0;
            horas++;
        }
    }
    let tempo = (horas ? (horas > 9 ? horas : "0" + horas) : "00") + ":" + (minutos ? (minutos > 9 ? minutos : "0" + minutos) : "00") + ":" + (segundos > 9 ? segundos : "0" + segundos);
    document.getElementById("timer").innerHTML = tempo;
}

let count = setInterval(contador, 1000);


// function endTime(){
//     //const imageUrl='./src/images/time.png'
//     swal({
//       title: 'Parabens!',
//       text: 'You Win: ',
//       icon: imageUrl
//     } ).then(()=>{
//         window.location.reload();
//     })
//   }