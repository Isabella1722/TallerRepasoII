
 class Personaje {

constructor(posX, posY){
    this.posY=posY;
    this.posX=posX;

}

 dibujarPersonaje() {
    
    fill(0,0,255);
    rectMode(CENTER);
    rect(this.posX,this.posY, 50, 50);
}


 getPosX() {
    return this.posX;
}

// getPosY() {
 //   return this.posY;
//}


 setPosX(posX) {
   this.posX = posX;
}
//setPosX(posY) {
 //   this.posY = posY;
///}
 }