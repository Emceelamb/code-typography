PImage img;
PImage text;
PImage sorted;

PImage original;
//PImage text;
int index = 0;
void setup() {
  size(1600, 500);
  frameRate(20);
  img = loadImage("con2.jpg");
  
  original = loadImage("con2.jpg");
  text = loadImage("con3.png");
  sorted = createImage(img.width, img.height, RGB);

  //sorted = createImage(img.width,img.height,RGB);
  //sorted.loadPixels();
  //for(int i =0; i<sorted.pixels.length; i++){
  //  sorted.pixels[i] = color(random(255),random(255),random(255));
  //}
  //sorted.updatePixels();
  sorted = original.get();
}

void draw() {
  sorted.loadPixels();
  //img.loadPixels();


  for (int x =0; x<sorted.width; x++) {
    float rec = -1;
    int selectPix = index;


    for (int y = index; y <sorted.height; y++) {
      int loc = y * sorted.width +x;
      color pix = sorted.pixels[loc];
      float b = brightness(pix);
      if (b > rec) {
        selectPix = loc;
        rec= b;
      }
    }
    color temp = sorted.pixels[x*sorted.height +index];
    sorted.pixels[x * sorted.height + index] = sorted.pixels[selectPix];
    sorted.pixels[selectPix] = temp;
  }
  if (index <sorted.height-1) {
    index++;
  } 

  sorted.updatePixels();
  
  image(text, 800, 0);
  image(sorted, 800, 0);
  image(text, 800, 0);
}