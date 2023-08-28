let my = document.getElementById('name');
let player = document.getElementById('Player-name');
let press = document.getElementById('btn');
let prop=document.getElementById('quiz')

const inputname = () => {
    let text = my.value;
    if (text == "") {
        alert("This field can't remain empty"); 
    } else {
        player.innerText = `Player Name: ${text}`;
        prop.classList.remove('hidden')
    }
   
};

press.onclick = inputname; 
