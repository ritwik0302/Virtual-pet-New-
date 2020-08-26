//Create variables here

var dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  happyDog=loadImage("dogImg1.png");
  dog=loadImage("dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();

  foodStock=databse.ref('Food');
  foodStock.on("value",readStock);  
}


function draw() {  
background(46,  139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock (foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here

  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){
database.ref('/').update({
  Food:x
})
  }

}



