let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newgame = document.querySelector('#new-btn');
let msgCont = document.querySelector('.msg-container');
let close = document.querySelector('#close');
let msg = document.querySelector("#msg");

let turnO = true; // Default player - O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#F97316";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#38BDF8";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {

                showWinner(pos1Val);
            }
        }
    }
}

newgame.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)
close.addEventListener("click", () => {
    msgCont.classList.add("hide");
})