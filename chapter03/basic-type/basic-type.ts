// 문자열 선언

// 자바스크립트
let str = 'hello'

// 타입스크립트
let str1: string = 'hello'
let str2 = 'hello'
const str3 = 'hello'

let num: number = 10
const num2 = 20

let arr: number[] = [10, 20, 30]
let arr2: Array<number> = [10, 20, 30]
let arr3: string[] = ['hi', 'bye', 'hello']
let arr4: Array<string | number> = ['hello', 26]
let arr5: (string | number)[] = ['hello', 26]

// 튜플
let names: [string, string, string] = ['jinsu', 'wanhee', 'sujin']
let person: [string, number] = ['jinsu', 27]

// object
let obj: object = {}
let human: { name: string; age: number } = {
  name: 'jinsu',
  age: 27,
}

interface Human {
  name: string
  age: number
}

let human2: Human = {
  name: 'jinsu',
  age: 27,
}

// Boolean
let show: boolean = true
