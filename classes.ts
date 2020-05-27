/**
 * @Class_definition
 */

class Person {
  // here public is the default
  firstName: string

  // this property will be available locally and in classes that inherit from this class
  protected age: number

  // this will only be available locally in this class
  private sexualOrientation: string

  protected whatClass = 'Person class'

  constructor(
    firstName: string,
    public lastName: string, // init property right here
    age: number,
    sexualOrientation: string
  ) {
    this.age = age
    this.firstName = firstName
    this.lastName = lastName
    this.sexualOrientation = sexualOrientation
  }

  getAge() {
    return this.age
  }

  // this method is only available locally inside of the class

  private getSexualOrient() {
    return this.sexualOrientation
  }

  getPrivateInfo() {
    return { sexualOrientation: this.getSexualOrient() }
  }
}

/**
 * @inheritance
 * the inherited class gets all the attributes from the parent class
 */

class Student extends Person {
  // here we are over-writing this property from the paretn class

  whatClass = 'Student class'

  // here i do not have to define the properties again that are in the parent class

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    sexualOritentation: string,
    protected grade: string
  ) {
    super(firstName, lastName, age, sexualOritentation)
    this.grade = grade
  }

  private getGrade() {
    return this.grade
  }

  // we can add more funcionality to the base function or totally replace it

  getPrivateInfo() {
    console.log('returning private info from student class')
    return { grade: this.getGrade(), ...super.getPrivateInfo() }
  }

  /** @getter this will be available as a data attribute (property) **/

  get gradeGetter() {
    return this.grade
  }

  /** @setter this also will be available as a data attribute (property) **/

  set gradeSetter(value: string) {
    this.grade = value
  }
}

// init

const firstStudent = new Student('muhamed', 'gaber', 24, 'strait', 'finished')

// console.log(firstStudent.getPrivateInfo())
// console.log(firstStudent.gradeGetter)
// firstStudent.gradeSetter = 'not finished'
// console.log(firstStudent)

/**
 * @static_methods
 * those can be accesible without init the class
 */

class CircleHelpers {
  static PI = 3.1415

  static calcCircum(diameter: number): number {
    return Number.parseFloat((diameter * this.PI).toFixed(5))
  }
}

// console.log(CircleHelpers.PI, CircleHelpers.calcCircum(10))

/**
 * @abstract_classes
 * those can not be init, only inhirited, useful as a base class
 * or for defining how things should look like, etc.
 * define the signature of a mehtod and so on
 */

abstract class Project {
  abstract baseProperty: string

  abstract baseFunctionality(value: number): number
}

class ExtendProject extends Project {
  // without init this property and this function we will have an error
  // because the class does not look like it's abstract parent class

  baseProperty = 'a base property'

  baseFunctionality(value: number) {
    return value * 2
  }
}

/**
 * @private_constructor
 * making the constructor private will make the class uninit
 * this mightbe needed if we want the class to only be init
 * once using a static method inside of the class
 *
 * @readonly_properties
 * we can set a property private and make a getter or just by adding
 * readonly to it we only can read the property not change it
 */

class OnlyOneInit {
  private static instance: OnlyOneInit

  public readonly place: string

  private constructor(public name: string, place: string = 'only place') {
    this.place = place
  }

  static createInstance() {
    if (!OnlyOneInit.instance) {
      OnlyOneInit.instance = new OnlyOneInit('The Only One')
    }

    return OnlyOneInit.instance
  }
}

// const wrongInit = new OnlyOneInit() // this will give an error
// rightInit.place = 'another place' // will give an error

const rightInit = OnlyOneInit.createInstance() // the only way

//

/**
 * @constructor_function
 * when we init a class there are two things happening
 * 1- tye representing the instance of the class
 * 2- the constructor function
 */

class Greeter {
  greeting: string

  static standardGreeting = 'Hello there'

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return `Hello ${this.greeting}`
  }

  anotherGreet() {
    return Greeter.standardGreeting
  }
}

let greeterInstance: Greeter
greeterInstance = new Greeter('world')

// the javascript code created

// let GreeterClass = (function () {
//   function Greeter(message: string) {
//     this.greeting = message
//   }

//   Greeter.prototype.greet = function () {
//     return `Hello ${this.greeting}`
//   }

//   return Greeter
// })()

/**
 * @typeof_class
 */

let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hi there'

const anotherGreeter = new greeterMaker('whatever')
// console.log(anotherGreeter.anotherGreet())

/**
 * @classes_as_interfaces
 * because classes create types, a way of representation
 * so they can be used with interfaces
 */

class Point {
  x: string | undefined // or undefined because they are not
  y: string | undefined // used and also no constructor
}

interface Point3D extends Point {
  z: string
}
