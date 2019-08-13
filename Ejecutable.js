
 let enemigos;
let balas;
let  personaje;
 function setup(){
  enemigos= [];
  balas= [];
  createCanvas(500,500);
  personaje=new Personaje (250,400);
  

 }
 function draw(){
    background(0);
    for(let i = 0; i<balas.length;i++){
       let b = balas[i];
       // balas.push(i);
        b.dibujarBala();
       // let bala1 = new Bala(personaje.posX,personaje.posY);
        //bala1.push(b);
  if (b.posY<0){

balas.splice(i,1);

  }
    }

    for(let i = 0; i<enemigos.length;i++){
      let e = enemigos[i];
  
      dibujarEnemigo(e);
      e.moverEnemigo();
  
  }


  if (frameCount%180==0){
    enemigos.push(new EnemigoUno(50,28,255,0,0,50,50,1,0.5));
    enemigos.push(new EnemigoUno(150,28,255,0,0,50,50,1,0.5));
    enemigos.push(new EnemigoUno(250,28,255,0,0,50,50,1,0.5));
    enemigos.push(new EnemigoUno(350,28,255,0,0,50,50,1,0.5));
    enemigos.push(new EnemigoUno(450,28,255,0,0,50,50,1,0.5));

  }
  personaje.dibujarPersonaje();
   }

   function  mousePressed (){

  console.log(mouseX + " " + mouseY + "\n");
}


   function keyPressed(){
    switch (keyCode) {
      
		case RIGHT_ARROW:
  
        
            personaje.setPosX(personaje.getPosX()+10);
      
 
		break;
		
		
		case LEFT_ARROW :
         //   console.log("Izq");
            personaje.setPosX(personaje.getPosX()-10);
            //personaje.posX=-10;
            break;
 

        }
        
if (keyCode==32){
  console.log("espacio");
  balas.push(new Bala(personaje.posX,personaje.posY,-20));

}
   }
       
  
  function dibujarEnemigo(e){
  

      if(e instanceof EnemigoUno){
        fill(e.r,e.g,e.b);
       ellipse(e.posX, e.posY,e.ancho, e.alto);
     
    } if(e instanceof EnemigoDos){
     fill(e.r,e.g,e.b);
     rect(e.posX, e.posY,e.ancho, e.alto);

    
    }
    
  


  }
  
   
   
  



