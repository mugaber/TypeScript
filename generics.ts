/**
 * @generics
 * are a way of making types flixible, and know the type
 * this gives us the ability to work with multiple types
 * without loosing the flexibility and other features
 */

function withoutGeneric(param: any) {
  return param
}

// here the function does not know the param and the returned value type
withoutGeneric('using any')

function acceptGeneric<T>(param1: T) {
  return param1
}

// here the function know the param and the returned value types
acceptGeneric('using generics')
acceptGeneric<number>(24)

/**
 * @built_in
 */

let numberArrayNormal: number[] = [1, 2, 3]
let numberArrayGeneric: Array<number> = [1, 2, 3]

/**
 * @multiple_types
 */

function knowTheType<T>(args: T[]): void {
  args.forEach(element => console.log(element))
}
