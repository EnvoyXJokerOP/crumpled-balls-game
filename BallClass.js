class BallClass{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':99.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
        circle(0,0,this.radius);
        pop();
      }
}
