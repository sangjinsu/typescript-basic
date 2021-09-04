enum Sex {
  M = 1,
  W = 0,
}

interface User {
  name: string
  age: number
  sex: Sex
}

// 변수
const jinsu: User = {
  name: 'jinsu',
  age: 27,
  sex: Sex.M,
}

// 함수
function getUser(user: User): void {
  console.log(user)
}

// 함수 스펙
interface SumFunc {
  (a: number, b: number): number
}

const sum1: SumFunc = (a: number, b: number) => {
  return a + b
}

// 인덱싱
interface StringArr {
  [idx: number]: string
}

const arr: StringArr = ['a', 'b', 'c']

// 딕셔너리
interface StringDict {
  [key: string]: string
}

const obj: StringDict = {
  greeting: 'hello',
}

// 인터페이스 상속
interface Animal {
  name: string
  age: number
  sex: Sex
}

interface Dog extends Animal {
  barking(): void
}

const dog: Dog = {
  barking(): void {
    console.log('멍멍')
  },
  name: '',
  age: 0,
  sex: Sex.M,
}
