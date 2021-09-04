# 타입스크립트 입문 - 기초부터 실전까지

- 인프런 강의: 타입스크립트 입문 - 기초부터 실전까지
- 참조:
  - Do it 타입스크립트 프로그래밍
  - (인사이트) 타입스크립트 프로그밍

| Date       | Content                              | Link                                                         |
| ---------- | ------------------------------------ | ------------------------------------------------------------ |
| 2021.09.04 | enum                                 |                                                              |
| 2021.09.04 | 타입 별칭, 연산자를 이용한 타입 정의 |                                                              |
| 2021.09.04 | 인터페이스                           |                                                              |
| 2021.09.04 | 할 일 관리 애플리케이션              |                                                              |
| 2021.08.29 | 타입스크립트 기본 타입 선언          | [go](https://github.com/jinsuSang/typescript-basic#chapter03-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EB%B3%B8-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8) |
| 2021.08.29 | 타입스크립트 시작하기                |                                                              |
| 2021.08.29 | 타입스크립트 소개와 배경             |                                                              |

## chapter01 타입스크립트 소개와 배경

### 타입스크립트 소개

- 타입스크립트는 자바스크립트에 타입 시스템을 도입한 언어로 실행을 위해서는 자바스크립트로의 트랜스파일링 작업이 필요하다 
- 타입스크립트가 필요한 이유는 자바스크립트로 작성시 실행 후에 결과를 확인할 수 있다는 단점을 보완하기 위함이다. 에러 상황이 발생할 가능성을 낮추어 준다.
  1. 에러의 사전 방지: 오탈자가 발생할시 코드상에서 빨간줄로 표시가 된다 
  2. 코드 자동 완성 및 가이드 : 묵시적 형변환으로 인한 문제를 방지하고 함수 파라미터 타입을 설정하여 문제를 방지할 수 있다. 또한 타입이 정해짐으로 해당 타입의 내부 메소드를 바로 가이드 해준다.  

- 자바스크립트를 타입스크립트와 같이 사용하는 방법은  Jsdoc을 최대한 활용하는 방법이다. 하지만 타입스크립트를 사용하는 편이 더 가독성이 높게 적용된다

  ```js
  // @ts-check 는 타입을 확인해 주는 역할을 한다
  ```

##  Chapter02 타입스크립트 시작하기

- 타입스크립트 모듈 설치

  ```bash
  $ npm install typescript -g  
  ```

- 타입스크립트 파일을 자바스크립트 파일로 트랜스파일링 

  - [tsc CLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

  ```bash
  $ tsc [자바스크립트 파일 이름]
  ```

- 타입스크립트 설정 파일
  - [tsconfig.json Reference](https://www.typescriptlang.org/tsconfig)

- babel
  - [바벨 사이트](https://babeljs.io/)

## Chapter03 타입스크립트 기본 타입 선언

- 문자열, 숫자 선언

  ```typescript
  let str1: string = 'hello'
  let str2 = 'hello'
  const str3 = 'hello'
  
  let num: number = 10
  const num2 = 20
  ```

- 배열 선언

  ```typescript
  let arr: number[] = [10, 20, 30]
  let arr2: Array<number> = [10, 20, 30]
  let arr3: string[] = ['hi', 'bye', 'hello']
  let arr4: Array<string | number> = ['hello', 26]
  let arr5: (string | number)[] = ['hello', 26]
  ```

- 객체 선언 

  ```typescript
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
  ```

- 진위값 선언

  ```typescript
  let show: boolean = true
  ```

- 함수 

  - 선언 

  ```typescript
  function sum(a: number, b: number) {
    return a + b
  }
  
  function add(a: number, b: number): number {
    return a + b
  }
  ```

  - 파리미터 개수를 제한한다. 불필요한 인자를 추가하여 넘기는 경우 오류가 발생한다 

  - 옵셔널 파라미터

    ```typescript
    function log(a: string, b?: string) {
      console.log(a, b)
    }
    
    
    log('hi') // "hi" undefined
    log('hi', 'hello') // "hi" "hello"
    ```

## chapter05 인터페이스

```typescript
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
```

- 인터페이스는 상속이 가능하다

## chapter06 타입 별칭, 연산자를 이용한 타입 정의

- 타입 별칭과 인터페이스의 차이점은 확장이다. 타입 별칭은 확장이 불가한 대신 인터페이스는 확장(상속) 이 가능하다

  #### 유니온 타입과 인터섹션 타입

```typescript
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

// 인터섹션 타입
// 인터섹션 타입의 조건을 모두 만족하는 타입만을 사용한다
function askSomeone2(someone: Developer & Person) {
  console.log(someone.age)
  console.log(someone.language)
  console.log(someone.name)
}
```

## chapter07 enum

```typescript
enum Answer {
  Yes = 'Yes',
  No = 'No',
}
function ask(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('correct')
  }
  if (answer === Answer.No) {
    console.log('wrong')
  }
}

ask(Answer.Yes)
```

- `enum` 의 활용 예시 => 인자로서 값의 범위를 제한하는데 사용된다

## chapter08 class

```js
class Person1 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const person1 = new Person1('jinsu', 27)

// prototype 상속
var user = { name: 'jinsu', age: 27 }
var admin = {}
admin.__proto__ = user
admin.role = 'admin'

// prototype new 키워드
function Person2(name, age) {
  this.name = name
  this.age = age
}

var o = new Object()
o.__proto__ = Person2.prototype
Person2.call(o)
```

```typescript
class PersonTS {
  constructor(public name: string, public age: number) {}
}
// 접근자 사용 가능 
```

