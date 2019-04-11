var vertices = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index',-1);
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function mousePressed() {
	let v = createVector(mouseX, mouseY);

	vertices.push(v);
}

function draw() {
	background(51);
	let reached = [];
    let unreached = [];
    
    for(let i = 0;i<vertices.length;i++){

        unreached.push(vertices[i]);
    }

	reached.push(unreached[0]);
	unreached.splice(0, 1);

	while (unreached.length > 0) {
		let shortest= 10000,
			rindex ,
			uindex ;
        
		reached.forEach((r, ri) => {
			unreached.forEach((u, ui) => {
				let d = dist(r.x, r.y, u.x, u.y);

				if (d < shortest) {
					shortest = d;
					rindex = ri;
					uindex = ui;
				}
			});
        });
        
        stroke(255);
        strokeWeight(4);
		line(reached[rindex].x,reached[rindex].y,unreached[uindex].x,unreached[uindex].y);
        
        reached.push(unreached[uindex]);
		unreached.splice(uindex, 1);

	}

	vertices.forEach((it) => {
		noStroke();
		fill(255);
		ellipse(it.x, it.y, 50, 50);
	});
}
