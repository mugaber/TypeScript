/**
 * @interface
 * role of naming types, defining the shape of values (duck typing)
 * the compiler checks that atleast the properties defined exist
 * and match the type specified
 *
 * interfaces do not get complied, they give in dev and comp errors
 */

// using type checking

function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label)
}

const objWithLabel = { label: 'nice label', another: 'another property' }

printLabel(objWithLabel)

// using an interface

interface LabeledObj {
  label: string
}

function printObjLabel(labeledObj: LabeledObj) {
  console.log(labeledObj.label)
}

// printObjLabel(objWithLabel)

/**
 * @optional_properties
 * properties can be optional by adding ? to it's end
 * this is usefull if not all properties are required
 * also here mistyping will be detected early on
 */

interface SquareConfig {
  width: number
  color?: string
}

function createSquare(square: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: square.width ** 2 }

  if (square.color) {
    newSquare.color = square.color
  }

  return newSquare
}

const myNewSquare = createSquare({ width: 10 })

/**
 * @readonly_properties
 * those properties are only modified when the object created
 */

interface PointNumber {
  readonly x: number
  readonly y: number
}

let pointOne: PointNumber = { x: 10, y: 5 }
//  pointOne.x = 100 // this would give an error

// built-in read only array, any mutating method will be removed

let anArray: number[] = [1, 2, 3, 4, 5]
let readOnlyArray: ReadonlyArray<number> = anArray

/**
 * @unknown_properties
 * we can add an arbitrarily number of properties
 * in [] if we do not know the name in advance
 */

interface WildCard {
  [anyName: string]: any // of specific type if we know in advance
}

const wildObj: WildCard = {
  aProperty: 'whatever',
  anotherOne: 'another one'
}

// console.log(wildObj)

/**
 * @methods
 * we also can define how methods should look like in an interface
 */

interface WithAFunction {
  greet(name: string): string
}

/**
 * @with_classes
 */

class WithInterface implements WithAFunction {
  greet(name: string): string {
    return `Hi ${name}`
  }
}

/**
 * @with_functions
 */

interface DefineFunction {
  (number1: number, number2: number): number
}

let definedFunction: DefineFunction = function (value1: number, value2: number): number {
  return (value1 + value2) * 2
}

/**
 * @excess_property_checks
 * object literals undergo excess property checks meaning
 * that they have to comply with the exacti nterface shape
 *
 * a work around is by using on of the following :
 * 1- type assertion
 * 2- string index signature
 * 3- stroing the obj in a var
 */

interface Normal {
  rate?: number
  normal?: boolean

  // using string index signature
  [anyName: string]: any
}

function acceptNormal(objParam: Normal): Normal {
  return objParam
}

// this will give an error because norm does not exist on the interface
// and if we do not have [anyNam] as a wild property
acceptNormal({ rate: 8, norm: true })

// using type assertion
acceptNormal({ rate: 8, norm: 8 } as Normal)

// storing in an object
const useThisObj = { rate: 8, norm: true }
acceptNormal(useThisObj)

/**
 * @hyprid_types
 */

interface Counter {
  (start: number): number
  interval: number
  reset(): void
}

function counterInit(): Counter {
  let counter = function (start: number) {} as Counter

  counter.interval = 300

  counter.reset = function () {
    counter.interval = 0
  }

  return counter
}
