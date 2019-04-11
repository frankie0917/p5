var vertices = [];

/**
 * @description create window size canvas
 */
function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', -1);
}

/**
 * @description resize canvas when resize window
 */
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

/**
 * @description create vector each click and push into vertices
 */
function mousePressed() {
	let v = createVector(mouseX, mouseY);

	vertices.push(v);
}

function draw() {
	background(51);
	let reached = [];
	let unreached = [];
	//copy vertices to unreached
	for (let i = 0; i < vertices.length; i++) {
		unreached.push(vertices[i]);
	}
	//add the first element in unreached to reached and delete it in unreached
	reached.push(unreached[0]);
	unreached.splice(0, 1);
	//while unreached isn't empty
	while (unreached.length > 0) {
		//prepare shortest for comparison
		let shortest = Infinity,
			rindex,
			uindex;
		//for every element in reached
		reached.forEach((r, ri) => {
			//for every element in unreached
			unreached.forEach((u, ui) => {
                //find the distances between two vector 
				let d = dist(r.x, r.y, u.x, u.y);
                //compare
				if (d < shortest) {
					shortest = d;
					rindex = ri;
					uindex = ui;
				}
			});
		});
        //draw a line between the shortest connection
		stroke(255);
		strokeWeight(4);
		line(reached[rindex].x, reached[rindex].y, unreached[uindex].x, unreached[uindex].y);
        //update to reached
		reached.push(unreached[uindex]);
		unreached.splice(uindex, 1);
	}
    //draw the vectices
	vertices.forEach((it) => {
		noStroke();
		fill(255);
		ellipse(it.x, it.y, 50, 50);
	});
}
