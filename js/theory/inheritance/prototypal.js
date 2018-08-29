// classical - OOP

function Human(name, surname) {
    this.name = name;
    this.surname = surname;
}

Human.prototype.getGreetings = function () {
    console.log("I am Human. My name is:", this.name + " " + this.surname)
};

function Robot(name, model) {
    this.name = name;
    this.model = model;
}

Robot.prototype.getModel = function () {
    console.log("I am Robot. My model is:", this.model)
}

function Posthuman(superPowers) {
    this.superPowers = superPowers;
    Human.apply(this, arguments);
}

Posthuman.prototype = Object.create(Human.prototype);
Posthuman.prototype.getSuperPowers = function () {
    console.log("I have super powers: ", this.superPowers)
}

Posthuman.prototype.getGreetings = function () {
    console.log("I am PostHuman. My name is:", this.name + " " + this.surname)
}

function Cyborg() {
    Human.apply(this, arguments);
    Robot.apply(this, arguments);
}

Cyborg.prototype = Object.assign({}, Human.prototype, Robot.prototype);



const peter = new Posthuman("Peter", "Johnson");
peter.getGreetings();
peter.superPowers = 'travel in time';
peter.getSuperPowers();

const kate = new Cyborg('Kate', 'XD12387');

kate.getGreetings();
kate.getModel();