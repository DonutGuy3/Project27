class Rope{
    constructor(body, body2, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
       var options = {
           bodyA: body1, 
           bodyB: body2,
           ponitB:{x:this.offsetX, y:this.offsetY}
       }
       this.rope = Constraint.create(options);
       World.add(world, this.rope);
    }
    display(){
   var pointA = this.rope.bodyA.position;
   var pointB = this.rope.bodyB.position;
   strokeWeight(4);
   line(pointA.x, pointA.y, pointB.x, pointB.y)
    }

    rope1 = new this.rope(bobObject.body,roofObject.body,-bobDiameter*2, 0)
    rope2 = new this.rope(bobObject.body,roofObject.body,-bobDiameter*2, 200)
    rope3 = new this.rope(bobObject.body,roofObject.body,-bobDiameter*2, 400)
    rope4 = new this.rope(bobObject.body,roofObject.body,-bobDiameter*2, 600)
    rope5 = new this.rope(bobObject.body,roofObject.body,-bobDiameter*2, 800)
    
   }