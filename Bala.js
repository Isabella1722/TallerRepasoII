class Bala{
    constructor(posX,posY,velocidad){
        this.posX=posX;
        this.posY=posY;
        this.velocidad=velocidad;
    }

	 dibujarBala() {
  fill(0,255,0);
ellipse(this.posX, this.posY+=this.velocidad, 10, 10);
}
}