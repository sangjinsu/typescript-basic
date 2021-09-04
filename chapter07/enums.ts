// 숫자형 enum
enum Shoes {
  Nike,
  Adidas,
  Fila,
  NewBalance = 10,
}

const mySheos = Shoes.Nike // 0
Shoes.NewBalance // 10

// 문장형 enum
enum Car {
  Audi = 'Audi',
  Honda = 'Honda',
  Kia = 'Kia',
}

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
