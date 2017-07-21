var particle;
var system;
var wind;
var txt =[];

function preload(){
wind = loadImage('data/wind2.png');

}

function setup() {
  createCanvas(wind.width, wind.height);
  system = new ParticleSystem(createVector(width/2,height/2));

  wind.loadPixels();
  for (var x = 0; x < width; x++){
    for (var y = 0; y < height; y++){
      var b = brightness(wind.get(x, y));
      if(b < 1) {
        txt.push(new p5.Vector(x, y));
      }
    }
  }
  console.log(txt.length)

}


function draw(){
  background(255,0.5);

  //  image(wind,0,0);
  var f = createVector(random(-0,0.5),0);
  system.applyForce(f);
  // for(var i = 0; i<2;i++){
    system.addParticle();
  // }
  system.run();

}
