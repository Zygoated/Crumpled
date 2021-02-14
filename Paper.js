class Paper{
    constructor(x,y){
        var options ={
            isStatic:false,
            'restitution':0.3,        
            'friction':0.5,
            'desnsity':1.2
        }
        this.body=Matter.Bodies.circle(x,y,10,options);
        this.width=40;
        this.height=40;
        this.image=loadImage("sprites/paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.wdith,this.height);
        pop();
    }


}