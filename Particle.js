class Particle{
	constructor(x,y,r){
		var options={
			restitution:0.3
        }
		this.x=x;
		this.y=y;
        this.r=r;
        this.color = color(random(0,255),random(0,255),random(0,255));
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		World.add(world, this.body);
    }

    display(){
    var pos=this.body.position;		
    push()
	translate(pos.x, pos.y);
	ellipseMode(RADIUS);
	fill(this.color);
	strokeWeight(0);
	ellipse(0,0,this.r, this.r);
	pop()		
	}

}