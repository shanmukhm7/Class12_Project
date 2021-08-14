var garden
var rabbit
var apple
var orangeL
var redL
var gardenImage
var rabbitImage
var carrotImage 
var orangeImage 
var redImage


function preload(){
  gardenImage = loadImage("garden.png")
  rabbitImage = loadImage("rabbit.png")
  appleImage = loadImage("apple.png")
  orangeImage = loadImage("orangeLeaf.png")
  redImage = loadImage("redImage.png")
}



function setup(){
  
  createCanvas(400,400)
garden = createSprite(200,200)
garden.addImage(gardenImage)
//creating rabbit running
rabbit = createSprite(160,340,20,20)
rabbit.scale =0.09
rabbit.addImage(rabbitImage)
}

function draw() {
  background(0)
  

  rabbit.x = World.mouseX
  edges= createEdgeSprites()
  rabbit.collide(edges)
  
   drawSprites()
  
  var sprite_selector = Math.round(random(1,3))

  if (frameCount % 80 == 0) {
    if (sprite_selector == 1) {
      createApples()
    } else if (sprite_selector == 2) {
      createOrange()
    }else {
      createRed()
    }
  }

}

function createApples() {
apple = createSprite(random(50, 350),40, 5, 5)
apple.addImage(appleImage)
apple.lifetime = 150
apple.velocityY = 3
apple.scale=0.05
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 5, 5)
orangeL.addImage(orangeImage)
orangeL.lifetime = 150
orangeL.velocityY = 3
orangeL.scale=0.05
}

function createRed() {
redL = createSprite(random(50, 350),40, 5, 5)
redL.addImage(redImage)
redL.lifetime = 150
redL.velocityY = 3
redL.scale=0.05
  
}