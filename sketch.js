
let thePic;
let canvas;
let faceArray=[]
let test;

function windowResized(){
  console.log("resized")
  resizeCanvas(windowWidth,windowHeight)
}

function preload(){
  thePic=loadImage("donaghy.png")
}

function setup(){
  canvas=createCanvas(windowWidth,windowHeight)
  canvas.position(0,0)
  canvas.style('z-index',-1)
  test= new Donaghy(thePic)

  for(var i=0;i<3;i++){
    faceArray[i]=new Donaghy(thePic)

  }

}

function draw(){
  background(173,59,44)
  test.display()
  test.move()
  //this is called elktongue
  for(var i=0;i<faceArray.length;i++){
    faceArray[i].display()
    faceArray[i].move()
  }
}

function mousePressed(){
  faceArray.push(new Donaghy(thePic))

}

class Donaghy{
  constructor(pic){
    this.x=random(0,width)
    this.y=random(0,height)
    this.xSpeed=random(-5,5)
    this.ySpeed=random(-5,5)
    this.pic=pic
  }

  display(){
    image(this.pic,this.x,this.y)
  }

  move(){
    this.x+=this.xSpeed
    this.y+=this.ySpeed

    if(this.x>width || this.x<0){
      this.xSpeed*=-1
    }

    if(this.y>height || this.y<0){
      this.ySpeed*=-1
    }
  }
}
