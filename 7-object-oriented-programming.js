// 1-Create a Basic JavaScript Object
let dog = {
    name: "Bobi",
    numLegs: 4
};

console.log(dog)

// 2-Use Dot Notation to Access the Properties of an Object
let dog1 = {
    name: "Spot",
    numLegs: 4
};
// Only change code below this line
console.log(dog1.name, dog1.numLegs)

// 3-Create a Method on an Object
let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + dog2.numLegs + " legs." }
};

dog2.sayLegs();

console.log(dog2.sayLegs())

// 4-Make Code More Reusable with the this Keyword
let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog3.sayLegs();

console.log(dog3.sayLegs())

// 5-Define a Constructor Function
function Dog() {
    this.name = "Bobi";
    this.color = "Black";
    this.numLegs = 4;
}

console.log(Dog())

// 6-Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();
hound.dog = "lavrador";

console.log(new Dog)
console.log(hound)

// 7-Extend Constructors to Receive Arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Bobi", "black");

console.log(new Dog("Bobi", "black"))

// 8-Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
// Only change code below this line
let myHouse = new House(5);
myHouse instanceof House;

console.log(myHouse)

// 9-Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps)

// 10-Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");

console.log(beagle)

// 11-Iterate Over All Properties
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle1 = new Dog("Snoopy");

let ownProps1 = [];
let prototypeProps = [];
// Only change code below this line
for (let property in beagle1) {
    if (beagle1.hasOwnProperty(property)) {
        ownProps1.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps1)
console.log(prototypeProps)

// 12-Understand the Constructor Property
function Dog(name) {
    this.name = name;
}
// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

console.log()

// 13-Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

console.log()

// 14-Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
    this.name = name;
}
// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

console.log()

// 15-Understand Where an Object’s Prototype Comes From
function Dog(name) {
    this.name = name;
}

let beagle2 = new Dog("Snoopy");
// Only change code below this line
Dog.prototype.isPrototypeOf(beagle2);

console.log(beagle2)

// 16-Understand the Prototype Chain
function Dog(name) {
    this.name = name;
}

let beagle3 = new Dog("Snoopy"); // yields true

Dog.prototype.isPrototypeOf(beagle3);  // yields true
// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

console.log(Object.prototype.isPrototypeOf(Dog.prototype))
console.log(Dog.prototype.isPrototypeOf(beagle3))

// 17-Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

console.log()

// 18-Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};
// Only change code below this line
let duck = Object.create(Animal.prototype); // Change this line
let beagle4 = Object.create(Animal.prototype); // Change this line

console.log(duck)
console.log(beagle4)

// 19-Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle5 = new Dog();


console.log(Dog.prototype)

// 20-Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line
let duck1 = new Bird();
Bird.prototype.constructor = Bird;
duck1.constructor
let beagle6 = new Dog();
Dog.prototype.constructor = Dog;
beagle6.constructor

console.log(duck1)
console.log(beagle6)

// 21-Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!");
};
// Only change code above this line
let beagle7 = new Dog();

console.log(beagle7)

// 22-Override Inherited Methods
function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Only change code below this line
Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
};
// Only change code above this line
let penguin = new Penguin();
console.log(penguin.fly());

// 23-Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};
// Only change code below this line
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("Gliding");
    }
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

// 24-Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    this.weight = 15;

    this.getWeight = function () {
        return weight;
    };
}

console.log()

// 25-Understand the Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
  })();  

console.log()

// 26-Use an IIFE to Create a Module
let isCuteMixin = function (obj) {
    obj.isCute = function () {
        return true;
    };
};
let singMixin = function (obj) {
    obj.sing = function () {
        console.log("Singing to an awesome tune");
    };
};

let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();

console.log()