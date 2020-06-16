//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...

class WhyClass {
    constructor(purpose, parts) {
      this.purpose = purpose
      this.parts = parts
    }
    explain() {
      console.log(this.purpose)
    }
    pieces() {
      console.log(this.parts)
    }
  }
  
  const why = new WhyClass("Classes are used in OOP to provide a blueprint for creating objects as well as initial values for state and implementations of behavior.", ["Class Name", "Constructor", "Properties", "Methods"]);
  why.explain()
  why.pieces()


/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


//your code here...

class Wildlife {
    constructor(type, legs, tails, actions) {
      this.type = type
      this.legs = legs
      this.tails = tails
      this.actions = actions
    }
    showActions() {
      console.log("This " + this.type + " can " + this.actions[0] + " and " + this.actions[1]);
    }
  }
  
  const capybara = new Wildlife("mammal", 4, 1, ["graze", "burrow"])
  capybara.showActions()
  const dolphin = new Wildlife("mammal", 0, 1, ["swim", "eat fish"])
  dolphin.showActions()
  const armadillo = new Wildlife("mammal", 4, 1, ["dig", "scuttle"])
  armadillo.showActions()
  const jaguar = new Wildlife("mammal", 4, 1, ["run", "hunt"])
  jaguar.showActions()
  const macaw = new Wildlife("bird", 2, 1, ["fly", "caw"])
  macaw.showActions()
  const anaconda = new Wildlife("reptile", 0, 1, ["hiss", "slither"])
  anaconda.showActions()


/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
    //can pass in 0 to 3 arguments
    constructor(name, sides, {length = 0, width = 0, radius = 0} = {}) {
      this.name = name
      this.sides = sides
      
      if(this.sides.length) {
        this.base = this.sides[0]
        let s = ((this.sides[0] + this.sides[1] + this.sides[2]) / 2)
        let part2 = Math.abs(s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2]))
        this.height = (2 / this.sides[0]) * Math.sqrt(part2)
      } else if(this.sides == 4) {
        this.length = length
        this.width = width
      } else if(this.sides == 1) {
        this.radius = radius
      } else {
        console.log("Unsupported shape!")
        return null
      }
    }
   
    calcArea() {
      if(this.sides.length) {
        console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`)
      } else if(this.sides == 4) {
        console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
      } else if(this.sides == 1) {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
      }
    }
    calcPerimeter() {
      if(this.sides.length) {
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
      } else if (this.sides == 4) {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width) }`)
      } else if (this.sides == 1) {
        console.log("Invalid method for this shape!")
      }
    }
    calcCircumference() {
      if(this.sides.length || this.sides == 4) {
        console.log("Invalid method for this shape!")
      } else {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
      }
    }
  }
  let triangle = new Shape("triangle", [4, 7, 7])
  let circle = new Shape("circle", 1, {radius: 5})
  let rect = new Shape("rectangle", 4, {length: 5, width: 4})


const triangle = {
    name : "triangle",
    sides : [4,7,7], //lengths of each side
    base : null,
    height : null, //determine this height using basic geometry.  You may need to research this one.
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
    },
    calcPerimeter : function() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
    }
}

triangle.base = triangle.sides[0];  //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = {
    name : "rectangle",
    sides : 4,
    length : 2,
    width : 5,
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
    },
    calcPerimeter : function() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width) }`)
    }
}

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = {
    name : "circle",
    sides : 1,
    radius : 5,
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
    },
    calcCircumference : function() {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

console.log(circle);
circle.calcCircumference();
circle.calcArea();


/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

// class Earth {
//     name;
//     planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

//     constructor(name,num) {
//         this.name = name;
//         this.planetNum = num;
//     }

// }

// const earth = new Earth('earth',3);
// console.log(earth);


class Earth {
    static name = "Earth"
    static num = 3
  }
console.log(Earth.name);
console.log(Earth.num);





