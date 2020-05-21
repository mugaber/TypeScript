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
aNumber = null
aNumber = undefined

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
 */

let anObject: object = {}
let aFunction: object = () => {}

/**
 * @TypeAssertion
 * when you know the type more than the compiler
 */

let someValue: any = 'here is a value'
let someLength: number = (<string>someValue).length
someLength = (someValue as string).length
