const colorCharacter = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getRandomColor(){
	let color = '#';
	for(let index = 0; index < 6; index++){
		const colorIndex = Math.floor(Math.random() * 15);
		color            = `${color}${colorCharacter[colorIndex]}`;
	}
	return color;
}

function changeColor(){
	const color                                                    = getRandomColor();
	const element                                                  = document.getElementById('color-value');
	element.innerText                                              = color;
	document.getElementsByTagName('body')[0].style.backgroundColor = color;
	if(color === `#FFFFFF`){
		const elements = document.querySelectorAll('div.content > span');
		for(let ele of elements || []){
			ele.style.color = '#000000';
		}
	}
}

function afterLoad(){
	const element     = document.getElementById('color-value');
	element.innerText = '#000000';
}