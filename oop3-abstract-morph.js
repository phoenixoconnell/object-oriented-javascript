
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature { //abstract
    constructor() {
        if(this.constructor == Creature) {
            throw new Error("Unable to instantiate Abstract class Creature");
        }
    }
  move(x, y) {
    throw new Error('Cannot use Abstract method "move" from subclass');
  }
  act(action) {
    throw new Error('Cannot use Abstract method "act" from subclass');
  }
}

// const creature  = new Creature();
// console.log(creature.move());


class Human extends Creature {
  name;
  gender;
  x;
  y;

  constructor(name, gender, x, y) {
    super()
    this.name = name
    this.gender = gender
    this.x = x
    this.y = y
  }
  move(x, y) {
    console.log(`${this.name} is moving to coordinates ${this.x}, ${this.y}.`);
  }
  act(action) {
    console.log(`${this.name} is ${action}.`);
  }
  writeCode() {
    console.log("Eat, sleep, code, repeat.");
  }
}

const john = new Human("John", "male", 18, 101);
john.move();
john.act("running");
john.writeCode();

class Cat extends Creature {
  whiskers;
  color;
  x;
  y;
  
  constructor(whiskers, color, x, y) {
    super()
    this.whiskers = whiskers
    this.color = color
    this.x = x
    this.y = y
  }
  move(x, y) {
    console.log(`The ${this.color} cat is moving to coordinates ${this.x}, ${this.y}.`);
  }
  act(action) {
    console.log(`The ${this.color} cat is ${action}.`);    
  }
  meow() {
    console.log("Meow meow meow");
  }
}

const bughuul = new Cat(20, "black", 31, 80);
bughuul.move();
bughuul.act("scratching");
bughuul.meow();

class Dog extends Creature {
  legs;
  tails;
  x;
  y;
  
  constructor(legs, tails, x, y) {
    super()
    this.legs = legs
    this.tails = tails
    this.x = x
    this.y = y
  }  
  move(x, y) {
    console.log(`The dog with ${this.legs} legs is moving to coordinates ${this.x}, ${this.y}.`);
  }
  act(action) {
    console.log(`The dog with ${this.tails} tail is ${action}.`);
  }
  bark() {
    console.log("Woof woof");
  }
}

const samara = new Dog(3, 1, 61, 19);
samara.move();
samara.act("jumping");
samara.bark();



/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;
  
    constructor(name) {
      this.name = name
    }
    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
    code() {
        console.log(this.name + " is coding");
    }
    repeat() {
        console.log(this.name + " is repeating the above steps, yet another time");
    }
    explain() {
        console.log("In order to get the correct functions to work, I added a constructor for subclass calls to super and changed the class method declarations to allow for references to 'this' and ensure correct subclass firing order.");
    }
  }
    
  class Teacher extends Person {
      constructor(name) {
          super(name);
      }
      eat() {
          console.log(this.name + " loves to teach before eating");
      }
      sleep() {
          console.log(this.name + " sleeps after preparing the lesson plan");
      }
      code() {
          console.log(this.name + " codes first, then teaches it the next day.");
      }
      repeat() {
          console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
      }
  } 
  
  class Student extends Person {
      constructor(name) {
          super(name);
      }
      eat() {
        console.log(this.name + " studies, then eats");
      }
      sleep() {
        console.log(this.name + " studies coding so much, that they dream about it in their sleep");
      }
      code() {
        console.log(this.name + " was first overwhelmed by coding, but kept at it, and now has become a coding guru!")
      }
      repeat() {
        console.log(this.name + " keeps on studying, coding, eating, and sleeping, and puts it all on repeat.")
      }
  }
  
  
  const teacher = new Teacher("Dr. Teacher");
  
  teacher.explain();
  
  const student = new Student("Pupil Student");
  
  student.explain();
  
  teacher.eat();
  teacher.sleep();
  teacher.code();
  teacher.repeat();
  
  student.eat();
  student.sleep();
  student.code();
  student.repeat();




//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare = function(food1,food2,food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    }
    prepare() {
        console.log('The cook is cooking');
    }
    explain = () => {
        console.log("In order to print out the food items that are being passed in, I had to change the first prepare method to a regular function in order for it to take precedence over the second prepare method which I changed to a standard method. The regular function takes precedence because it is a class field.");
    }
  }
  
  const cook = new Cook();
  
  cook.prepare("turkey","salami","pizza");
  
  cook.explain();

