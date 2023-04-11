let turn = 0;
let weHaveWinner = false;
function writeXO(buttonID) {
	const button =
		document.getElementById(buttonID);
	if (button.innerHTML) {
		//if button isnt empty end
		return;
	}
	if (weHaveWinner) {
		return;
	}
	if (turn % 2 == 0) {
		writeX(buttonID);
		turn += 1;
	} else if (turn % 2 == 1) {
		writeO(buttonID);
		turn++;
	}
}

function writeX(buttonID) {
	const button =
		document.getElementById(buttonID);
	button.innerHTML =
		'<i class="fa-solid fa-x"></i>';
	checkWin();
	if (turn == 8 && !weHaveWinner) {
		//check for draw
		console.log("draw?");
		const root =
			document.querySelector(":root");
		root.style.setProperty(
			"--endgame-zindex",
			11
		);
        const winning_msg = document.querySelector(".winning-msg");
        winning_msg.innerHTML = "It's a draw";


	}
}
function writeO(buttonID) {
	const button =
		document.getElementById(buttonID);
	button.innerHTML =
		'<i class="fa-solid fa-o"></i>';
	checkWin();
}
function checkWin() {
	checkHorizontal();
	checkVertical();
	checkDiagonal();
}
function checkHorizontal() {
	if (
		one.innerHTML == two.innerHTML &&
		one.innerHTML == three.innerHTML &&
		one.innerHTML != ""
	) {
		soomeOneWon("top-row");
	}
	if (
		four.innerHTML == five.innerHTML &&
		four.innerHTML == six.innerHTML &&
		four.innerHTML != ""
	) {
		soomeOneWon("middle-row");
	}
	if (
		seven.innerHTML == eight.innerHTML &&
		seven.innerHTML == nine.innerHTML &&
		seven.innerHTML != ""
	) {
		soomeOneWon("bottom-row");
	}
}
function checkVertical() {
	if (
		one.innerHTML == four.innerHTML &&
		one.innerHTML == seven.innerHTML &&
		one.innerHTML != ""
	) {
		soomeOneWon("left-column");
	}
	if (
		two.innerHTML == five.innerHTML &&
		two.innerHTML == eight.innerHTML &&
		two.innerHTML != ""
	) {
		soomeOneWon("middle-column");
	}
	if (
		three.innerHTML == six.innerHTML &&
		three.innerHTML == nine.innerHTML &&
		three.innerHTML != ""
	) {
		soomeOneWon("right-column");
	}
}
function checkDiagonal() {
	if (
		one.innerHTML == five.innerHTML &&
		one.innerHTML == nine.innerHTML &&
		one.innerHTML != ""
	) {
		soomeOneWon("leftToRight");
	}
	if (
		three.innerHTML == five.innerHTML &&
		three.innerHTML == seven.innerHTML &&
		three.innerHTML != ""
	) {
		soomeOneWon("RightToLeft");
	}
}
function soomeOneWon(line) {
	weHaveWinner = true;

	//winning alert
	const root = document.querySelector(":root");
	root.style.setProperty(
		"--endgame-zindex",
		11
	);

	//winning message
    const winning_msg = document.querySelector(".winning-msg")
	if (turn % 2 == 0) {
		winning_msg.innerHTML = "X won the game";
	} else {
        winning_msg.innerHTML = "O won the game";
	}

	///line
	const winningLine = document.querySelector(
		".winning-line"
	);
	if (line == "top-row") {
		winningLine.style.top = "15%";
		winningLine.style.left = "0px";
		winningLine.style.width = "100%";
	} else if (line == "middle-row") {
		winningLine.style.top = "50% - 10px";
		winningLine.style.left = "0px";
		winningLine.style.width = "100%";
	} else if (line == "bottom-row") {
		winningLine.style.bottom = "15%";
		winningLine.style.left = "0px";
		winningLine.style.width = "100%";
	} else if (line == "left-column") {
		winningLine.style.top = "0";
		winningLine.style.left = "15%";
		winningLine.style.height = "100%";
		winningLine.style.width = "20px";
	} else if (line == "middle-column") {
		winningLine.style.top = "0";
		winningLine.style.left = "50% - 10px";
		winningLine.style.height = "100%";
		winningLine.style.width = "20px";
	} else if (line == "right-column") {
		winningLine.style.top = "0";
		winningLine.style.right = "15%";
		winningLine.style.height = "100%";
		winningLine.style.width = "20px";
	} else if (line == "leftToRight") {
		winningLine.style.left = "0px";
		winningLine.style.top = "50%";
		winningLine.style.width = "100%";
		winningLine.style.transform =
			"rotate(45deg)";
	} else if (line == "RightToLeft") {
		winningLine.style.left = "0px";
		winningLine.style.top = "50%";
		winningLine.style.width = "100%";
		winningLine.style.transform =
			"rotate(-45deg)";
	}
}
function restart() {
	window.location.reload();
}
