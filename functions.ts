/**
 * @Functions
 * Functions are the fundamental building block of any application
 * in JavaScript. They’re how you build up layers of   abstraction,
 * mimicking classes, information hiding, and modules
 */

function normalFunction() {
  return "yeah i'm normal"
}

const anonymousFunction = function () {
  return 'anonymous'
}

/**
 * @typing the function
 * typing params and returned value
 */

function typedFunction(first: number, second: number): number {
  return first + second
}

/**
 * @typing the function
 * writing how the function is giong to be
 * or @inferring how it should be
 */

const addFunction: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y
}

const inferredFunction: (x: number, y: number) => number = (x, y) => {
  return x + y
}

/**
 * @optional parameters
 * here all params must called with the function no undefined like js
 * however we can make the param optional by putting ? after it
 */

const noOptionalParams = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`
}

const withOptioanlParams = (firstName: string, lastName?: string): string => {
  if (lastName) {
    return `${firstName} ${lastName}`
  }

  return firstName
}

// with default value
const withDefaultParam = (firstName: string, lastName = 'last-name'): string => {
  return `${firstName} ${lastName}`
}

/**
 * @rest_params
 * here we can specify unlimited number of optinal params or none
 */

const withRestParmas = (firstName: string, ...restParams: string[]): string => {
  return `${firstName} ${restParams.join(' ')}`
}
