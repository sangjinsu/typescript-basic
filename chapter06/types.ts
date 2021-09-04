type Person = {
  name: string
  age: number
}

const p1: Person = {
  name: 'jinsu',
  age: 27,
}

// 타입 별칭과 인터페이스 차이
// 타입 별칭 : 타입 생성이 아니라 타입을 정의 하는 것
// 차이점 : 타입의 확장이 가능한가? 인터페이스는 확장이 가능한 반면 타입 별칭은 불가능하다

// 유니온 타입
// 타입을 추론하고 그에 해당하는 타입의 내장 함수를 사용할 수 있다
function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toString()
  }

  if (typeof value === 'number') {
    value.toLocaleString()
  }
}

// 유니온 타입 특징
// 공통 속성만 접근이 가능하다

type Developer = {
  name: string
  language: string
}

type Human = {
  name: string
  age: number
}

function askSomeone(someone: Developer | Person) {
  console.log(someone.name)
}

// 인터섹션 타입
// 인터섹션 타입의 조건을 모두 만족하는 타입만을 사용한다
function askSomeone2(someone: Developer & Person) {
  console.log(someone.age)
  console.log(someone.language)
  console.log(someone.name)
}
