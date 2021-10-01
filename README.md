# 타입스크립트 입문 - 기초부터 실전까지

- 인프런 강의: 타입스크립트 입문 - 기초부터 실전까지
- 참조:
  - Do it 타입스크립트 프로그래밍
  - (인사이트) 타입스크립트 프로그밍

| Date       | Content                     | Link                                                                                                                                                                          |
| ---------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2021.08.29 | 타입스크립트 기본 타입 선언 | [go](https://github.com/jinsuSang/typescript-basic#chapter03-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EB%B3%B8-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8) |
| 2021.08.29 | 타입스크립트 시작하기       |                                                                                                                                                                               |
| 2021.08.29 | 타입스크립트 소개와 배경    |                                                                                                                                                                               |

## chapter01 타입스크립트 소개와 배경

### 타입스크립트 소개

- 타입스크립트는 자바스크립트에 타입 시스템을 도입한 언어로 실행을 위해서는 자바스크립트로의 트랜스파일링 작업이 필요하다
- 타입스크립트가 필요한 이유는 자바스크립트로 작성시 실행 후에 결과를 확인할 수 있다는 단점을 보완하기 위함이다. 에러 상황이 발생할 가능성을 낮추어 준다.

  1. 에러의 사전 방지: 오탈자가 발생할시 코드상에서 빨간줄로 표시가 된다
  2. 코드 자동 완성 및 가이드 : 묵시적 형변환으로 인한 문제를 방지하고 함수 파라미터 타입을 설정하여 문제를 방지할 수 있다. 또한 타입이 정해짐으로 해당 타입의 내부 메소드를 바로 가이드 해준다.

- 자바스크립트를 타입스크립트와 같이 사용하는 방법은 Jsdoc을 최대한 활용하는 방법이다. 하지만 타입스크립트를 사용하는 편이 더 가독성이 높게 적용된다

  ```js
  // @ts-check 는 타입을 확인해 주는 역할을 한다
  ```

## Chapter02 타입스크립트 시작하기

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

## Chapter05 인터페이스

- 인터페이스의 활용

  1. 변수 타입

     ```typescript
     const jinsu: User = {
       name: 'jinsu',
       age: 27,
       sex: Sex.M,
     }
     ```

  2. 함수 인자 혹은 반환값

     ```typescript
     function getUser(user: User): void {
       console.log(user)
     }
     ```

  3. 인덱싱과 딕셔너리

     ```typescript
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
     ```

  4. 인터페이스 상속

     ```typescript
     interface Animal {
       name: string
       age: number
       sex: Sex
     }
     
     interface Dog extends Animal {
       barking(): void
     }
     ```

## Chapter06 타입

- 타입 별칭과 인터페이스의 차이
  - 타입 별칭 : 타입 생성이 아니라 타입을 정의하는 것
  - 차이점: 타입의 확장이 가능한가? 인터페이스는 확장이 가능한 반면 타입 별칭은 불가능하다. 

- 유니온 타입

  - 타입을 추론하고 그에 해당하는 타입의 내장 함수를 사용할 수 있다

  - 공통 속성만 접근이 가능하다

    ```typescript
    function logMessage(value: string | number) {
      if (typeof value === 'string') {
        value.toString()
      }
    
      if (typeof value === 'number') {
        value.toLocaleString()
      }
    }
    ```

- 인터섹션 타입 

  - 인터섹션 타입의 조건을 만족하는 모든 속성 사용한다 

    ```typescript
    type Developer = {
      name: string
      language: string
    }
    
    type Human = {
      name: string
      age: number
    }
    
    function askSomeone2(someone: Developer & Person) {
      console.log(someone.age)
      console.log(someone.language)
      console.log(someone.name)
    }
    ```

    

## Chapter07 Enum

- 숫자형

  ```typescript
  enum Shoes {
    Nike,
    Adidas,
    Fila,
    NewBalance = 10,
  }
  ```

- 문자형

  ```typescript
  enum Answer {
    Yes = 'Yes',
    No = 'No',
  }
  ```

  

  
