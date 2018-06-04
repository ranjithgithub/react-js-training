//class
class Point{
    constructor(x,y){
      this.x = x;
      this.y = y;
    }
    display(){
        console.log("X:",this.x, "Y:",this.y);
    }
}

export default Point

//inheritance 
export class Point3D extends Point{
    constructor(x, y, z){
        super(x,y);
        this.z = z;
    }
    display(){
        super.display();
        console.log("z:", this.z, "parent X:", super.x);
    }
}

