//ENUMS
var shipType = {
    STARTER: "Starter Ship"
};

var asteroidType = {
    SMALL: "Small Asteroid",
    MEDIUM: "Medium Asteroid",
    LARGE: "Large Asteroid"
};

//CLASSES
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

function Player(posX, posY, posZ, rotX, rotY, rotZ, momX, momY, momZ) {
    this.position = new Vector(posX, posY, posZ);
    this.rotation = new Vector(rotX, rotY, rotZ);
    this.momentum = new Vector(momX, momY, momZ);

    this.shipType = shipType.STARTER;

    this.bullets = [];

    this.resPoints = 0;
}

function Asteroid(posX, posY, posZ, rotX, rotY, rotZ, momX, momY, momZ) {
    this.position = new Vector(posX, posY, posZ);
    this.rotation = new Vector(rotX, rotY, rotZ);
    this.momentum = new Vector(momX, momY, momZ);

    this.asteroidType = asteroidType.SMALL;

    //ore implementation
}
