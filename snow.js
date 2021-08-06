class Snow{
 constructor(x,y,r){
     var options={
         "friction":0.9
     }
     this.body=Bodies.circle(x,y,r,options)
     this.image=loadImage("snow5.webp")
     this.r=r

     World.add(world,this.body)
 }
 display(){
  push()
  imageMode(CENTER)
  image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
  pop()

 }
 changePosition(){
     if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,50)})
     }
 }


}