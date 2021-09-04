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
