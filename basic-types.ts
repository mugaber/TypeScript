/**
 * @define a variable type: when you set it to a value
 * the type will be inferred, otherwise using `var : type`
 */

/**
 * @Numbers
 */

let n: number = 5

/**
 * @Boolean
 */

let bool: boolean = true

/**
 * @String
 */

let str: string = 'yeah'

/**
 * @Array
 */

let arr1: number[] = [1, 2, 3, 4]
let arr2: Array<number> = [1, 2, 3, 4]
let arr3: Array<any> = ['1', 2, true]

/**
 * @Tuple
 * when we want an array with specific items and length
 */

let tup: [string, number] = ['number', 2]
// tup = [2, 'number'] // this will give an error
// tup[2] = 'something' // this will give an error

/**
 * @Enum
 * this type is a way of setting friednly names to numeric values
 */

// by default the enumeration will start at 0
enum Colors {
  red, // 0
  green, // 1
  blue // 2
}

// we can change the starting number by setting first enum to diff no
enum Line {
  first = 1, // 1
  second, // 2
  thirs // 3
}

// we can change a value in the middle and will enumerate after
enum Query {
  first, // 1
  second = 10, // 10
  third // 11
}

// we can set all the enums manually
enum Manuall {
  first = 10,
  second = 20,
  third = 100
}

let manuallValue: Manuall = Manuall.first // 10

// we can get the string value
let manuallString: string = Manuall[100] // third

/**
 * @Any
 * when we do not know what will be the type of the var
 * we can opt-out using any, ex working with 3rd party APIs
 */

let anyType: any = 'any type'
anyType = 1
anyType = true

/**
 * @Void
 * the absence of any type at all
 * it's usefull in functions that return nothing
 */

const returnNothing = (): void => {}

/**
 * @Null && @Undefined
 * be default they are subtypes of all other types
 * when @strictNullChecks flag is on they are only
 * assignable to any and their types
 */

let aNumber = 5
// aNumber = null
// aNumber = undefined

/**
 * @Never
 * this used with functions that will never hault
 * by throwing an error or infine loop
 */

const throwsError = (message: string): never => {
  throw new Error(message)
}

const inifineLoop = (): never => {
  while (true) {}
}

/**
 * @Object
 * type that represents any non-premitive type
 * here after defining an object if we like to change
 * it's values we have to stick with the same keys
 * because without making an object definitions it
 * happens behind the scenes
 */

let anObject: object = {}
let aFunction: object = () => {}

let person = {
  name: 'muhammed',
  age: 24
}

// here is the object definition that will happen
let personDefinition: { name: string; age: number }

// this will give an error
// person = {college: 'MIT', country: 'USA'}

//====================================================================
//                            ADDITIONAL
//====================================================================

/**
 * @Alias
 * instead of useing the same definition of an object in multiple
 * places we can use build an alias an reuse it
 */

type Complex = { entries: number[]; getEntries: (all: number[]) => number[] }

let complexObject: Complex = {
  entries: [],
  getEntries: function () {
    // changed to normal function becasue as an arrow function
    // `this` meant the global this
    return this.entries
  }
}

/**
 * @type_assertion
 * when you know the type more than the compiler
 */

let someValue: any = 'here is a value'
let someLength: number = (<string>someValue).length
someLength = (someValue as string).length

/**
 * @type_union
 * if we have a var that might be one of more than one type
 * we can use | to choose from multiple types (union)
 */

let notSureVar: number | string | null // this var can be any of those types

/**
 * @type_checking
 * when we have a type union or in any other cases we can check the type
 * of the var by using == 'type' (as a string) ex 'number', 'string'
 */

function notSureFunction(param: number | string) {
  if (typeof param == 'number') {
    console.log(`${param} is a number`)
  } else if (typeof param == 'string') {
    console.log(`${param} is a string`)
  }
}

/**
 * @nullable_types
 * in js any var can be assigned to null is lack of value however
 * here we can use the flag `strictNullChecks` to true this will
 * be not allowed any more unless we define a union type
 */

let notNullable = 20
// notNullable = null // error if strictNullChecks is on

let nullable: number | null = 20
nullable = null
