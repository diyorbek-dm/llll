let a = +prompt('Введите число (1): ')
let b = +prompt('Введите число (2): ')
let d = +prompt('Введите число (3): ')

if(a < b && a > d || a > b && a < d) {
  alert('Среднее число из выражения: ' + a)
} else if(b < a && b > d || b > a && b < d) {
  alert('Среднее число из выражения: ' + b)
} else if(d > a && d < b || d < a && d > b) {
  alert('Среднее число из выражения: ' + d)
} else {
  alert('Ошибка!')
}
