/*class Lift {
  constructor(state=0){
    this.state = state;
    this.damnFloor = 13; 
  }

  goTo(floor){

    if (floor>this.state){

        for  (let i=0 ;  i<floor ; i++){
          this.state+=1;
          console.log(`has subido a la planta ${this.state} alive`)
        }
    } 
    
    if (floor<this.state){

        for (let i=this.state ; i>floor ;  i--){
          this.state=i;
          console.log(`has bajado a la planta ${this.state} alive`)
        }

    }
  }
}
*/

class Lift{
  constructor(state=0){
    this.state = state;
    this.damnFloor = 13; 
  }

  goTo(floor){

    try{

      if (this.state==this.damnFloor) throw 'estás muerto'

      if (floor>this.state){
        for  (let i=this.state ;  i<floor ; i++){
        this.state+=1;
        if (i==this.damnFloor) throw 'estás muerto'
        console.log(`has subido a la planta ${this.state} alive`)
        }
      } 
  
      if (floor<this.state){
        for (let i=this.state ; i>floor ;  i--){
        this.state=i;
        if (i==this.damnFloor) throw 'estás muerto'
        console.log(`has bajado a la planta ${this.state} alive`)
        }
      }
    } catch( err ) {
      console.log(err)

    } 
       
  }

}

let myLift = new Lift();

