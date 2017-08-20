var particle;
var particlesys;


function setup() {
  createCanvas(600,600);
    particlesys = new ParticleSystem(createVector(33,33));
}


function draw(){
    background(33);
    fill(230);
    // textMode(CENTER);
    // particlesys.run();
      for(var i = 0; i<2;i++){
    particlesys.addParticle();
  }
    particlesys.run():
    text("Dont worry...",width/2,height/2-50);

    text("I hate myself too.",width/2,height/2);

}


console.log('hel')
  var Particle = function(pos){
    // console.log('sup')
    // var r = int(random(0,txt.length));
    // // console.log(r)
    // var rr = txt[r];
    var r = random(txt);
    this.pos = createVector(r.x,r.y)
    this.acc = createVector(0,0);
    this.vel = createVector(random(-0.5,1),random(-0.5,1));
    this.lifespan =255;


  }
  Particle.prototype.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifespan -=30;

  }

  Particle.prototype.display = function(){
    stroke(0,this.lifespan);
    strokeWeight(1);
    point(this.pos.x,this.pos.y);
  }

  Particle.prototype.isDead = function(){
    if(this.lifespan <0.0){
      return true;
    } else {
      false;
    }
  }


  Particle.prototype.run = function(){
    this.update();
    this.display();
  }

  Particle.prototype.applyForce = function(force){
    // this.force = force.copy();
    this.acc.add(force);

  }

  var ParticleSystem = function(pos){
    this.origin = pos.copy();
    this.system = [];
    }

    ParticleSystem.prototype.addParticle = function(){
      for (var i =0;i<10;i++){
      this.system.push(new Particle(this.origin));
}

    }

    ParticleSystem.prototype.run = function() {
      for(var i = this.particles.length -1; i>=0 ; i++){
        for(var x=0; x<5;x++){
          this.particles.push(new Particle)
        }
      }
    }

    ParticleSystem.prototype.run = function(){
      for(var i = this.system.length-1; i >= 0; i--){
        var p = this.system[i];
        p.run();
        if(p.isDead()){
          this.system.slice(i,1);
        }
      }
    }
    ParticleSystem.prototype.applyForce = function(force){
      this.force = force.copy();
      for(var i =0; i<this.system.length;i++){
        this.system[i].applyForce(this.force);
      }
    }
