class mango{
constructor(x,y,radius){

var options={
isStatic :true,
restitution :0,
friction: 1,
}
this.image = loadImage("mango.png");
this.x=x;
this.y=y;
this.radius=radius;
this.body = Bodies.circle(this.x,this.y,radius, options);
World.add(world, this.body);
}

display(){
 var pos = this.body.position; 
push();
 translate(pos.x,pos.y);
rotate(this.body.angle);
imageMode(CENTER);
ellipseMode(CENTER);
image(this.image, 0, 0, this.radius,this.radius);
 pop();
}

}
