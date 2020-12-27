class Log{

    constructor(x,y, height, angle){
 
        var logOptions ={
            
            restitution : 0.8,
            friction : 1.5,
            density : 0.8,

        }

        this.body = Bodies.rectangle(x,y, 20 , height ,logOptions);

        this.width = 20;
        this.height = height;

        Matter.Body.setAngle(this.body, angle);

        World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill('brown');
        strokeWeight(4);
        stroke('pink');
        rect(0, 0, this.width, this.height);
        pop();
      }

}