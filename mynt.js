var table = document.getElementById("LEDarray");
var LEDoutput = document.getElementById("LEDoutput");
var rows = [];
var cells = [];
var pixelnumber = 143;
var pixels = [0]

function LEDset(p, x, y) {
	if (cells[y][x].classList.contains("LEDoff")) {
		cells[y][x].classList.remove("LEDoff");
		cells[y][x].classList.add("LEDon");
		pixels[p] = 1;
	} else {
		cells[y][x].classList.remove("LEDon");
		cells[y][x].classList.add("LEDoff");
		pixels[p] = 0;
	}
	LEDoutput.innerHTML = "";
	for (i=0; i<144; i+=8) {
		LEDoutput.innerHTML += "0b"+pixels[i]+pixels[i+1]+pixels[i+2]+pixels[i+3]+pixels[i+4]+pixels[i+5]+pixels[i+6]+pixels[i+7]+", <br \>";
	}
}

for (y=0; y<15; y++) {
	rows[y] = table.insertRow(-1);
	cells[y] = [];
	for (x=0; x<19; x++) {
		cells[y][x] = rows[y].insertCell(-1);
		//cells[y][x].innerHTML = x+(y*19);
		if (y%2 == 1) {
			if (x == 0) pixelnumber -= 8;
			if (x%2 == 1) {
				cells[y][x].classList.add("LEDoff");
				cells[y][x].innerHTML = pixelnumber;
				//cells[y][x].onclick = function() { LEDset(pixelnumber, x, y);};
				cells[y][x].setAttribute("onclick", "LEDset("+pixelnumber+", "+x+", "+y+");");
				pixels[pixelnumber] = 0;
				pixelnumber++;
			}
			if (x == 18) pixelnumber -= 10;
		} else {
			//if (x == 0) pixelnumber -= 9;
			if (x%2 == 0) {
				cells[y][x].classList.add("LEDoff");
				cells[y][x].innerHTML = pixelnumber;
				cells[y][x].setAttribute("onclick", "LEDset("+pixelnumber+", "+x+", "+y+");");
				pixels[pixelnumber] = 0;
				pixelnumber--;
			}
		}
	}
}