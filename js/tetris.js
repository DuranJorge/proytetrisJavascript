	
let lastTime=0;

const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
const grid =createMatriz(10,20);

context.scale(20,20);

function createMatriz(width,height){
	const matriz=[];
	while(height--){
		matriz.push(new Array(width).fill(0));
	}
	console.table(matriz)
	return matriz;
}

function draw(){
	context.fillStyle = "#000";
	context.fillRect(0,0,canvas.width,canvas.height);
}

function update(time=0){
	const deltaTime = time -lastTime;
	lastTime=time;
	draw();
	requestAnimationFrame(update);
}

update();