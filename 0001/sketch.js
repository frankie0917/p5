var circles = [];

function setup() {
	createCanvas(500, 500);
	background(220);
    
    while (circles.length < 50) {
        
        let circle = {
            x : random(width),
            y : random(height),
            r : 25
        };
        
        let overlap = false;
        
        for (let j = 0; j < circles.length; j++) {
            let other = circles[j];
    
            if (dist(circle.x, circle.y, other.x, other.y) < circle.r + other.r) {
                overlap = true;
            }
        }
        
        if (!overlap) {
            circles.push(circle);
        }
    }

	for (let i = 0; i < circles.length; i++) {
		let circle = circles[i];

		noStroke();
		fill(255, 0, 0, 100);
		ellipse(circle.x, circle.y, circle.r, circle.r);
	}
}

function draw() {}
