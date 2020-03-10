class Lift {
  constructor(state=0){
    this.state = state;
    this.damnFloor = 13; 
  }

  goTo(floor){
    
    if (floor>this.state){

        for  (let i=0 ;  i<floor ; i++){
          this.state+=1;
          console.log(`has subido a la planta ${this.state}`)
        }
    } 
    
    if (floor<this.state){

        for (let i=this.state ; i>floor ;  i--){
          this.state=i;
          console.log(`has bajado a la planta ${this.state}`)
        }
    }

  }
}

let myLift = new Lift();

