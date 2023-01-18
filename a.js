let userName
let userAge
let task1
let task2
let task3
let totalResult

fucnGetUserName(userName)

// Get User Name
function fucnGetUserName() {
  userName = prompt('Введите ваше имя')

  if(userName === '') {
    alert('Пожалуйста, введите ваше имя!')
    return fucnGetUserName()

  } else if(userName?.length < 3) {
    alert('Введите полное имя!')
    return fucnGetUserName()
  
  } else if(+userName) {
    alert('Номер не может быть именем!')
    return fucnGetUserName()
  
  } else if(userName === null) {
    alert('Отменено!')

  }  else {
    console.log('------- Reading -------')
    console.log('User Name: ' + userName)
    return funcGetUserAge()
  
  }
}

// Get user Age
function funcGetUserAge() {
  userAge = prompt('Введите ваш возраст: ')

  if(userAge === null) {
    alert('Отменено!')

  } else if(userAge === '') {
    alert('Пожалуйста, введите ваш возраст!')
    return funcGetUserAge()
    
  } else if(isNaN(userAge)) {
    alert('Введите число!')
    return funcGetUserAge()

  } else {
    console.log('User Age: ' + userAge)
    return funcGetRes()
  }
}

// Get User Answers
function funcGetRes() {
  
  // Task 1
  task1 = +prompt('Сколько будет: 6 * 7 ?')

  if(isNaN(task1)) {
    alert('Введите число!')
    return funcGetRes()

  } else if(task1 === '') {
    alert('Пожалуйста, введите ответ!')
    return funcGetRes()

  } else {
    console.log('Задача-1: ' + '6 * 7 => ' + task1)
  }

  // Task 2
  task2 = +prompt('Сколько будет: 25 + 37 ?')

  if(isNaN(task2)) {
    alert('Введите число!')
    return funcGetRes()

  } else if(task2 === '') {
    alert('Пожалуйста, введите ответ!')
    return funcGetRes()

  } else {
    console.log('Задача-1: ' + '25 + 37 => ' + task2)
  }

  // Task 3
  task3 = +prompt('Сколько будет: 43 - 7 ?')

  if(isNaN(task3)) {
    alert('Введите число!')
    return funcGetRes()

  } else if(task3 === '') {
    alert('Пожалуйста, введите ответ!')
    return funcGetRes()

  } else {
    console.log('Задача-1: ' + '43 - 7 => ' + task3)
  }

  // Checking Answers
   console.log('------- Checking -------')

   if(task1 === 42) {
    console.log('Задача-1: Правильно!')
   } else {
    console.log('Задача-1: Неправильно!')
   }

   if(task2 === 62) {
    console.log('Задача-2: Правильно!')
   } else {
    console.log('Задача-2: Неправильно!')
   }

   if(task3 === 36) {
    console.log('Задача-3: Правильно!')
   } else {
    console.log('Задача-2: Неправильно!')
   }
}


