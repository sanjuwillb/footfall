class Particle{
    constructor(x, y) {
        var options = {
            restitution: 0.2,
            friction: 0,
            density: 0.1,
            frictionAir: 0.18
        }
        this.r = 20;
        this.body = Bodies.circle(x, y, this.r, options);
        this.i = Math.round(random(1,2))
        if (this.i == 1){
          this.image = loadImage("snow4.webp")
        }
        if (this.i == 2){
            this.image = loadImage("snow5.webp")
          }
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,40,40)
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        if (this.body.position.y < -40){
          this.pop
        }
        pop();
    }
}