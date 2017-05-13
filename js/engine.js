function Vector(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.changeVector = function(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    };

    this.addVector = function(vector2){
        this.x = this.x + vector2.x;
        this.y = this.y + vector2.y;
        this.z = this.z + vector2.z;
    };
}
