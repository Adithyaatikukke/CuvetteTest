let rock = document.querySelector("#rock");
let scissor = document.querySelector("#scissor");
let paper = document.querySelector("#paper");
let choose = document.querySelector("#choose");
let result = document.querySelector("#result");
let userwon = document.querySelector("#userwillwin");
let pcwon = document.querySelector("#pcwillwin");
let win = document.querySelector("#win");
let res = document.querySelector("#res");
let playagain = document.querySelector("#replay");
let pcselect = document.querySelector("#selectedpc");
let userselect = document.querySelector("#selecteduser");
let humanscr = document.querySelector("#humanpoint");
let compscr = document.querySelector("#computerpoint");
let finishgame = document.querySelector("#end");
let rbtn = document.querySelector("#next");
let rules = document.querySelector("#rules");
let exit = document.querySelector("#exit");
let userpoint = 0;
let pcpoint = 0;
finishgame.addEventListener("click", function () {
    declare();
});

function declare() {
    if (pcpoint < userpoint) {
        prizepage();
    }
}

function prizepage() {
    window.location.href = "winners.html";
}
function update() {
    compscr.innerText = pcpoint;
    humanscr.innerText = userpoint;
    localStorage.setItem("pc", Number(pcpoint));
    localStorage.setItem("user", Number(userpoint));
}
function controlclick(optionsselected) {
    optionsselected();
    btnonclick();
    update();
}
rock.addEventListener("click", () => controlclick(rockselected));
scissor.addEventListener("click", () => controlclick(scissorselected));
paper.addEventListener("click", () => controlclick(paperselected));
function btnonclick() {
    choose.style.display = "none";
    result.style.display = "flex";
}
function userwillwin() {
    userpoint = userpoint + 1;
    userwon.style.display = "flex";
    pcwon.style.display = "none";
    playagain.innerText = "PLAY AGAIN";
    res.innerText = "AGAINST PC";
    win.innerText = "YOU WIN";
}
function pcwillwin() {
    pcpoint = pcpoint+ 1;
    userwon.style.display = "none";
    pcwon.style.display = "flex";
    playagain.innerText = "PLAY AGAIN";
    res.innerText = "AGAINST PC";
    win.innerText = "YOU LOST";
}
function tie() {
    userwon.style.display = "none";
    pcwon.style.display = "none";
    win.innerText = "TIE UP";
    res.innerText = "";
    playagain.innerText = "PLAY AGAIN";
}
playagain.addEventListener("click", () => {
    result.style.display = "none";
    choose.style.display = "flex";
    ["rock", "paper", "scissor"].forEach((classes) => {
        pcselect.classList.remove(classes);
        userselect.classList.remove(classes);
    });
});
function Rule() {
    if (rules.style.display === "none") {
        rules.style.display = "flex";
    } else {
        rules.style.display = "none";
    }
}
exit.addEventListener("click", () => {
    rules.style.display = "none";
});
function randomChoice(userOption) {
    const options = ["rock", "scissor", "paper"];
    userselect.classList.add(userOption);
    console.log(userOption);
    let pcselected = selectrandomly();
    let pcOption = options[pcselected];
    pcselect.classList.add(pcOption);
    if (pcselected === options.indexOf(userOption)) {
        tie();
    } else if ((pcselected - options.indexOf(userOption) + 3) % 3 === 1) {
        userwillwin();
    } else {
        pcwillwin();
    }
}

function rockselected() {
    randomChoice("rock");
}

function scissorselected() {
    randomChoice("scissor");
}

function paperselected() {
    randomChoice("paper");
}
function selectrandomly() {
    const randomlypick = Math.floor(Math.random() * 3);
    return randomlypick;
}
function updatePoints() {
    const pcScore = localStorage.getItem("pc");
    const userScore = localStorage.getItem("user");

    if (pcScore !== null) {
        pcpoint = Number(pcScore);
        compscr.innerText = pcpoint;
    } else {
        pcpoint = 0;
        compscr.innerText = pcpoint;
    }

    if (userScore !== null) {
        userpoint = Number(userScore);
        humanscr.innerText = userpoint;
    } else {
        userpoint = 0;
        humanscr.innerText = userpoint;
    }
}
updatePoints();