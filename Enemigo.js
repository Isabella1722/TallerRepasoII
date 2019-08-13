 class Enemigo {
constructor (posX,posY,r,g,b,ancho,alto,resistencia,velocidad){

    this.posX=posX;
    this.posY=posY
    this.r=r;
    this.g=g;
    this.b=b;
    this.ancho=ancho;
    this.alto=alto;
    this.resitencia=resistencia;
    this.velocidad=velocidad;



}
//dibujarEnemigo(){
 //   fill(255,0,0);
   
 //   ellipse(this.posX,this.posY, r,g,b,50, 50,1);

//}
moverEnemigo(){
    this.posY+=this.velocidad;
}
   

}




