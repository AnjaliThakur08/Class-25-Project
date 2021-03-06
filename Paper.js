class Paper{
	constructor(x,y,r){
    var options = {
	'restitution':0.3,
	'friction':0,
	'density':1.2
	}
	// assign options to the paper ball
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
		this.image = loadImage("paper.png");

    }
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            //ellipse(0,0,this.r,this.r);
			image(this.image,0,0,this.r,this.r)
			pop()
	}

}