let encryption = document.querySelectorAll(".encryption");
let portal = document.querySelector(".portal");


//function to highlight some random characters
function highlightText(text){
    for (let i = 0; i < 15; i++) {
        text.children[Math.floor(Math.random() * 190)].style.cssText = `color:#fec019; text-shadow: 0px 5px 10px #fec019;
            box-shadow: -1px 5px 44px 0px rgba(255,230,0,0.71);
            -webkit-box-shadow: -1px 5px 44px 0px rgba(255,230,0,0.71);
            -moz-box-shadow: -1px 5px 44px 0px rgba(255,230,0,0.71);`;
    }
    return text;
}

//function to make all the text 
function makeHeroghleficText(e) {
    e.innerHTML = "";
    let encryptedText = document.createElement("div");
    for (let i = 0; i < 190; i++) {
        let char = document.createElement("span");
        char.style.color = "#babcd2";
        char.innerHTML = `&#x${random(13000, 13300)}; `;
        encryptedText.appendChild(char);
    }
    //return the text after highlighting some characters from it
    return highlightText(encryptedText);
}

//function to add the text on its position
function drawEncryption() {
    encryption.forEach((encryptedCard) => {
    encryptedCard.appendChild(makeHeroghleficText(encryptedCard));
    });
}

//function to add particles which go out from portal if the card touches it
function generateParticles(portalParticles) {
    let particle = document.createElement("div");
    particle.style.width = `${random(2, 7)}px`;
    particle.style.height = `${random(2, 7)}px`;
    let x = random(-100, 0);
    particle.style.backgroundColor = "#fff";
    particle.style.left = x + "px";
    particle.style.borderRadius = "50%";
    particle.style.filter = `blur(${Math.random()}px)`;
    particle.animate(
    [
        { transform: `translateX(${x}px` },
        { transform: `translateX(${x + 150}px` },
    ],
    {
        duration: random(1000, 2000),
        iterations: Infinity,
    }
    );
    portalParticles.appendChild(particle);
}

//function to make effect of opening the portal
function openPoratl() {
    portal.style.cssText = `box-shadow: rgba(254, 192, 25, 0.72) 20px 5px 44px 10px;
    -webkit-box-shadow: rgba(254, 192, 25, 0.72) 20px 5px 44px 10px;
    -moz-box-shadow: rgba(254, 192, 25, 0.72) 20px 5px 44px 10px;`;
}

//function to make effect of closing the portal
function closePortal() {
    portal.style.cssText = `box-shadow: 0px 20px 50px 3px #fec019;
    -webkit-box-shadow: 0px 20px 50px 3px #fec019;
    -moz-box-shadow: 0px 20px 50px 3px #fec019;`;
}

//function to know if the card is on penetrating the portal or not
function getDistance() {
    let x = document.querySelectorAll("img");
    let portalParticles = document.querySelector(".portalParticles");
    let flag = 0;
    x.forEach((one) => {
        if (+one.getBoundingClientRect().left <= +window.innerWidth / 2 &&+one.getBoundingClientRect().right > +window.innerWidth / 2)
            flag = 1;
    });

    if (flag == 1) {
        openPoratl();
        for (let i = 0; i < 50; i++) generateParticles(portalParticles);
        flag = 0;
    }
    else{
        portalParticles.innerHTML = "";
        closePortal();
    }
}

window.setInterval(drawEncryption, 500);
window.setInterval(getDistance, 100);
