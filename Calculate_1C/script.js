$(document).ready(function(){
  $('.toggle-prog').click(function(){
    $('.add-prog').slideToggle(300);      
    return false;
  });
});

let dopProgMonthName1 = document.getElementById('dopProgMonthName1')
let dopProgYearName1 = document.getElementById('dopProgYearName1')
let dopProgMonthName2 = document.getElementById('dopProgMonthName2')
let dopProgYearName2 = document.getElementById('dopProgYearName2')
let dopProgMonthName3 = document.getElementById('dopProgMonthName3')
let dopProgYearName3 = document.getElementById('dopProgYearName3')
let dopProgMonthName4 = document.getElementById('dopProgMonthName4')
let dopProgYearName4 = document.getElementById('dopProgYearName4')
let dopProgMonthName5 = document.getElementById('dopProgMonthName5')
let dopProgYearName5 = document.getElementById('dopProgYearName5')
let dopProgMonthName6 = document.getElementById('dopProgMonthName6')
let dopProgYearName6 = document.getElementById('dopProgYearName6')
let dopProgMonthName7 = document.getElementById('dopProgMonthName7')
let dopProgYearName7 = document.getElementById('dopProgYearName7')
let dopProgMonthName8 = document.getElementById('dopProgMonthName8')
let dopProgYearName8 = document.getElementById('dopProgYearName8')
let dopProgMonthName9 = document.getElementById('dopProgMonthName9')
let dopProgYearName9 = document.getElementById('dopProgYearName9')
let dopProgMonthName10 = document.getElementById('dopProgMonthName10')
let dopProgYearName10 = document.getElementById('dopProgYearName10')
let close2 = document.getElementById('close2')
let close3 = document.getElementById('close3')
let close4 = document.getElementById('close4')
let close5 = document.getElementById('close5')
let close6 = document.getElementById('close6')
let close7 = document.getElementById('close7')
let close8 = document.getElementById('close8')
let close9 = document.getElementById('close9')
let close10 = document.getElementById('close10')

let firstBtnMinMain = document.getElementById("firstBtnMinMain")
let firstBtnMaxMain = document.getElementById("firstBtnMaxMain")
let secondBtnMinMain = document.getElementById("secondBtnMinMain")
let secondBtnMaxMain = document.getElementById("secondBtnMaxMain")
let btnMinMain1 = document.getElementById("BtnMinMain1")
let btnMaxMain1 = document.getElementById("BtnMaxMain1")
let btnMinMain2 = document.getElementById("BtnMinMain2")
let btnMaxMain2 = document.getElementById("BtnMaxMain2")
let btnMinMain3 = document.getElementById("BtnMinMain3")
let btnMaxMain3 = document.getElementById("BtnMaxMain3")
let btnMinMain4 = document.getElementById("BtnMinMain4")
let btnMaxMain4 = document.getElementById("BtnMaxMain4")
let btnMinMain5 = document.getElementById("BtnMinMain5")
let btnMaxMain5 = document.getElementById("BtnMaxMain5")
let btnMinMain6 = document.getElementById("BtnMinMain6")
let btnMaxMain6 = document.getElementById("BtnMaxMain6")
let btnMinMain7 = document.getElementById("BtnMinMain7")
let btnMaxMain7 = document.getElementById("BtnMaxMain7")
let btnMinMain8 = document.getElementById("BtnMinMain8")
let btnMaxMain8 = document.getElementById("BtnMaxMain8")
let btnMinMain9 = document.getElementById("BtnMinMain9")
let btnMaxMain9 = document.getElementById("BtnMaxMain9")
let btnMinMain10 = document.getElementById("BtnMinMain10")
let btnMaxMain10 = document.getElementById("BtnMaxMain10")


let monthPrice = document.getElementById('month-price')
let yearPrice = document.getElementById('year-price')
let yearMonthPrice = document.getElementById('year-month-price')
let dopYearPrice = document.getElementById('year-dop-price')

let dopBase1 = document.getElementById('dopBase1')
let dopBase2 = document.getElementById('dopBase2')
let dopBase3 = document.getElementById('dopBase3')
let dopBase4 = document.getElementById('dopBase4')
let dopBase5 = document.getElementById('dopBase5')
let dopBase6 = document.getElementById('dopBase6')
let dopBase7 = document.getElementById('dopBase7')
let dopBase8 = document.getElementById('dopBase8')
let dopBase9 = document.getElementById('dopBase9')
let dopBase10 = document.getElementById('dopBase10')

let dopBase11 = document.getElementById('dopBase11')
let dopBase12 = document.getElementById('dopBase12')
let dopBase13 = document.getElementById('dopBase13')
let dopBase14 = document.getElementById('dopBase14')
let dopBase15 = document.getElementById('dopBase15')
let dopBase16 = document.getElementById('dopBase16')
let dopBase17 = document.getElementById('dopBase17')
let dopBase18 = document.getElementById('dopBase18')
let dopBase19 = document.getElementById('dopBase19')
let dopBase20 = document.getElementById('dopBase20')



let programm1CMonthPriceList = [1140,1560,1260,2880,1140,1260,1560,2880,1880,1140]
let programm1CPriceList = [950,1300,1050,2400,950,1050,1300,2400,1500,950]


let baseKol = document.getElementById('exampleFormControlInput1')
let programm1C = document.getElementById('form-select1')
let users = document.getElementById('exampleFormControlInput2')

firstBtnMinMain.disabled = true;
firstBtnMaxMain.disabled = true;
secondBtnMinMain.disabled = true;
secondBtnMaxMain.disabled = true;

baseKol.disabled = true;
users.disabled = true;
let programm1CPrice;
programm1C.addEventListener('change', function(e){
  monthPrice.textContent = ''
  yearPrice.textContent = ''
  yearMonthPrice.textContent = ''
  baseKol.value = '';
  users.value = '';
  baseNameMonth.textContent = ''
  userNameMonth.textContent = ''
  baseNameYear.textContent = ''
  userNameYear.textContent = ''
  tarifBlock.hidden = true;
  for(let i = 1; i <= 10; i++){
    firstBtnMinMain.disabled = false;
    firstBtnMaxMain.disabled = false;
    if(e.target.value == i){
      programm1CMonthPrice = programm1CMonthPriceList[i-1];
      programm1CPrice = programm1CPriceList[i-1];
      baseKol.disabled = false;
      if(i == 1){
        programmNameMonth.textContent = '1С:Бухгалтерия 8 ПРОФ'
        programmNameYear.textContent = '1С:Бухгалтерия 8 ПРОФ'
      }else if(i == 2){
        programmNameMonth.textContent = '1С:Бухгалтерия 8 КОРП'
        programmNameYear.textContent = '1С:Бухгалтерия 8 КОРП'
      }else if(i == 3){
        programmNameMonth.textContent = '1С:Зарплата иУправление Персоналом 8'
        programmNameYear.textContent = '1С:Зарплата иУправление Персоналом 8'
      }else if(i == 4){
        programmNameMonth.textContent = '1С:Зарплата иУправление Персоналом КОРП'
        programmNameYear.textContent = '1С:Зарплата иУправление Персоналом КОРП'
      }else if(i == 5){
        programmNameMonth.textContent = '1С:Управление нашей фирмой 8'
        programmNameYear.textContent = '1С:Управление нашей фирмой 8'
      }else if(i == 6){
        programmNameMonth.textContent = '1С:Управление торговлей'
        programmNameYear.textContent = '1С:Управление торговлей'
      }else if(i == 7){
        programmNameMonth.textContent = '1С:Документооборот 8 ПРОФ'
        programmNameYear.textContent = '1С:Документооборот 8 ПРОФ'
      }else if(i == 8){
        programmNameMonth.textContent = '1С:Документооборот 8 КОРП'
        programmNameYear.textContent = '1С:Документооборот 8 КОРП'
      }else if(i == 9){
        programmNameMonth.textContent = '1С:Комплексная автоматизация 8'
        programmNameYear.textContent = '1С:Комплексная автоматизация 8'
      }else if(i == 10){
        programmNameMonth.textContent = '1С:Розница 8'
        programmNameYear.textContent = '1С:Розница 8'
      }
    }
  }
})

//* добавить переменную колбаз.value при изменении обновлялось
let baseFinal;
let baseKolValue;
let baseKolCount1 = 0

//!
firstBtnMinMain.addEventListener('click',function(){
  baseKolCount1--
  baseKol.value--
  if(baseKolCount1 > 0){
    users.disabled = false;
    secondBtnMinMain.disabled = false;
    secondBtnMaxMain.disabled = false;
  }else if (baseKolCount1 < 0){
    users.disabled = true;
    secondBtnMinMain.disabled = true;
    secondBtnMaxMain.disabled = true;
  }

  users.value = ''
  monthPrice.textContent = ''
  yearPrice.textContent = ''
  yearMonthPrice.textContent = ''
  users.disabled = false;
  baseKolValue = baseKol.value
  if(baseKolValue <= 5){
    baseFinal = 0
  }else if(baseKolValue > 5){
    baseFinal = (baseKolValue * 100) - 500
  }
  baseNameMonth.textContent = "Количество баз: " + baseKol.value
  baseNameYear.textContent = "Количество баз: " + baseKol.value
  userNameMonth.textContent = ''
  userNameYear.textContent = ''

  if(baseKolValue <= 0){
    baseKol.value = ''
    users.disabled = true;
    baseNameMonth.textContent = ""
    baseNameYear.textContent = ""

    tarifBlock.hidden = true;
  }
})

firstBtnMaxMain.addEventListener('click',function(){
  baseKolCount1++
  baseKol.value++
  if(baseKolCount1 > 0){
    secondBtnMinMain.disabled = false;
    secondBtnMaxMain.disabled = false;
    users.disabled = false;
  }else if (baseKolCount1 < 0){
    users.disabled = true;
    secondBtnMinMain.disabled = true;
    secondBtnMaxMain.disabled = true;
  }

  users.value = ''
  monthPrice.textContent = ''
  yearPrice.textContent = ''
  yearMonthPrice.textContent = ''
  users.disabled = false;
  baseKolValue = baseKol.value
  if(baseKolValue <= 5){
    baseFinal = 0
  }else if(baseKolValue > 5){
    baseFinal = (baseKolValue * 100) - 500
  }
  baseNameMonth.textContent = "Количество баз: " + baseKol.value
  baseNameYear.textContent = "Количество баз: " + baseKol.value
  userNameMonth.textContent = ''
  userNameYear.textContent = ''

  if(baseKolValue <= 0){
    baseKol.value = ''
    users.disabled = true;
    baseNameMonth.textContent = ""
    baseNameYear.textContent = ""

    tarifBlock.hidden = true;
  }
})


// !
//* добавить переменную users.value при изменении обновлялось 
let usersValue
let monthPriceValue
let yearPriceValue
let yearMonthPriceValue



let mainMonthPriceValue;
let mainYearPriceValue;
let mainYearMonthPriceValue;
let usersCount = 0

secondBtnMinMain.addEventListener('click',function(){
  programmNameMonth.classList.remove('d-none')
  programmNameYear.classList.remove('d-none')
  programmNameMonth.classList.add('mb-1')
  programmNameYear.classList.add('mb-1')
  baseNameMonth.classList.remove('d-none')
  baseNameYear.classList.remove('d-none')
  baseNameMonth.classList.add('mb-1')
  baseNameYear.classList.add('mb-1')
  

  usersCount--
  users.value--
  if(users.value > 0){
    tarifBlock.hidden = false;
  }
  usersValue = users.value;
  monthPriceValue = (programm1CMonthPrice * usersValue)+(baseFinal)
  monthPrice.textContent = monthPriceValue + 'р/месяц'
  mainMonthPriceValue = monthPriceValue
  yearPriceValue = ((programm1CPrice * usersValue)+(baseFinal)) * 12
  yearPrice.textContent = yearPriceValue + 'р/год'
  mainYearPriceValue = yearPriceValue
  yearMonthPriceValue = Math.round(((programm1CPrice * usersValue)+(baseFinal)))
  yearMonthPrice.textContent = yearMonthPriceValue + 'р/месяц'
  mainYearMonthPriceValue = yearMonthPriceValue

  userNameMonth.textContent = "Количество пользователей: " + usersValue
  userNameYear.textContent = "Количество пользователей: " + usersValue

  if(document.getElementById('dop1').textContent == '' && document.getElementById('dop2').textContent == '' && document.getElementById('dop3').textContent == '' && document.getElementById('dop4').textContent == ''){
    document.getElementById('dop1').textContent = 'Не выбран';
  }

  dopBtn1.disabled = false;

  if(users.value <= 0){
    users.value = 0
    dopBtn1.disabled = true;
    userNameMonth.textContent = ""
    userNameYear.textContent = ""
    monthPrice.textContent = ''
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  }
})

secondBtnMaxMain.addEventListener('click',function(){
  programmNameMonth.classList.remove('d-none')
  programmNameYear.classList.remove('d-none')
  programmNameMonth.classList.add('mb-1')
  programmNameYear.classList.add('mb-1')
  baseNameMonth.classList.remove('d-none')
  baseNameYear.classList.remove('d-none')
  baseNameMonth.classList.add('mb-1')
  baseNameYear.classList.add('mb-1')

  usersCount++
  users.value++
  if(users.value > 0){
    tarifBlock.hidden = false;
  }
  usersValue = users.value;
  monthPriceValue = (programm1CMonthPrice * usersValue)+(baseFinal)
  monthPrice.textContent = monthPriceValue + 'р/месяц'
  mainMonthPriceValue = monthPriceValue
  yearPriceValue = ((programm1CPrice * usersValue)+(baseFinal)) * 12
  yearPrice.textContent = yearPriceValue + 'р/год'
  mainYearPriceValue = yearPriceValue
  yearMonthPriceValue = Math.round(((programm1CPrice * usersValue)+(baseFinal)))
  yearMonthPrice.textContent = yearMonthPriceValue + 'р/месяц'
  mainYearMonthPriceValue = yearMonthPriceValue

  userNameMonth.textContent = "Количество пользователей: " + usersValue
  userNameYear.textContent = "Количество пользователей: " + usersValue

  if(document.getElementById('dop1').textContent == '' && document.getElementById('dop2').textContent == '' && document.getElementById('dop3').textContent == '' && document.getElementById('dop4').textContent == ''){
    document.getElementById('dop1').textContent = 'Не выбран';
  }

  dopBtn1.disabled = false;

  if(users.value <= 0){
    users.value = 0
    dopBtn1.disabled = true;
    userNameMonth.textContent = ""
    userNameYear.textContent = ""
    monthPrice.textContent = ''
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  }
})



//todo||      Дополнительные программы
//!Первый скрытый блок
  //* Создание блока (появление - исчезание)
    let moreProg1 = document.getElementById('moreProg1')
    let dopBtn1 = document.getElementById('dopBtn1')
    let close1 = document.getElementById('close1')
    let dopSel1 = document.getElementById('form-select-dop1')
    let dopKol1 = document.getElementById('exampleFormControlInputDop1')
    dopKol1.disabled = true;
    moreProg1.hidden = true;
    dopBtn1.disabled = true;
    moreProg1.style.height = '0%';

    dopBtn1.addEventListener('click', function(){
      //*блокируем первый выбор
        programm1C.disabled= true;
        baseKol.disabled = true;
        users.disabled = true;
      //*-----------------------
      dopSel1.disabled= false;
      moreProg1.disabled = false;
      dopBtn1.hidden = true;
      dopBtn2.hidden = false;
      moreProg1.hidden = false;
      moreProg1.style.height = '100%';
      dopSel2.disabled = false;
      firstBtnMinMain.disabled = true;
      firstBtnMaxMain.disabled = true;
      secondBtnMinMain.disabled = true;
      secondBtnMaxMain.disabled = true;
      dopKol1.disabled = false;
    })


    dopSel1.addEventListener('change', function(e){
        dopProgMonthName1.classList.remove('d-none')
        dopProgYearName1.classList.remove('d-none')
        dopProgMonthName1.classList.add('mb-1')
        dopProgYearName1.classList.add('mb-1')
        dopBase1.classList.remove('d-none')
        dopBase11.classList.remove('d-none')
        dopBase1.classList.add('mb-1')
        dopBase11.classList.add('mb-1')


        monthPrice.textContent = '' 
        yearPrice.textContent = ''
        yearMonthPrice.textContent = ''
      if(e.target.value !== 0){
        dopKol1.value = ''
        dopKol1.disabled = false;
      }else{
        dopKol1.value = ''
        dopKol1.disabled = true;
      }
    })
  //* Вычисление
  //* Вычисляем процент от кол-ва баз
    // let baseDopKol1Value
    // let baseDop1Final
    // dopKol1.addEventListener('change',function(){
    //   baseDopKol1Value = dopKol1.value
      
    //   })
  //* Вычисляем стоимость программы на кол-во баз
    let programm1CMonthPriceDop1
    let programm1CPriceDop1
    dopSel1.addEventListener('change', function(e){
      dopKol1.value = 0
      for(let i = 1; i <= 10; i++){
        if(e.target.value == i){
          programm1CMonthPriceDop1 = programm1CMonthPriceList[i-1];
          programm1CPriceDop1 = programm1CMonthPriceList[i-1];
          if(i == 1){
            dopProgMonthName1.textContent = '1С:Бухгалтерия 8 ПРОФ'
            dopProgYearName1.textContent = '1С:Бухгалтерия 8 ПРОФ'
          }else if(i == 2){
            dopProgMonthName1.textContent = '1С:Бухгалтерия 8 КОРП'
            dopProgYearName1.textContent = '1С:Бухгалтерия 8 КОРП'
          }else if(i == 3){
            dopProgMonthName1.textContent = '1С:Зарплата иУправление Персоналом 8'
            dopProgYearName1.textContent = '1С:Зарплата иУправление Персоналом 8'
          }else if(i == 4){
            dopProgMonthName1.textContent = '1С:Зарплата иУправление Персоналом КОРП'
            dopProgYearName1.textContent = '1С:Зарплата иУправление Персоналом КОРП'
          }else if(i == 5){
            dopProgMonthName1.textContent = '1С:Управление нашей фирмой 8'
            dopProgYearName1.textContent = '1С:Управление нашей фирмой 8'
          }else if(i == 6){
            dopProgMonthName1.textContent = '1С:Управление торговлей'
            dopProgYearName1.textContent = '1С:Управление торговлей'
          }else if(i == 7){
            dopProgMonthName1.textContent = '1С:Документооборот 8 ПРОФ'
            dopProgYearName1.textContent = '1С:Документооборот 8 ПРОФ'
          }else if(i == 8){
            dopProgMonthName1.textContent = '1С:Документооборот 8 КОРП'
            dopProgYearName1.textContent = '1С:Документооборот 8 КОРП'
          }else if(i == 9){
            dopProgMonthName1.textContent = '1С:Комплексная автоматизация 8'
            dopProgYearName1.textContent = '1С:Комплексная автоматизация 8'
          }else if(i == 10){
            dopProgMonthName1.textContent = '1С:Розница 8'
            dopProgYearName1.textContent = '1С:Розница 8'
          }
        }
      }
    })
    let monthPriceDop1Value
    let yearPriceDop1Value
    let yearMonthPriceDop1Value

    let oneMonthPriceDop1Value
    let oneYearPriceDop1Value
    let oneYearMonthPriceDop1Value
//!-----------------------------------------------------------------
    let dopCount1 = 0

    let baseDopKol1Value
    let baseDop1Final

    btnMinMain1.addEventListener('click',function(){
      dopCount1--
      dopKol1.value--
      baseDopKol1Value = dopKol1.value

      dopBase1.textContent = 'Количество баз: ' + dopKol1.value
      dopBase11.textContent = 'Количество баз: ' + dopKol1.value


      if(baseDopKol1Value <= 5){
        baseDop1Final = 0
      }else if(baseDopKol1Value > 5 && baseDopKol1Value !== 5){
        baseDop1Final -= 100
      }

      if(dopKol1.value <= 0){
        dopKol1.value = 0;
        dopBtn2.disabled = true;
      }else if(dopKol1.value > 0){
        dopBtn2.disabled = false;
      }
      
        monthPriceDop1Value = ((programm1CMonthPriceDop1 * usersValue)+(baseDop1Final))
        oneMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value  + 'р/месяц'
        monthPrice.textContent = monthPriceValue + monthPriceDop1Value  + 'р/месяц'
        yearPriceDop1Value = ((programm1CPriceDop1 * usersValue)+(baseDop1Final)) * 10
        oneYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + 'р/год'
        yearPrice.textContent = yearPriceValue + yearPriceDop1Value + 'р/год'
        yearMonthPrice.textContent = Math.round((yearPriceValue + yearPriceDop1Value)/12) + 'р/месяц'
        oneYearMonthPriceDop1Value = Math.round((yearPriceValue + yearPriceDop1Value)/12) + 'р/месяц'
    })
    btnMaxMain1.addEventListener('click',function(){
      dopCount1++
      dopKol1.value++
      baseDopKol1Value = dopKol1.value

      dopBase1.textContent = 'Количество баз: ' + dopKol1.value
      dopBase11.textContent = 'Количество баз: ' + dopKol1.value

      console.log(dopBase11.textContent);
      if(baseDopKol1Value <= 5){
        baseDop1Final = 0
      }else if(baseDopKol1Value > 5){
        baseDop1Final = (baseDopKol1Value * 100) - 500
      }

      if(dopKol1.value > 0){
        dopBtn2.disabled = false;
      }
        monthPriceDop1Value = ((programm1CMonthPriceDop1 * usersValue)+(baseDop1Final))
        oneMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value  + 'р/месяц'
        monthPrice.textContent = monthPriceValue + monthPriceDop1Value  + 'р/месяц'
        yearPriceDop1Value = ((programm1CPriceDop1 * usersValue)+(baseDop1Final)) * 10
        oneYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + 'р/год'
        yearPrice.textContent = yearPriceValue + yearPriceDop1Value + 'р/год'
        yearMonthPrice.textContent = Math.round((yearPriceValue + yearPriceDop1Value)/12) + 'р/месяц'
        oneYearMonthPriceDop1Value = Math.round((yearPriceValue + yearPriceDop1Value)/12) + 'р/месяц'
    })
    


    
//!Второй скрытый блок
  //* Создание блока (появление - исчезание)
    
    let moreProg2 = document.getElementById('moreProg2')
    let dopBtn2 = document.getElementById('dopBtn2')
    let dopSel2 = document.getElementById('form-select-dop2')
    let dopKol2 = document.getElementById('exampleFormControlInputDop2')
    moreProg2.hidden = true;
    dopBtn2.disabled = true;
    dopBtn2.hidden = true;
    moreProg2.style.height = '0%';

    dopBtn2.addEventListener('click', function(){
      dopSel1.disabled = true;
      dopKol1.disabled = true;
      moreProg2.hidden = false;
      dopBtn2.hidden = true;
      dopBtn3.hidden = false;
      dopSel3.disabled = false;
      btnMinMain1.disabled = true;
      btnMaxMain1.disabled = true;
      dopKol3.disabled

      close1.hidden = true;
    })

    dopSel2.addEventListener('change', function(e){
      dopProgMonthName2.classList.remove('d-none')
      dopProgYearName2.classList.remove('d-none')
      dopProgMonthName2.classList.add('mb-1')
      dopProgYearName2.classList.add('mb-1')
      dopBase2.classList.remove('d-none')
      dopBase12.classList.remove('d-none')
      dopBase2.classList.add('mb-1')
      dopBase12.classList.add('mb-1')

      monthPrice.textContent = '' 
      yearPrice.textContent = ''
      yearMonthPrice.textContent = ''
    if(e.target.value !== 0){
      dopKol2.value = ''
    }else{
      dopKol2.value = ''
    }
    })

  //* Вычисление
  //* Вычисляем процент от кол-ва баз
    // let baseDopKol2Value
    // let baseDop2Final
    // dopKol2.addEventListener('change',function(){
    //   dopBtn3.disabled = false;
    //   baseDopKol2Value = dopKol2.value
    //   if(baseDopKol2Value <= 5){
    //     baseDop2Final = 0
    //   }else if(baseDopKol2Value > 5){
    //     baseDop2Final = (baseDopKol2Value * 100) - 500
    //   }
    // })

  //* Вычисляем стоимость программы на кол-во баз
    let programm1CMonthPriceDop2
    let programm1CPriceDop2
    dopSel2.addEventListener('change', function(e){
      dopKol2.value = 0
      for(let i = 1; i <= 10; i++){
        if(e.target.value == i){
          programm1CMonthPriceDop2 = programm1CMonthPriceList[i-1];
          programm1CPriceDop2 = programm1CMonthPriceList[i-1];
          if(i == 1){
            dopProgMonthName2.textContent = '1С:Бухгалтерия 8 ПРОФ'
            dopProgYearName2.textContent = '1С:Бухгалтерия 8 ПРОФ'
          }else if(i == 2){
            dopProgMonthName2.textContent = '1С:Бухгалтерия 8 КОРП'
            dopProgYearName2.textContent = '1С:Бухгалтерия 8 КОРП'
          }else if(i == 3){
            dopProgMonthName2.textContent = '1С:Зарплата иУправление Персоналом 8'
            dopProgYearName2.textContent = '1С:Зарплата иУправление Персоналом 8'
          }else if(i == 4){
            dopProgMonthName2.textContent = '1С:Зарплата иУправление Персоналом КОРП'
            dopProgYearName2.textContent = '1С:Зарплата иУправление Персоналом КОРП'
          }else if(i == 5){
            dopProgMonthName2.textContent = '1С:Управление нашей фирмой 8'
            dopProgYearName2.textContent = '1С:Управление нашей фирмой 8'
          }else if(i == 6){
            dopProgMonthName2.textContent = '1С:Управление торговлей'
            dopProgYearName2.textContent = '1С:Управление торговлей'
          }else if(i == 7){
            dopProgMonthName2.textContent = '1С:Документооборот 8 ПРОФ'
            dopProgYearName2.textContent = '1С:Документооборот 8 ПРОФ'
          }else if(i == 8){
            dopProgMonthName2.textContent = '1С:Документооборот 8 КОРП'
            dopProgYearName2.textContent = '1С:Документооборот 8 КОРП'
          }else if(i == 9){
            dopProgMonthName2.textContent = '1С:Комплексная автоматизация 8'
            dopProgYearName2.textContent = '1С:Комплексная автоматизация 8'
          }else if(i == 10){
            dopProgMonthName2.textContent = '1С:Розница 8'
            dopProgYearName2.textContent = '1С:Розница 8'
          }
        }
      }
    })

    let monthPriceDop2Value
    let yearPriceDop2Value
    let yearMonthPriceDop2Value

    let twoMonthPriceDop1Value
    let twoYearPriceDop1Value
    let twoYearMonthPriceDop1Value

//!------------------------------------------
    let dopCount2 = 0
    dopKol2.value = 0

    let baseDopKol2Value
    let baseDop2Final

    btnMinMain2.addEventListener('click',function(){
      dopCount2--
      dopKol2.value--
      baseDopKol2Value = dopKol2.value

      dopBase2.textContent = 'Количество баз: ' + dopKol2.value
      dopBase12.textContent = 'Количество баз: ' + dopKol2.value
      
      if(baseDopKol2Value <= 5){
        baseDop2Final = 0
      }else if(baseDopKol2Value > 5 && baseDopKol2Value !== 5){
        baseDop2Final -= 100
      }

      if(dopKol2.value <= 0){
        dopKol2.value = 0;
        dopBtn3.disabled = true;
      }else if(dopKol2.value > 0){
        dopBtn3.disabled = false;
      }
      
      monthPriceDop2Value = ((programm1CMonthPriceDop2 * usersValue)+(baseDop2Final))
      monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + 'р/месяц'
      yearPriceDop2Value = ((programm1CPriceDop2 * usersValue)+(baseDop2Final)) * 10
      yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + 'р/год'
      yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12) + 'р/месяц'
      twoMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + 'р/месяц'
      twoYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + 'р/год'
      twoYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12) + 'р/месяц'
    })
    btnMaxMain2.addEventListener('click',function(){
      dopCount2++
      dopKol2.value++
      baseDopKol2Value = dopKol2.value

      dopBase2.textContent = 'Количество баз: ' + dopKol2.value
      dopBase12.textContent = 'Количество баз: ' + dopKol2.value

      if(baseDopKol2Value <= 5){
        baseDop2Final = 0
      }else if(baseDopKol2Value > 5){
        baseDop2Final = (baseDopKol2Value * 100) - 500
      }

      if(dopKol2.value > 0){
        dopBtn3.disabled = false;
      }
      monthPriceDop2Value = ((programm1CMonthPriceDop2 * usersValue)+(baseDop2Final))
      monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + 'р/месяц'
      yearPriceDop2Value = ((programm1CPriceDop2 * usersValue)+(baseDop2Final)) * 10
      yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + 'р/год'
      yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12) + 'р/месяц'
      twoMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + 'р/месяц'
      twoYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + 'р/год'
      twoYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12) + 'р/месяц'
    })
    


    // dopKol2.addEventListener('change',function(){
    //   if(dopSel2.value !== 0){
    //     monthPriceDop2Value = ((programm1CMonthPriceDop2 * usersValue)+(baseDop2Final))
    //     monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + 'р/месяц'
    //     yearPriceDop2Value = ((programm1CPriceDop2 * usersValue)+(baseDop2Final)) * 10
    //     yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + 'р/год'
    //     yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12) + 'р/месяц'
    //     twoMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + 'р/месяц'
    //     twoYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + 'р/год'
    //     twoYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12) + 'р/месяц'
    //   }
    //   if(dopKol2.value <= 0){
    //     dopBtn3.disabled = true;
    //     monthPrice.textContent = '' 
    //     yearPrice.textContent = ''
    //     yearMonthPrice.textContent = ''
    //   }
    // })

//!Третий скрытый блок
  //* Создание блока (появление - исчезание)
  let moreProg3 = document.getElementById('moreProg3')
  let dopBtn3 = document.getElementById('dopBtn3')
  let dopSel3 = document.getElementById('form-select-dop3')
  let dopKol3 = document.getElementById('exampleFormControlInputDop3')
  // dopKol3.disabled = true;
  moreProg3.hidden = true;
  dopBtn3.disabled = true;
  dopBtn3.hidden = true;
  moreProg3.style.height = '0%';

  dopBtn3.addEventListener('click', function(){
    dopSel2.disabled = true;
    dopKol2.disabled = true;
    moreProg3.hidden = false;
    dopBtn3.hidden = true;
    dopBtn4.hidden = false;
    dopSel4.disabled = false;
    btnMinMain2.disabled = true;
    btnMaxMain2.disabled = true;

    close2.hidden = true;
  })

  dopSel3.addEventListener('change', function(e){
    dopProgMonthName3.classList.remove('d-none')
    dopProgYearName3.classList.remove('d-none')
    dopProgMonthName3.classList.add('mb-1')
    dopProgYearName3.classList.add('mb-1')
    dopBase3.classList.remove('d-none')
    dopBase13.classList.remove('d-none')
    dopBase3.classList.add('mb-1')
    dopBase13.classList.add('mb-1')

    monthPrice.textContent = '' 
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  if(e.target.value !== 0){
    dopKol3.value = ''
    dopKol3.disabled = false;
  }else{
    dopKol3.value = ''
    dopKol3.disabled = true;
  }
  })

  //* Вычисление
  //* Вычисляем процент от кол-ва баз
  // let baseDopKol3Value
  // let baseDop3Final
  // dopKol3.addEventListener('change',function(){
  //   dopBtn4.disabled = false;
  //   baseDopKol3Value = dopKol3.value
  //   if(baseDopKol3Value <= 5){
  //     baseDop3Final = 0
  //   }else if(baseDopKol3Value > 5){
  //     baseDop3Final = (baseDopKol3Value * 100) - 500
  //   }
  // })

  //* Вычисляем стоимость программы на кол-во баз
  let programm1CMonthPriceDop3
  let programm1CPriceDop3
  dopSel3.addEventListener('change', function(e){
    dopKol3.value = 0
    for(let i = 1; i <= 10; i++){
      if(e.target.value == i){
        programm1CMonthPriceDop3 = programm1CMonthPriceList[i-1];
        programm1CPriceDop3 = programm1CMonthPriceList[i-1];
        if(i == 1){
          dopProgMonthName3.textContent = '1С:Бухгалтерия 8 ПРОФ'
          dopProgYearName3.textContent = '1С:Бухгалтерия 8 ПРОФ'
        }else if(i == 2){
          dopProgMonthName3.textContent = '1С:Бухгалтерия 8 КОРП'
          dopProgYearName3.textContent = '1С:Бухгалтерия 8 КОРП'
        }else if(i == 3){
          dopProgMonthName3.textContent = '1С:Зарплата иУправление Персоналом 8'
          dopProgYearName3.textContent = '1С:Зарплата иУправление Персоналом 8'
        }else if(i == 4){
          dopProgMonthName3.textContent = '1С:Зарплата иУправление Персоналом КОРП'
          dopProgYearName3.textContent = '1С:Зарплата иУправление Персоналом КОРП'
        }else if(i == 5){
          dopProgMonthName3.textContent = '1С:Управление нашей фирмой 8'
          dopProgYearName3.textContent = '1С:Управление нашей фирмой 8'
        }else if(i == 6){
          dopProgMonthName3.textContent = '1С:Управление торговлей'
          dopProgYearName3.textContent = '1С:Управление торговлей'
        }else if(i == 7){
          dopProgMonthName3.textContent = '1С:Документооборот 8 ПРОФ'
          dopProgYearName3.textContent = '1С:Документооборот 8 ПРОФ'
        }else if(i == 8){
          dopProgMonthName3.textContent = '1С:Документооборот 8 КОРП'
          dopProgYearName3.textContent = '1С:Документооборот 8 КОРП'
        }else if(i == 9){
          dopProgMonthName3.textContent = '1С:Комплексная автоматизация 8'
          dopProgYearName3.textContent = '1С:Комплексная автоматизация 8'
        }else if(i == 10){
          dopProgMonthName3.textContent = '1С:Розница 8'
          dopProgYearName3.textContent = '1С:Розница 8'
        }
      }
    }
  })

  let monthPriceDop3Value
  let yearPriceDop3Value
  let yearMonthPriceDop3Value

  let threeMonthPriceDop1Value
  let threeYearPriceDop1Value
  let threeYearMonthPriceDop1Value

  //!------------------------------------------
  let dopCount3 = 0
  dopKol3.value = 0

  let baseDopKol3Value
  let baseDop3Final

  btnMinMain3.addEventListener('click',function(){
    dopCount3--
    dopKol3.value--
    baseDopKol3Value = dopKol3.value

    dopBase3.textContent = 'Количество баз: ' + dopKol3.value
    dopBase13.textContent = 'Количество баз: ' + dopKol3.value

    if(baseDopKol3Value <= 5){
      baseDop3Final = 0
    }else if(baseDopKol3Value > 5 && baseDopKol3Value !== 5){
      baseDop3Final -= 100
    }

    if(dopKol3.value <= 0){
      dopKol3.value = 0;
      dopBtn4.disabled = true;
    }else if(dopKol3.value > 0){
      dopBtn4.disabled = false;
    }
    
    monthPriceDop3Value = ((programm1CMonthPriceDop3 * usersValue)+(baseDop3Final))
      monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + 'р/месяц'
      yearPriceDop3Value = ((programm1CPriceDop3 * usersValue)+(baseDop3Final)) * 10
      yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + 'р/год'
      yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12) + 'р/месяц'
      threeMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + 'р/месяц'
      threeYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + 'р/год'
      threeYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12) + 'р/месяц'
  })
  btnMaxMain3.addEventListener('click',function(){
    dopCount3++
    dopKol3.value++
    baseDopKol3Value = dopKol3.value

    dopBase3.textContent = 'Количество баз: ' + dopKol3.value
    dopBase13.textContent = 'Количество баз: ' + dopKol3.value

    if(baseDopKol3Value <= 5){
      baseDop3Final = 0
    }else if(baseDopKol3Value > 5){
      baseDop3Final = (baseDopKol3Value * 100) - 500
    }

    if(dopKol3.value > 0){
      dopBtn4.disabled = false;
    }
      monthPriceDop3Value = ((programm1CMonthPriceDop3 * usersValue)+(baseDop3Final))
      monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + 'р/месяц'
      yearPriceDop3Value = ((programm1CPriceDop3 * usersValue)+(baseDop3Final)) * 10
      yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + 'р/год'
      yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12) + 'р/месяц'
      threeMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + 'р/месяц'
      threeYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + 'р/год'
      threeYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12) + 'р/месяц'
  })

  // dopKol3.addEventListener('change',function(){
  //   if(dopSel3.value !== 0){
  //     monthPriceDop3Value = ((programm1CMonthPriceDop3 * usersValue)+(baseDop3Final))
  //     monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + 'р/месяц'
  //     yearPriceDop3Value = ((programm1CPriceDop3 * usersValue)+(baseDop3Final)) * 10
  //     yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + 'р/год'
  //     yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12) + 'р/месяц'
  //     threeMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + 'р/месяц'
  //     threeYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + 'р/год'
  //     threeYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12) + 'р/месяц'
  //   }
  //   if(dopKol3.value <= 0){
  //     dopBtn4.disabled = true;
  //     monthPrice.textContent = '' 
  //     yearPrice.textContent = ''
  //     yearMonthPrice.textContent = ''
  //   }
  // })

//!Четвертый скрытый блок
  //* Создание блока (появление - исчезание)
  let moreProg4 = document.getElementById('moreProg4')
  let dopBtn4 = document.getElementById('dopBtn4')
  let dopSel4 = document.getElementById('form-select-dop4')
  let dopKol4 = document.getElementById('exampleFormControlInputDop4')
  // dopKol4.disabled = true;
  moreProg4.hidden = true;
  dopBtn4.disabled = true;
  dopBtn4.hidden = true;
  moreProg4.style.height = '0%';

  dopBtn4.addEventListener('click', function(){
    dopSel3.disabled = true;
    dopKol3.disabled = true;
    moreProg4.hidden = false;
    dopBtn4.hidden = true;
    dopBtn5.hidden = false;
    dopSel5.disabled = false;
    btnMinMain3.disabled = true;
    btnMaxMain3.disabled = true;

    close3.hidden = true;
  })

  dopSel4.addEventListener('change', function(e){
    dopProgMonthName4.classList.remove('d-none')
    dopProgYearName4.classList.remove('d-none')
    dopProgMonthName4.classList.add('mb-1')
    dopProgYearName4.classList.add('mb-1')
    dopBase4.classList.remove('d-none')
    dopBase14.classList.remove('d-none')
    dopBase4.classList.add('mb-1')
    dopBase14.classList.add('mb-1')

    monthPrice.textContent = '' 
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  if(e.target.value !== 0){
    dopKol4.value = ''
    dopKol4.disabled = false;
  }else{
    dopKol4.value = ''
    dopKol4.disabled = true;
  }
  })

  //* Вычисление
  //* Вычисляем процент от кол-ва баз
  // let baseDopKol4Value
  // let baseDop4Final
  // dopKol4.addEventListener('change',function(){
  //   dopBtn5.disabled = false;
  //   baseDopKol4Value = dopKol4.value
  //   if(baseDopKol4Value <= 5){
  //     baseDop4Final = 0
  //   }else if(baseDopKol4Value > 5){
  //     baseDop4Final = (baseDopKol4Value * 100) - 500
  //   }
  // })

  //* Вычисляем стоимость программы на кол-во баз
  let programm1CMonthPriceDop4
  let programm1CPriceDop4
  dopSel4.addEventListener('change', function(e){
    dopKol4.value = 0
    for(let i = 1; i <= 10; i++){
      if(e.target.value == i){
        programm1CMonthPriceDop4 = programm1CMonthPriceList[i-1];
        programm1CPriceDop4 = programm1CMonthPriceList[i-1];
        if(i == 1){
          dopProgMonthName4.textContent = '1С:Бухгалтерия 8 ПРОФ'
          dopProgYearName4.textContent = '1С:Бухгалтерия 8 ПРОФ'
        }else if(i == 2){
          dopProgMonthName4.textContent = '1С:Бухгалтерия 8 КОРП'
          dopProgYearName4.textContent = '1С:Бухгалтерия 8 КОРП'
        }else if(i == 3){
          dopProgMonthName4.textContent = '1С:Зарплата иУправление Персоналом 8'
          dopProgYearName4.textContent = '1С:Зарплата иУправление Персоналом 8'
        }else if(i == 4){
          dopProgMonthName4.textContent = '1С:Зарплата иУправление Персоналом КОРП'
          dopProgYearName4.textContent = '1С:Зарплата иУправление Персоналом КОРП'
        }else if(i == 5){
          dopProgMonthName4.textContent = '1С:Управление нашей фирмой 8'
          dopProgYearName4.textContent = '1С:Управление нашей фирмой 8'
        }else if(i == 6){
          dopProgMonthName4.textContent = '1С:Управление торговлей'
          dopProgYearName4.textContent = '1С:Управление торговлей'
        }else if(i == 7){
          dopProgMonthName4.textContent = '1С:Документооборот 8 ПРОФ'
          dopProgYearName4.textContent = '1С:Документооборот 8 ПРОФ'
        }else if(i == 8){
          dopProgMonthName4.textContent = '1С:Документооборот 8 КОРП'
          dopProgYearName4.textContent = '1С:Документооборот 8 КОРП'
        }else if(i == 9){
          dopProgMonthName4.textContent = '1С:Комплексная автоматизация 8'
          dopProgYearName4.textContent = '1С:Комплексная автоматизация 8'
        }else if(i == 10){
          dopProgMonthName4.textContent = '1С:Розница 8'
          dopProgYearName4.textContent = '1С:Розница 8'
        }
      }
    }
  })

  let monthPriceDop4Value
  let yearPriceDop4Value
  let yearMonthPriceDop4Value

  let fourMonthPriceDop1Value
  let fourYearPriceDop1Value
  let fourYearMonthPriceDop1Value
//!------------------------------------------
  let dopCount4 = 0
  dopKol4.value = 0

  let baseDopKol4Value
  let baseDop4Final

  btnMinMain4.addEventListener('click',function(){
    dopCount4--
    dopKol4.value--
    baseDopKol4Value = dopKol4.value

    dopBase4.textContent = 'Количество баз: ' + dopKol4.value
    dopBase14.textContent = 'Количество баз: ' + dopKol4.value

    if(baseDopKol4Value <= 5){
      baseDop4Final = 0
    }else if(baseDopKol4Value > 5 && baseDopKol4Value !== 5){
      baseDop4Final -= 100
    }

    if(dopKol4.value <= 0){
      dopKol4.value = 0;
      dopBtn5.disabled = true;
    }else if(dopKol4.value > 0){
      dopBtn5.disabled = false;
    }
    
    monthPriceDop4Value = ((programm1CMonthPriceDop4 * usersValue)+(baseDop4Final))
      monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + 'р/месяц'
      yearPriceDop4Value = ((programm1CPriceDop4 * usersValue)+(baseDop4Final)) * 10
      yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + 'р/год'
      yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12) + 'р/месяц'
      fourMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + 'р/месяц'
      fourYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + 'р/год'
      fourYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12) + 'р/месяц'
  })
  btnMaxMain4.addEventListener('click',function(){
    dopCount4++
    dopKol4.value++
    baseDopKol4Value = dopKol4.value

    dopBase4.textContent = 'Количество баз: ' + dopKol4.value
    dopBase14.textContent = 'Количество баз: ' + dopKol4.value

    if(baseDopKol4Value <= 5){
      baseDop4Final = 0
    }else if(baseDopKol4Value > 5){
      baseDop4Final = (baseDopKol4Value * 100) - 500
    }

    if(dopKol4.value > 0){
      dopBtn5.disabled = false;
    }
    monthPriceDop4Value = ((programm1CMonthPriceDop4 * usersValue)+(baseDop4Final))
    monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + 'р/месяц'
    yearPriceDop4Value = ((programm1CPriceDop4 * usersValue)+(baseDop4Final)) * 10
    yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + 'р/год'
    yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12) + 'р/месяц'
    fourMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + 'р/месяц'
    fourYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + 'р/год'
    fourYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12) + 'р/месяц'
  })


  // dopKol4.addEventListener('change',function(){
  //   if(dopSel4.value !== 0){
  //     monthPriceDop4Value = ((programm1CMonthPriceDop4 * usersValue)+(baseDop4Final))
  //     monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + 'р/месяц'
  //     yearPriceDop4Value = ((programm1CPriceDop4 * usersValue)+(baseDop4Final)) * 10
  //     yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + 'р/год'
  //     yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12) + 'р/месяц'
  //     fourMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + 'р/месяц'
  //     fourYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + 'р/год'
  //     fourYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12) + 'р/месяц'
  //   }
  //   if(dopKol4.value <= 0){
  //     dopBtn5.disabled = true;
  //     monthPrice.textContent = '' 
  //     yearPrice.textContent = ''
  //     yearMonthPrice.textContent = ''
  //   }
  // })

//!Пятый скрытый блок
  //* Создание блока (появление - исчезание)
  let moreProg5 = document.getElementById('moreProg5')
  let dopBtn5 = document.getElementById('dopBtn5')
  let dopSel5 = document.getElementById('form-select-dop5')
  let dopKol5 = document.getElementById('exampleFormControlInputDop5')
  moreProg5.hidden = true;
  dopBtn5.disabled = true;
  dopBtn5.hidden = true;
  moreProg5.style.height = '0%';

  dopBtn5.addEventListener('click', function(){
    dopSel4.disabled = true;
    dopKol4.disabled = true;
    moreProg5.hidden = false;
    dopBtn5.hidden = true;
    dopBtn6.hidden = false; 
    dopSel6.disabled = false;
    btnMinMain4.disabled = true;
    btnMaxMain4.disabled = true;

    close4.hidden = true;
  })

  dopSel5.addEventListener('change', function(e){
    dopProgMonthName5.classList.remove('d-none')
    dopProgYearName5.classList.remove('d-none')
    dopProgMonthName5.classList.add('mb-1')
    dopProgYearName5.classList.add('mb-1')
    dopBase5.classList.remove('d-none')
    dopBase15.classList.remove('d-none')
    dopBase5.classList.add('mb-1')
    dopBase15.classList.add('mb-1')

    monthPrice.textContent = '' 
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  if(e.target.value !== 0){
    dopKol5.value = ''
    dopKol5.disabled = false;
  }else{
    dopKol5.value = ''
    dopKol5.disabled = true;
  }
  })

  //* Вычисление
  //* Вычисляем процент от кол-ва баз
  // let baseDopKol5Value
  // let baseDop5Final
  // dopKol5.addEventListener('change',function(){
  //   dopBtn6.disabled = false;
  //   baseDopKol5Value = dopKol5.value
  //   if(baseDopKol5Value <= 5){
  //     baseDop5Final = 0
  //   }else if(baseDopKol5Value > 5){
  //     baseDop5Final = (baseDopKol5Value * 100) - 500
  //   }
  // })

  //* Вычисляем стоимость программы на кол-во баз
  let programm1CMonthPriceDop5
  let programm1CPriceDop5
  dopSel5.addEventListener('change', function(e){
    dopKol5.value = 0
    for(let i = 1; i <= 10; i++){
      if(e.target.value == i){
        programm1CMonthPriceDop5 = programm1CMonthPriceList[i-1];
        programm1CPriceDop5 = programm1CMonthPriceList[i-1];
        if(i == 1){
          dopProgMonthName5.textContent = '1С:Бухгалтерия 8 ПРОФ'
          dopProgYearName5.textContent = '1С:Бухгалтерия 8 ПРОФ'
        }else if(i == 2){
          dopProgMonthName5.textContent = '1С:Бухгалтерия 8 КОРП'
          dopProgYearName5.textContent = '1С:Бухгалтерия 8 КОРП'
        }else if(i == 3){
          dopProgMonthName5.textContent = '1С:Зарплата иУправление Персоналом 8'
          dopProgYearName5.textContent = '1С:Зарплата иУправление Персоналом 8'
        }else if(i == 4){
          dopProgMonthName5.textContent = '1С:Зарплата иУправление Персоналом КОРП'
          dopProgYearName5.textContent = '1С:Зарплата иУправление Персоналом КОРП'
        }else if(i == 5){
          dopProgMonthName5.textContent = '1С:Управление нашей фирмой 8'
          dopProgYearName5.textContent = '1С:Управление нашей фирмой 8'
        }else if(i == 6){
          dopProgMonthName5.textContent = '1С:Управление торговлей'
          dopProgYearName5.textContent = '1С:Управление торговлей'
        }else if(i == 7){
          dopProgMonthName5.textContent = '1С:Документооборот 8 ПРОФ'
          dopProgYearName5.textContent = '1С:Документооборот 8 ПРОФ'
        }else if(i == 8){
          dopProgMonthName5.textContent = '1С:Документооборот 8 КОРП'
          dopProgYearName5.textContent = '1С:Документооборот 8 КОРП'
        }else if(i == 9){
          dopProgMonthName5.textContent = '1С:Комплексная автоматизация 8'
          dopProgYearName5.textContent = '1С:Комплексная автоматизация 8'
        }else if(i == 10){
          dopProgMonthName5.textContent = '1С:Розница 8'
          dopProgYearName5.textContent = '1С:Розница 8'
        }
      }
    }
  })

  let monthPriceDop5Value
  let yearPriceDop5Value
  let yearMonthPriceDop5Value

  let fiveMonthPriceDop1Value
  let fiveYearPriceDop1Value
  let fiveYearMonthPriceDop1Value

  //!------------------------------------------
  let dopCount5 = 0
  dopKol5.value = 0

  let baseDopKol5Value
  let baseDop5Final

  btnMinMain5.addEventListener('click',function(){
    dopCount5--
    dopKol5.value--
    baseDopKol5Value = dopKol5.value

    dopBase5.textContent = 'Количество баз: ' + dopKol5.value
    dopBase15.textContent = 'Количество баз: ' + dopKol5.value

    if(baseDopKol5Value <= 5){
      baseDop5Final = 0
    }else if(baseDopKol5Value > 5 && baseDopKol5Value !== 5){
      baseDop5Final -= 100
    }

    if(dopKol5.value <= 0){
      dopKol5.value = 0;
      dopBtn6.disabled = true;
    }else if(dopKol5.value > 0){
      dopBtn6.disabled = false;
    }
    
    monthPriceDop5Value = ((programm1CMonthPriceDop5 * usersValue)+(baseDop5Final))
    monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + 'р/месяц'
    yearPriceDop5Value = ((programm1CPriceDop5 * usersValue)+(baseDop5Final)) * 10
    yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + 'р/год'
    yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12) + 'р/месяц'
    fiveMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + 'р/месяц'
    fiveYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + 'р/год'
    fiveYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12) + 'р/месяц'
  })
  btnMaxMain5.addEventListener('click',function(){
    dopCount5++
    dopKol5.value++
    baseDopKol5Value = dopKol5.value

    dopBase5.textContent = 'Количество баз: ' + dopKol5.value
    dopBase15.textContent = 'Количество баз: ' + dopKol5.value

    if(baseDopKol5Value <= 5){
      baseDop5Final = 0
    }else if(baseDopKol5Value > 5){
      baseDop5Final = (baseDopKol5Value * 100) - 500
    }

    if(dopKol5.value > 0){
      dopBtn6.disabled = false;
    }
    monthPriceDop5Value = ((programm1CMonthPriceDop5 * usersValue)+(baseDop5Final))
    monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + 'р/месяц'
    yearPriceDop5Value = ((programm1CPriceDop5 * usersValue)+(baseDop5Final)) * 10
    yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + 'р/год'
    yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12) + 'р/месяц'
    fiveMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + 'р/месяц'
    fiveYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + 'р/год'
    fiveYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12) + 'р/месяц'
  })

  // dopKol5.addEventListener('change',function(){
  //   if(dopSel5.value !== 0){
      // monthPriceDop5Value = ((programm1CMonthPriceDop5 * usersValue)+(baseDop5Final))
      // monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + 'р/месяц'
      // yearPriceDop5Value = ((programm1CPriceDop5 * usersValue)+(baseDop5Final)) * 10
      // yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + 'р/год'
      // yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12) + 'р/месяц'
      // fiveMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + 'р/месяц'
      // fiveYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + 'р/год'
      // fiveYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12) + 'р/месяц'
  //   }
  //   if(dopKol5.value <= 0){
  //     dopBtn6.disabled = true;
  //     monthPrice.textContent = '' 
  //     yearPrice.textContent = ''
  //     yearMonthPrice.textContent = ''
  //   }
  // })

//!Шестой скрытый блок
  //* Создание блока (появление - исчезание)
  let moreProg6 = document.getElementById('moreProg6')
  let dopBtn6 = document.getElementById('dopBtn6')
  let dopSel6 = document.getElementById('form-select-dop6')
  let dopKol6 = document.getElementById('exampleFormControlInputDop6')
  moreProg6.hidden = true;
  dopBtn6.disabled = true;
  dopBtn6.hidden = true;
  moreProg6.style.height = '0%';

  dopBtn6.addEventListener('click', function(){
    dopSel5.disabled = true;
    dopKol5.disabled = true;
    moreProg6.hidden = false;
    dopBtn6.hidden = true;
    dopBtn7.hidden = false;
    dopSel7.disabled = false;
    btnMinMain5.disabled = true;
    btnMaxMain5.disabled = true;

    close5.hidden = true;
  })

  dopSel6.addEventListener('change', function(e){
    dopProgMonthName6.classList.remove('d-none')
    dopProgYearName6.classList.remove('d-none')
    dopProgMonthName6.classList.add('mb-1')
    dopProgYearName6.classList.add('mb-1')
    dopBase6.classList.remove('d-none')
    dopBase16.classList.remove('d-none')
    dopBase6.classList.add('mb-1')
    dopBase16.classList.add('mb-1')

    monthPrice.textContent = '' 
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  if(e.target.value !== 0){
    dopKol6.value = ''
    dopKol6.disabled = false;
  }else{
    dopKol6.value = ''
    dopKol6.disabled = true;
  }
  })

  //* Вычисление
  //* Вычисляем процент от кол-ва баз
  // let baseDopKol6Value
  // let baseDop6Final
  // dopKol6.addEventListener('change',function(){
  //   dopBtn7.disabled = false;
  //   baseDopKol6Value = dopKol6.value
  //   if(baseDopKol6Value <= 5){
  //     baseDop6Final = 0
  //   }else if(baseDopKol6Value > 5){
  //     baseDop6Final = (baseDopKol6Value * 100) - 500
  //   }
  // })

  //* Вычисляем стоимость программы на кол-во баз
  let programm1CMonthPriceDop6
  let programm1CPriceDop6
  dopSel6.addEventListener('change', function(e){
    dopKol6.value = 0
    for(let i = 1; i <= 10; i++){
      if(e.target.value == i){
        programm1CMonthPriceDop6 = programm1CMonthPriceList[i-1];
        programm1CPriceDop6 = programm1CMonthPriceList[i-1];
        if(i == 1){
          dopProgMonthName6.textContent = '1С:Бухгалтерия 8 ПРОФ'
          dopProgYearName6.textContent = '1С:Бухгалтерия 8 ПРОФ'
        }else if(i == 2){
          dopProgMonthName6.textContent = '1С:Бухгалтерия 8 КОРП'
          dopProgYearName6.textContent = '1С:Бухгалтерия 8 КОРП'
        }else if(i == 3){
          dopProgMonthName6.textContent = '1С:Зарплата иУправление Персоналом 8'
          dopProgYearName6.textContent = '1С:Зарплата иУправление Персоналом 8'
        }else if(i == 4){
          dopProgMonthName6.textContent = '1С:Зарплата иУправление Персоналом КОРП'
          dopProgYearName6.textContent = '1С:Зарплата иУправление Персоналом КОРП'
        }else if(i == 5){
          dopProgMonthName6.textContent = '1С:Управление нашей фирмой 8'
          dopProgYearName6.textContent = '1С:Управление нашей фирмой 8'
        }else if(i == 6){
          dopProgMonthName6.textContent = '1С:Управление торговлей'
          dopProgYearName6.textContent = '1С:Управление торговлей'
        }else if(i == 7){
          dopProgMonthName6.textContent = '1С:Документооборот 8 ПРОФ'
          dopProgYearName6.textContent = '1С:Документооборот 8 ПРОФ'
        }else if(i == 8){
          dopProgMonthName6.textContent = '1С:Документооборот 8 КОРП'
          dopProgYearName6.textContent = '1С:Документооборот 8 КОРП'
        }else if(i == 9){
          dopProgMonthName6.textContent = '1С:Комплексная автоматизация 8'
          dopProgYearName6.textContent = '1С:Комплексная автоматизация 8'
        }else if(i == 10){
          dopProgMonthName6.textContent = '1С:Розница 8'
          dopProgYearName6.textContent = '1С:Розница 8'
        }
      }
    }
  })

  let monthPriceDop6Value
  let yearPriceDop6Value
  let yearMonthPriceDop6Value

  let sixMonthPriceDop1Value
  let sixYearPriceDop1Value
  let sixYearMonthPriceDop1Value
//!------------------------------------------
let dopCount6 = 0
dopKol6.value = 0

let baseDopKol6Value
let baseDop6Final

btnMinMain6.addEventListener('click',function(){
  dopCount6--
  dopKol6.value--
  baseDopKol6Value = dopKol6.value

  dopBase6.textContent = 'Количество баз: ' + dopKol6.value
  dopBase16.textContent = 'Количество баз: ' + dopKol6.value

  if(baseDopKol6Value <= 5){
    baseDop6Final = 0
  }else if(baseDopKol6Value > 5 && baseDopKol6Value !== 5){
    baseDop6Final -= 100
  }

  if(dopKol6.value <= 0){
    dopKol6.value = 0;
    dopBtn7.disabled = true;
  }else if(dopKol6.value > 0){
    dopBtn7.disabled = false;
  }
  
  monthPriceDop6Value = ((programm1CMonthPriceDop6 * usersValue)+(baseDop6Final))
  monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + 'р/месяц'
  yearPriceDop6Value = ((programm1CPriceDop6 * usersValue)+(baseDop6Final)) * 10
  yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + 'р/год'
  yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12) + 'р/месяц'
  sixMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + 'р/месяц'
  sixYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + 'р/год'
  sixYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12) + 'р/месяц'
})
btnMaxMain6.addEventListener('click',function(){
  dopCount6++
  dopKol6.value++
  baseDopKol6Value = dopKol6.value

  dopBase6.textContent = 'Количество баз: ' + dopKol6.value
  dopBase16.textContent = 'Количество баз: ' + dopKol6.value

  if(baseDopKol6Value <= 5){
    baseDop6Final = 0
  }else if(baseDopKol6Value > 5){
    baseDop6Final = (baseDopKol6Value * 100) - 500
  }

  if(dopKol6.value > 0){
    dopBtn7.disabled = false;
  }
  monthPriceDop6Value = ((programm1CMonthPriceDop6 * usersValue)+(baseDop6Final))
  monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + 'р/месяц'
  yearPriceDop6Value = ((programm1CPriceDop6 * usersValue)+(baseDop6Final)) * 10
  yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + 'р/год'
  yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12) + 'р/месяц'
  sixMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + 'р/месяц'
  sixYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + 'р/год'
  sixYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12) + 'р/месяц'
})


  // dopKol6.addEventListener('change',function(){
  //   if(dopSel6.value !== 0){
      // monthPriceDop6Value = ((programm1CMonthPriceDop6 * usersValue)+(baseDop6Final))
      // monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + 'р/месяц'
      // yearPriceDop6Value = ((programm1CPriceDop6 * usersValue)+(baseDop6Final)) * 10
      // yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + 'р/год'
      // yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12) + 'р/месяц'
      // sixMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + 'р/месяц'
      // sixYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + 'р/год'
      // sixYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12) + 'р/месяц'
  //   }
  //   if(dopKol6.value <= 0){
  //     dopBtn7.disabled = true;
  //     monthPrice.textContent = '' 
  //     yearPrice.textContent = ''
  //     yearMonthPrice.textContent = ''
  //   }
  // })

//!Седьмой скрытый блок
  //* Создание блока (появление - исчезание)
  let moreProg7 = document.getElementById('moreProg7')
  let dopBtn7 = document.getElementById('dopBtn7')
  let dopSel7 = document.getElementById('form-select-dop7')
  let dopKol7 = document.getElementById('exampleFormControlInputDop7')
  moreProg7.hidden = true;
  dopBtn7.disabled = true;
  dopBtn7.hidden = true;
  moreProg7.style.height = '0%';

  dopBtn7.addEventListener('click', function(){
    dopSel6.disabled = true;
    dopKol6.disabled = true;
    moreProg7.hidden = false;
    dopBtn7.hidden = true;
    dopBtn8.hidden = false;
    dopSel8.disabled = false;

    btnMinMain6.disabled = true;
    btnMaxMain6.disabled = true;

    close6.hidden = true;
  })

  dopSel7.addEventListener('change', function(e){
    dopProgMonthName7.classList.remove('d-none')
    dopProgYearName7.classList.remove('d-none')
    dopProgMonthName7.classList.add('mb-1')
    dopProgYearName7.classList.add('mb-1')
    dopBase7.classList.remove('d-none')
    dopBase17.classList.remove('d-none')
    dopBase7.classList.add('mb-1')
    dopBase17.classList.add('mb-1')

    monthPrice.textContent = '' 
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  if(e.target.value !== 0){
    dopKol7.value = ''
    dopKol7.disabled = false;
  }else{
    dopKol7.value = ''
    dopKol7.disabled = true;
  }
  })

  //* Вычисление
  //* Вычисляем процент от кол-ва баз
  // let baseDopKol7Value
  // let baseDop7Final
  // dopKol7.addEventListener('change',function(){
  //   dopBtn8.disabled = false;
  //   baseDopKol7Value = dopKol7.value
  //   if(baseDopKol7Value <= 5){
  //     baseDop7Final = 0
  //   }else if(baseDopKol7Value > 5){
  //     baseDop7Final = (baseDopKol7Value * 100) - 500
  //   }
  // })

//* Вычисляем стоимость программы на кол-во баз
let programm1CMonthPriceDop7
let programm1CPriceDop7
dopSel7.addEventListener('change', function(e){
  dopKol7.value = 0
  for(let i = 1; i <= 10; i++){
    if(e.target.value == i){
      programm1CMonthPriceDop7 = programm1CMonthPriceList[i-1];
      programm1CPriceDop7 = programm1CMonthPriceList[i-1];
      if(i == 1){
        dopProgMonthName7.textContent = '1С:Бухгалтерия 8 ПРОФ'
        dopProgYearName7.textContent = '1С:Бухгалтерия 8 ПРОФ'
      }else if(i == 2){
        dopProgMonthName7.textContent = '1С:Бухгалтерия 8 КОРП'
        dopProgYearName7.textContent = '1С:Бухгалтерия 8 КОРП'
      }else if(i == 3){
        dopProgMonthName7.textContent = '1С:Зарплата иУправление Персоналом 8'
        dopProgYearName7.textContent = '1С:Зарплата иУправление Персоналом 8'
      }else if(i == 4){
        dopProgMonthName7.textContent = '1С:Зарплата иУправление Персоналом КОРП'
        dopProgYearName7.textContent = '1С:Зарплата иУправление Персоналом КОРП'
      }else if(i == 5){
        dopProgMonthName7.textContent = '1С:Управление нашей фирмой 8'
        dopProgYearName7.textContent = '1С:Управление нашей фирмой 8'
      }else if(i == 6){
        dopProgMonthName7.textContent = '1С:Управление торговлей'
        dopProgYearName7.textContent = '1С:Управление торговлей'
      }else if(i == 7){
        dopProgMonthName7.textContent = '1С:Документооборот 8 ПРОФ'
        dopProgYearName7.textContent = '1С:Документооборот 8 ПРОФ'
      }else if(i == 8){
        dopProgMonthName7.textContent = '1С:Документооборот 8 КОРП'
        dopProgYearName7.textContent = '1С:Документооборот 8 КОРП'
      }else if(i == 9){
        dopProgMonthName7.textContent = '1С:Комплексная автоматизация 8'
        dopProgYearName7.textContent = '1С:Комплексная автоматизация 8'
      }else if(i == 10){
        dopProgMonthName7.textContent = '1С:Розница 8'
        dopProgYearName7.textContent = '1С:Розница 8'
      }
    }
  }
})

  let monthPriceDop7Value
  let yearPriceDop7Value
  let yearMonthPriceDop7Value

  let sevenMonthPriceDop1Value
  let sevenYearPriceDop1Value
  let sevenYearMonthPriceDop1Value

//!------------------------------------------
let dopCount7 = 0
dopKol7.value = 0

let baseDopKol7Value
let baseDop7Final

btnMinMain7.addEventListener('click',function(){
  dopCount7--
  dopKol7.value--
  baseDopKol7Value = dopKol7.value

  dopBase7.textContent = 'Количество баз: ' + dopKol7.value
  dopBase17.textContent = 'Количество баз: ' + dopKol7.value

  if(baseDopKol7Value <= 5){
    baseDop7Final = 0
  }else if(baseDopKol7Value > 5 && baseDopKol7Value !== 5){
    baseDop7Final -= 100
  }

  if(dopKol7.value <= 0){
    dopKol7.value = 0;
    dopBtn8.disabled = true;
  }else if(dopKol7.value > 0){
    dopBtn8.disabled = false;
  }
  
  monthPriceDop7Value = ((programm1CMonthPriceDop7 * usersValue)+(baseDop7Final))
  monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + 'р/месяц'
  yearPriceDop7Value = ((programm1CPriceDop7 * usersValue)+(baseDop7Final)) * 10
  yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + 'р/год'
  yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12) + 'р/месяц'
  sevenMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + 'р/месяц'
  sevenYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + 'р/год'
  sevenYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12) + 'р/месяц'
})
btnMaxMain7.addEventListener('click',function(){
  dopCount7++
  dopKol7.value++
  baseDopKol7Value = dopKol7.value

  dopBase7.textContent = 'Количество баз: ' + dopKol7.value
  dopBase17.textContent = 'Количество баз: ' + dopKol7.value

  if(baseDopKol7Value <= 5){
    baseDop7Final = 0
  }else if(baseDopKol7Value > 5){
    baseDop7Final = (baseDopKol7Value * 100) - 500
  }

  if(dopKol7.value > 0){
    dopBtn8.disabled = false;
  }
  monthPriceDop7Value = ((programm1CMonthPriceDop7 * usersValue)+(baseDop7Final))
  monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + 'р/месяц'
  yearPriceDop7Value = ((programm1CPriceDop7 * usersValue)+(baseDop7Final)) * 10
  yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + 'р/год'
  yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12) + 'р/месяц'
  sevenMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + 'р/месяц'
  sevenYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + 'р/год'
  sevenYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12) + 'р/месяц'
})

  // dopKol7.addEventListener('change',function(){
  //   if(dopSel7.value !== 0){
      // monthPriceDop7Value = ((programm1CMonthPriceDop7 * usersValue)+(baseDop7Final))
      // monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + 'р/месяц'
      // yearPriceDop7Value = ((programm1CPriceDop7 * usersValue)+(baseDop7Final)) * 10
      // yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + 'р/год'
      // yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12) + 'р/месяц'
      // sevenMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + 'р/месяц'
      // sevenYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + 'р/год'
      // sevenYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12) + 'р/месяц'
  //   }
  //   if(dopKol7.value <= 0){
  //     dopBtn8.disabled = true;
  //     monthPrice.textContent = '' 
  //     yearPrice.textContent = ''
  //     yearMonthPrice.textContent = ''
  //   }
  // })

//!Восьмой скрытый блок
  //* Создание блока (появление - исчезание)
  let moreProg8 = document.getElementById('moreProg8')
  let dopBtn8 = document.getElementById('dopBtn8')
  let dopSel8 = document.getElementById('form-select-dop8')
  let dopKol8 = document.getElementById('exampleFormControlInputDop8')
  moreProg8.hidden = true;
  dopBtn8.disabled = true;
  dopBtn8.hidden = true;
  moreProg8.style.height = '0%';

  dopBtn8.addEventListener('click', function(){
    dopSel7.disabled = true;
    dopKol7.disabled = true;
    moreProg8.hidden = false;
    dopBtn8.hidden = true;
    dopBtn9.hidden = false;
    dopSel9.disabled = false;

    btnMinMain7.disabled = true;
    btnMaxMain7.disabled = true;

    close7.hidden = true;
  })

  dopSel8.addEventListener('change', function(e){
    dopProgMonthName8.classList.remove('d-none')
    dopProgYearName8.classList.remove('d-none')
    dopProgMonthName8.classList.add('mb-1')
    dopProgYearName8.classList.add('mb-1')
    dopBase8.classList.remove('d-none')
    dopBase18.classList.remove('d-none')
    dopBase8.classList.add('mb-1')
    dopBase18.classList.add('mb-1')

    monthPrice.textContent = '' 
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  if(e.target.value !== 0){
    dopKol8.value = ''
    dopKol8.disabled = false;
  }else{
    dopKol8.value = ''
    dopKol8.disabled = true;
  }
  })

  //* Вычисление
  //* Вычисляем процент от кол-ва баз
  // let baseDopKol8Value
  // let baseDop8Final
  // dopKol8.addEventListener('change',function(){
  //   dopBtn9.disabled = false;
  //   baseDopKol8Value = dopKol8.value
  //   if(baseDopKol8Value <= 5){
  //     baseDop8Final = 0
  //   }else if(baseDopKol8Value > 5){
  //     baseDop8Final = (baseDopKol8Value * 100) - 500
  //   }
  // })

//* Вычисляем стоимость программы на кол-во баз
let programm1CMonthPriceDop8
let programm1CPriceDop8
dopSel8.addEventListener('change', function(e){
  dopKol8.value = 0
  for(let i = 1; i <= 10; i++){
    if(e.target.value == i){
      programm1CMonthPriceDop8 = programm1CMonthPriceList[i-1];
      programm1CPriceDop8 = programm1CMonthPriceList[i-1];
      if(i == 1){
        dopProgMonthName8.textContent = '1С:Бухгалтерия 8 ПРОФ'
        dopProgYearName8.textContent = '1С:Бухгалтерия 8 ПРОФ'
      }else if(i == 2){
        dopProgMonthName8.textContent = '1С:Бухгалтерия 8 КОРП'
        dopProgYearName8.textContent = '1С:Бухгалтерия 8 КОРП'
      }else if(i == 3){
        dopProgMonthName8.textContent = '1С:Зарплата иУправление Персоналом 8'
        dopProgYearName8.textContent = '1С:Зарплата иУправление Персоналом 8'
      }else if(i == 4){
        dopProgMonthName8.textContent = '1С:Зарплата иУправление Персоналом КОРП'
        dopProgYearName8.textContent = '1С:Зарплата иУправление Персоналом КОРП'
      }else if(i == 5){
        dopProgMonthName8.textContent = '1С:Управление нашей фирмой 8'
        dopProgYearName8.textContent = '1С:Управление нашей фирмой 8'
      }else if(i == 6){
        dopProgMonthName8.textContent = '1С:Управление торговлей'
        dopProgYearName8.textContent = '1С:Управление торговлей'
      }else if(i == 7){
        dopProgMonthName8.textContent = '1С:Документооборот 8 ПРОФ'
        dopProgYearName8.textContent = '1С:Документооборот 8 ПРОФ'
      }else if(i == 8){
        dopProgMonthName8.textContent = '1С:Документооборот 8 КОРП'
        dopProgYearName8.textContent = '1С:Документооборот 8 КОРП'
      }else if(i == 9){
        dopProgMonthName8.textContent = '1С:Комплексная автоматизация 8'
        dopProgYearName8.textContent = '1С:Комплексная автоматизация 8'
      }else if(i == 10){
        dopProgMonthName8.textContent = '1С:Розница 8'
        dopProgYearName8.textContent = '1С:Розница 8'
      }
    }
  }
})

  let monthPriceDop8Value
  let yearPriceDop8Value
  let yearMonthPriceDop8Value

  let eightMonthPriceDop1Value
  let eightYearPriceDop1Value
  let eightYearMonthPriceDop1Value
//!------------------------------------------
let dopCount8 = 0
dopKol8.value = 0

let baseDopKol8Value
let baseDop8Final

btnMinMain8.addEventListener('click',function(){
  dopCount8--
  dopKol8.value--
  baseDopKol8Value = dopKol8.value

  dopBase8.textContent = 'Количество баз: ' + dopKol8.value
  dopBase18.textContent = 'Количество баз: ' + dopKol8.value

  if(baseDopKol8Value <= 5){
    baseDop8Final = 0
  }else if(baseDopKol8Value > 5 && baseDopKol8Value !== 5){
    baseDop8Final -= 100
  }

  if(dopKol8.value <= 0){
    dopKol8.value = 0;
    dopBtn9.disabled = true;
  }else if(dopKol8.value > 0){
    dopBtn9.disabled = false;
  }
  
  monthPriceDop8Value = ((programm1CMonthPriceDop8 * usersValue)+(baseDop8Final))
  monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + 'р/месяц'
  yearPriceDop8Value = ((programm1CPriceDop8 * usersValue)+(baseDop8Final)) * 10
  yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + 'р/год'
  yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12) + 'р/месяц'
  eightMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + 'р/месяц'
  eightYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + 'р/год'
  eightYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12) + 'р/месяц'
})
btnMaxMain8.addEventListener('click',function(){
  dopCount8++
  dopKol8.value++
  baseDopKol8Value = dopKol8.value

  dopBase8.textContent = 'Количество баз: ' + dopKol8.value
  dopBase18.textContent = 'Количество баз: ' + dopKol8.value

  if(baseDopKol8Value <= 5){
    baseDop8Final = 0
  }else if(baseDopKol8Value > 5){
    baseDop8Final = (baseDopKol8Value * 100) - 500
  }

  if(dopKol8.value > 0){
    dopBtn9.disabled = false;
  }
  monthPriceDop8Value = ((programm1CMonthPriceDop8 * usersValue)+(baseDop8Final))
  monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + 'р/месяц'
  yearPriceDop8Value = ((programm1CPriceDop8 * usersValue)+(baseDop8Final)) * 10
  yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + 'р/год'
  yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12) + 'р/месяц'
  eightMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + 'р/месяц'
  eightYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + 'р/год'
  eightYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12) + 'р/месяц'
})

  // dopKol8.addEventListener('change',function(){
  //   if(dopSel8.value !== 0){
      // monthPriceDop8Value = ((programm1CMonthPriceDop8 * usersValue)+(baseDop8Final))
      // monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + 'р/месяц'
      // yearPriceDop8Value = ((programm1CPriceDop8 * usersValue)+(baseDop8Final)) * 10
      // yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + 'р/год'
      // yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12) + 'р/месяц'
      // eightMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + 'р/месяц'
      // eightYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + 'р/год'
      // eightYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12) + 'р/месяц'
  //   }
  //   if(dopKol8.value <= 0){
  //     dopBtn9.disabled = true;
  //     monthPrice.textContent = '' 
  //     yearPrice.textContent = ''
  //     yearMonthPrice.textContent = ''
  //   }
  // })

//!Девятый скрытый блок
  //* Создание блока (появление - исчезание)
  let moreProg9 = document.getElementById('moreProg9')
  let dopBtn9 = document.getElementById('dopBtn9')
  let dopSel9 = document.getElementById('form-select-dop9')
  let dopKol9 = document.getElementById('exampleFormControlInputDop9')
  moreProg9.hidden = true;
  dopBtn9.disabled = true;
  dopBtn9.hidden = true;
  moreProg9.style.height = '0%';

  dopBtn9.addEventListener('click', function(){
    dopSel8.disabled = true;
    dopKol8.disabled = true;
    moreProg9.hidden = false;
    dopBtn9.hidden = true;
    dopSel10.disabled = false;

    btnMinMain8.disabled = true;
    btnMaxMain8.disabled = true;

    close8.hidden = true;
  })

  dopSel9.addEventListener('change', function(e){
    dopProgMonthName9.classList.remove('d-none')
    dopProgYearName9.classList.remove('d-none')
    dopProgMonthName9.classList.add('mb-1')
    dopProgYearName9.classList.add('mb-1')
    dopBase9.classList.remove('d-none')
    dopBase19.classList.remove('d-none')
    dopBase9.classList.add('mb-1')
    dopBase19.classList.add('mb-1')

    monthPrice.textContent = '' 
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  if(e.target.value !== 0){
    dopKol9.value = ''
    dopKol9.disabled = false;
  }else{
    dopKol9.value = ''
    dopKol9.disabled = true;
  }
  })

  //* Вычисление
  //* Вычисляем процент от кол-ва баз
  // let baseDopKol9Value
  // let baseDop9Final
  // dopKol9.addEventListener('change',function(){
  //   baseDopKol9Value = dopKol9.value
  //   if(baseDopKol9Value <= 5){
  //     baseDop9Final = 0
  //   }else if(baseDopKol9Value > 5){
  //     baseDop9Final = (baseDopKol9Value * 100) - 500
  //   }
  // })

//* Вычисляем стоимость программы на кол-во баз
let programm1CMonthPriceDop9
let programm1CPriceDop9
dopSel9.addEventListener('change', function(e){
  dopKol9.value = 0
  for(let i = 1; i <= 10; i++){
    if(e.target.value == i){
      programm1CMonthPriceDop9 = programm1CMonthPriceList[i-1];
      programm1CPriceDop9 = programm1CMonthPriceList[i-1];
      if(i == 1){
        dopProgMonthName9.textContent = '1С:Бухгалтерия 8 ПРОФ'
        dopProgYearName9.textContent = '1С:Бухгалтерия 8 ПРОФ'
      }else if(i == 2){
        dopProgMonthName9.textContent = '1С:Бухгалтерия 8 КОРП'
        dopProgYearName9.textContent = '1С:Бухгалтерия 8 КОРП'
      }else if(i == 3){
        dopProgMonthName9.textContent = '1С:Зарплата иУправление Персоналом 8'
        dopProgYearName9.textContent = '1С:Зарплата иУправление Персоналом 8'
      }else if(i == 4){
        dopProgMonthName9.textContent = '1С:Зарплата иУправление Персоналом КОРП'
        dopProgYearName9.textContent = '1С:Зарплата иУправление Персоналом КОРП'
      }else if(i == 5){
        dopProgMonthName9.textContent = '1С:Управление нашей фирмой 8'
        dopProgYearName9.textContent = '1С:Управление нашей фирмой 8'
      }else if(i == 6){
        dopProgMonthName9.textContent = '1С:Управление торговлей'
        dopProgYearName9.textContent = '1С:Управление торговлей'
      }else if(i == 7){
        dopProgMonthName9.textContent = '1С:Документооборот 8 ПРОФ'
        dopProgYearName9.textContent = '1С:Документооборот 8 ПРОФ'
      }else if(i == 8){
        dopProgMonthName9.textContent = '1С:Документооборот 8 КОРП'
        dopProgYearName9.textContent = '1С:Документооборот 8 КОРП'
      }else if(i == 9){
        dopProgMonthName9.textContent = '1С:Комплексная автоматизация 8'
        dopProgYearName9.textContent = '1С:Комплексная автоматизация 8'
      }else if(i == 10){
        dopProgMonthName9.textContent = '1С:Розница 8'
        dopProgYearName9.textContent = '1С:Розница 8'
      }
    }
  }
})

let monthPriceDop9Value
let yearPriceDop9Value
let yearMonthPriceDop9Value

let nineMonthPriceDop1Value
let nineYearPriceDop1Value
let nineYearMonthPriceDop1Value

//!------------------------------------------
let dopCount9 = 0
dopKol9.value = 0

let baseDopKol9Value
let baseDop9Final

btnMinMain9.addEventListener('click',function(){
  dopCount9--
  dopKol9.value--
  baseDopKol9Value = dopKol9.value

  dopBase9.textContent = 'Количество баз: ' + dopKol9.value
  dopBase19.textContent = 'Количество баз: ' + dopKol9.value

  if(baseDopKol9Value <= 5){
    baseDop9Final = 0
  }else if(baseDopKol9Value > 5 && baseDopKol9Value !== 5){
    baseDop9Final -= 100
  }

  if(dopKol9.value <= 0){
    dopKol9.value = 0;
    // dopBtn10.disabled = true;
  }else if(dopKol9.value > 0){
    // dopBtn10.disabled = false;
  }
  
    monthPriceDop9Value = ((programm1CMonthPriceDop9 * usersValue)+(baseDop9Final))
    monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + monthPriceDop9Value + 'р/месяц'
    yearPriceDop9Value = ((programm1CPriceDop9 * usersValue)+(baseDop9Final)) * 10
    yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + yearPriceDop9Value + 'р/год'
    yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12 + yearPriceDop9Value/12) + 'р/месяц'
    nineMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + monthPriceDop9Value + 'р/месяц'
    nineYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + yearPriceDop9Value + 'р/год'
    nineYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12 + yearPriceDop9Value/12) + 'р/месяц'
})
btnMaxMain9.addEventListener('click',function(){
  dopCount9++
  dopKol9.value++
  baseDopKol9Value = dopKol9.value

  dopBase9.textContent = 'Количество баз: ' + dopKol9.value
  dopBase19.textContent = 'Количество баз: ' + dopKol9.value

  if(baseDopKol9Value <= 5){
    baseDop9Final = 0
  }else if(baseDopKol9Value > 5){
    baseDop9Final = (baseDopKol9Value * 100) - 500
  }

  if(dopKol9.value > 0){
    // dopBtn10.disabled = false;
  }
    monthPriceDop9Value = ((programm1CMonthPriceDop9 * usersValue)+(baseDop9Final))
    monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + monthPriceDop9Value + 'р/месяц'
    yearPriceDop9Value = ((programm1CPriceDop9 * usersValue)+(baseDop9Final)) * 10
    yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + yearPriceDop9Value + 'р/год'
    yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12 + yearPriceDop9Value/12) + 'р/месяц'
    nineMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + monthPriceDop9Value + 'р/месяц'
    nineYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + yearPriceDop9Value + 'р/год'
    nineYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12 + yearPriceDop9Value/12) + 'р/месяц'
})
// dopKol9.addEventListener('change',function(){
//   if(dopSel9.value !== 0){
    // monthPriceDop9Value = ((programm1CMonthPriceDop9 * usersValue)+(baseDop9Final))
    // monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + monthPriceDop9Value + 'р/месяц'
    // yearPriceDop9Value = ((programm1CPriceDop9 * usersValue)+(baseDop9Final)) * 10
    // yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + yearPriceDop9Value + 'р/год'
    // yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12 + yearPriceDop9Value/12) + 'р/месяц'
    // nineMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + monthPriceDop9Value + 'р/месяц'
    // nineYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + yearPriceDop9Value + 'р/год'
    // nineYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12 + yearPriceDop9Value/12) + 'р/месяц'
//   }
//   if(dopKol9.value <= 0){
//     monthPrice.textContent = '' 
//     yearPrice.textContent = ''
//     yearMonthPrice.textContent = ''
//   }
// })

//!Десятый скрытый блок
  //* Создание блока (появление - исчезание)
  let moreProg10 = document.getElementById('moreProg10')
  let dopSel10 = document.getElementById('form-select-dop10')
  let dopKol10 = document.getElementById('exampleFormControlInputDop10')
  dopKol10.disabled = true;
  moreProg10.hidden = true;
  moreProg10.style.height = '0%';

  dopSel10.addEventListener('change', function(e){
    monthPrice.textContent = '' 
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  if(e.target.value !== 0){
    dopKol10.value = ''
    dopKol10.disabled = false;
  }else{
    dopKol10.value = ''
    dopKol10.disabled = true;
  }
  })

  //* Вычисление
  //* Вычисляем процент от кол-ва баз
  let baseDopKol10Value
  let baseDop10Final
  dopKol10.addEventListener('change',function(){
    baseDopKol10Value = dopKol10.value
    if(baseDopKol10Value <= 5){
      baseDop10Final = 0
    }else if(baseDopKol10Value > 5){
      baseDop10Final = (baseDopKol10Value * 100) - 500
    }
  })

//* Вычисляем стоимость программы на кол-во баз
let programm1CMonthPriceDop10
let programm1CPriceDop10
dopSel10.addEventListener('change', function(e){
  dopKol10.value = 0;
  for(let i = 1; i <= 10; i++){
    if(e.target.value == i){
      programm1CMonthPriceDop10 = programm1CMonthPriceList[i-1];
      programm1CPriceDop10 = programm1CMonthPriceList[i-1];
      if(i == 1){
        dopProgMonthName10.textContent = '1С:Бухгалтерия 8 ПРОФ'
        dopProgYearName10.textContent = '1С:Бухгалтерия 8 ПРОФ'
      }else if(i == 2){
        dopProgMonthName10.textContent = '1С:Бухгалтерия 8 КОРП'
        dopProgYearName10.textContent = '1С:Бухгалтерия 8 КОРП'
      }else if(i == 3){
        dopProgMonthName10.textContent = '1С:Зарплата иУправление Персоналом 8'
        dopProgYearName10.textContent = '1С:Зарплата иУправление Персоналом 8'
      }else if(i == 4){
        dopProgMonthName10.textContent = '1С:Зарплата иУправление Персоналом КОРП'
        dopProgYearName10.textContent = '1С:Зарплата иУправление Персоналом КОРП'
      }else if(i == 5){
        dopProgMonthName10.textContent = '1С:Управление нашей фирмой 8'
        dopProgYearName10.textContent = '1С:Управление нашей фирмой 8'
      }else if(i == 6){
        dopProgMonthName10.textContent = '1С:Управление торговлей'
        dopProgYearName10.textContent = '1С:Управление торговлей'
      }else if(i == 7){
        dopProgMonthName10.textContent = '1С:Документооборот 8 ПРОФ'
        dopProgYearName10.textContent = '1С:Документооборот 8 ПРОФ'
      }else if(i == 8){
        dopProgMonthName10.textContent = '1С:Документооборот 8 КОРП'
        dopProgYearName10.textContent = '1С:Документооборот 8 КОРП'
      }else if(i == 9){
        dopProgMonthName10.textContent = '1С:Комплексная автоматизация 8'
        dopProgYearName10.textContent = '1С:Комплексная автоматизация 8'
      }else if(i == 10){
        dopProgMonthName10.textContent = '1С:Розница 8'
        dopProgYearName10.textContent = '1С:Розница 8'
      }
    }
  }
})

let monthPriceDop10Value
let yearPriceDop10Value
let yearMonthPriceDop10Value

let tenMonthPriceDop1Value
let tenYearPriceDop1Value
let tenYearMonthPriceDop1Value
dopKol10.addEventListener('change',function(){
  if(dopSel10.value !== 0){
    monthPriceDop10Value = ((programm1CMonthPriceDop10 * usersValue)+(baseDop10Final))
    console.log(monthPriceDop10Value);
    monthPrice.textContent = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + monthPriceDop9Value + monthPriceDop10Value + 'р/месяц'
    yearPriceDop10Value = ((programm1CPriceDop10 * usersValue)+(baseDop10Final)) * 10
    yearPrice.textContent = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + yearPriceDop9Value + yearPriceDop10Value + 'р/год'
    yearMonthPrice.textContent = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12 + yearPriceDop9Value/12 + yearPriceDop10Value/12) + 'р/месяц'
    tenMonthPriceDop1Value = monthPriceValue + monthPriceDop1Value + monthPriceDop2Value + monthPriceDop3Value + monthPriceDop4Value + monthPriceDop5Value + monthPriceDop6Value + monthPriceDop7Value + monthPriceDop8Value + monthPriceDop9Value + monthPriceDop10Value + 'р/месяц'
    tenYearPriceDop1Value = yearPriceValue + yearPriceDop1Value + yearPriceDop2Value + yearPriceDop3Value + yearPriceDop4Value + yearPriceDop5Value + yearPriceDop6Value + yearPriceDop7Value + yearPriceDop8Value + yearPriceDop9Value + yearPriceDop10Value + 'р/год'
    tenYearMonthPriceDop1Value = Math.round(yearPriceValue/12 + yearPriceDop1Value/12 + yearPriceDop2Value/12 + yearPriceDop3Value/12 + yearPriceDop4Value/12 + yearPriceDop5Value/12 + yearPriceDop6Value/12 + yearPriceDop7Value/12 + yearPriceDop8Value/12 + yearPriceDop9Value/12 + yearPriceDop10Value/12) + 'р/месяц'
  }
  if(dopKol10.value <= 0){
    monthPrice.textContent = '' 
    yearPrice.textContent = ''
    yearMonthPrice.textContent = ''
  }
})

//! Доп услуги ----------------------------------------------------
let region = document.getElementById('dop-reg')
let ipCheck = document.getElementById('ip-check')
let urCheck = document.getElementById('ur-check')

ipCheck.disabled = true;
urCheck.disabled = true;

let dopServ1 = document.getElementById('dopserv1')
let dopServ2 = document.getElementById('dopserv2')
let dopServ3 = document.getElementById('dopserv3')
let dopServ4 = document.getElementById('dopserv4')
let checkboxStatus1

let dopIp = document.getElementById('dop-ip')
let dopUr = document.getElementById('dop-ur')
let dopRegBlock = document.getElementById('dop-reg-block')

dopIp.hidden = true;
dopUr.hidden = true;
dopRegBlock.hidden = true;

let dopServPrice

let dopServ1Int = 1
dopServ1.addEventListener('click',function(){
  dopServ1Int += 1
  if(dopServ1Int % 2 == 0){
    dopIp.hidden = false;
    dopUr.hidden = false;
    dopRegBlock.hidden = false;
    region.disabled = false;
  }else if(dopServ1Int % 2 !== 0){
    dopIp.hidden = true;
    dopUr.hidden = true;
    dopRegBlock.hidden = true;
    dopYearPrice.textContent = '0 р/год'
    dop1.textContent = ''
    dop2.textContent = ''
    dop3.textContent = ''
    dop4.textContent = ''
    $('#dopserv2').prop('checked',false)
    $('#dopserv3').prop('checked',false)
    $('#dopserv4').prop('checked',false)
    dopServ1Int = 1
    dopServ2Int = 1
    dopServ3Int = 1
    dopServ4Int = 1
    region.value = 0;
    finalDopPrice = 0
  }else if(dopServ1Int > 1 && dopServ1Int % 2 !== 0){
    region.disabled = true;
    $('#ur-check').prop('checked',false)
    $('#ip-check').prop('checked',false)
    dopYearPrice.textContent = ''
    region.value = 0;
    $('#dopserv2').prop('checked',false)
    $('#dopserv3').prop('checked',false)
    $('#dopserv4').prop('checked',false)
    finalDopPrice = 0
    dop2.textContent = '' 
    dop3.textContent = ''
    dop4.textContent = ''
    dopServ2Int = 1
    dopServ3Int = 1
    dopServ4Int = 1
    dop1.textContent = '' 
  }
})



let finalDopPrice = 0;
let ipPrice;
let urPrice;
region.addEventListener('change',function(e){
  dopYearPrice.textContent = ''
  dop2.textContent = '' 
  dop3.textContent = ''
  dop4.textContent = ''
  $('#ur-check').prop('checked',false)
  $('#ip-check').prop('checked',false)
  $('#dopserv2').prop('checked',false)
  $('#dopserv3').prop('checked',false)
  $('#dopserv4').prop('checked',false)
  finalDopPrice = 0;
  dopServ2Int = 1
  dopServ3Int = 1
  dopServ4Int = 1
  dop1.textContent = '' 
  ipCheck.disabled = false;
  urCheck.disabled = false;
  if(e.target.value <= 7){
    ipPrice = 1500;
    urPrice = 3900;
  }else if(e.target.value > 7 && e.target.value <= 67){
    ipPrice = 1800;
    urPrice = 4900;
  }else if(e.target.value > 67 && e.target.value <= 87 ){
    ipPrice = 2200;
    urPrice = 5900;
  }else if(e.target.value == 88){
    ipPrice = 3200;
    urPrice = 6900;
  }
})

let ipCheckboxStatus;
let urCheckboxStatus;

$('#ip-check').on('click', function () {
  ipCheckboxStatus = $(this).prop('checked')
  $('#ur-check').prop('checked',false)
  $('#dopserv2').prop('checked',false)
  $('#dopserv3').prop('checked',false)
  $('#dopserv4').prop('checked',false)
  dop1.textContent = '1С-Отчетность' 
  dop2.textContent = '' 
  dop3.textContent = ''
  dop4.textContent = ''
  finalDopPrice = 0;
  dopServ2Int = 1
  dopServ3Int = 1
  dopServ4Int = 1
  finalDopPrice = ipPrice
  dopYearPrice.textContent = finalDopPrice + 'р/год'

})
$('#ur-check').on('click', function () {
  urCheckboxStatus = $(this).prop('checked')
  $('#ip-check').prop('checked',false)
  $('#dopserv2').prop('checked',false)
  $('#dopserv3').prop('checked',false)
  $('#dopserv4').prop('checked',false)
  dop1.textContent = '1С-Отчетность' 
  dop2.textContent = '' 
  dop3.textContent = ''
  dop4.textContent = ''
  finalDopPrice = 0;
  dopServ2Int = 1
  dopServ3Int = 1
  dopServ4Int = 1
  finalDopPrice = urPrice
  dopYearPrice.textContent = finalDopPrice + 'р/год'
})


let dopServ2Int = 1
dopServ2.addEventListener('click',function(){
  dopServ2Int += 1
  if(dopServ2Int % 2 == 0){
    finalDopPrice += 3000
    dopYearPrice.textContent = finalDopPrice + 'р/год'
    dop2.textContent = '1СПАРК риски'
  }else if(dopServ2Int > 1 && dopServ2Int % 2 !== 0){
    finalDopPrice -= 3000
    dopYearPrice.textContent = finalDopPrice + 'р/год'
    dop2.textContent = ''
  }
})

let dopServ3Int = 1
dopServ3.addEventListener('click',function(){
  dopServ3Int += 1
  if(dopServ3Int % 2 == 0){
    finalDopPrice += 22500
    dopYearPrice.textContent = finalDopPrice + 'р/год'
    dop3.textContent = '1СПАРК риски +'
  }else if(dopServ3Int > 1 && dopServ3Int % 2 !== 0){
    finalDopPrice -= 22500
    dopYearPrice.textContent = finalDopPrice + 'р/год'
    dop3.textContent = ''
  }
})

let dopServ4Int = 1
dopServ4.addEventListener('click',function(){
  dopServ4Int += 1
  if(dopServ4Int % 2 == 0){
    finalDopPrice += 4800
    dopYearPrice.textContent = finalDopPrice + 'р/год'
    dop4.textContent = '1С Контрагент'
  }else if(dopServ4Int > 1 && dopServ4Int % 2 !== 0){
    finalDopPrice -= 4800
    dopYearPrice.textContent = finalDopPrice + 'р/год'
    dop4.textContent = ''
  }
})

let programmNameMonth = document.getElementById('prog-name-month')
let userNameMonth = document.getElementById('users-name-month')
let baseNameMonth = document.getElementById('base-name-month')

let programmNameYear = document.getElementById('prog-name-year')
let userNameYear = document.getElementById('users-name-year')
let baseNameYear = document.getElementById('base-name-year')

let dop1 = document.getElementById('dop1');
let dop2 = document.getElementById('dop2');
let dop3 = document.getElementById('dop3');
let dop4 = document.getElementById('dop4');

let tarifBlock = document.getElementById('tarif-block')
tarifBlock.hidden = true;

close1.addEventListener('click',function(){
  monthPrice.textContent = mainMonthPriceValue + 'р/месяц'
  yearPrice.textContent = mainYearPriceValue + 'р/год'
  yearMonthPrice.textContent = mainYearMonthPriceValue + 'р/месяц'

  dopBtn1.hidden = true;
  dopBtn2.disabled = true;
  dopBtn2.hidden = true;
  dopSel1.value = 0;
  dopKol1.value = 0;
  dopKol1.disabled = true;
  moreProg1.hidden = true;
  dopBtn1.hidden = false;
  //*разблокируем первый выбор
        programm1C.disabled= false;
        baseKol.disabled = false;
        users.disabled = false;
        firstBtnMinMain.disabled = false;
        firstBtnMaxMain.disabled = false;
        secondBtnMinMain.disabled = false;
        secondBtnMaxMain.disabled = false;
        moreProg1.style.height = '0%';
  dopProgMonthName1.textContent = ''
  dopProgYearName1.textContent = ''

  dopBase1.textContent = ''
  dopBase11.textContent = ''

  dopProgMonthName1.classList.add('d-none')
  dopProgYearName1.classList.add('d-none')
  dopProgMonthName1.classList.remove('mb-1')
  dopProgYearName1.classList.remove('mb-1')
  
  dopBase1.classList.add('d-none')
  dopBase11.classList.add('d-none')
  dopBase1.classList.remove('mb-1')
  dopBase11.classList.remove('mb-1')
})

close2.addEventListener('click',function(){
  monthPrice.textContent = oneMonthPriceDop1Value
  yearPrice.textContent = oneYearPriceDop1Value
  yearMonthPrice.textContent = oneYearMonthPriceDop1Value

  dopBtn2.hidden = true;
  dopBtn3.hidden = true;
  dopKol2.value = 0;
  dopSel2.value = 0;
  moreProg2.hidden = true;
  dopBtn2.hidden = false;
  dopKol1.disabled = false;
  dopSel1.disabled = false;
  btnMinMain1.disabled = false;
  btnMaxMain1.disabled = false;

  dopProgMonthName2.textContent = ''
  dopProgYearName2.textContent = ''
  
  close1.hidden = false;

  dopBase2.textContent = ''
  dopBase12.textContent = ''

  dopProgMonthName2.classList.add('d-none')
  dopProgYearName2.classList.add('d-none')
  dopProgMonthName2.classList.remove('mb-1')
  dopProgYearName2.classList.remove('mb-1')
  
  dopBase2.classList.add('d-none')
  dopBase12.classList.add('d-none')
  dopBase2.classList.remove('mb-1')
  dopBase12.classList.remove('mb-1')
})

close3.addEventListener('click',function(){
  monthPrice.textContent = twoMonthPriceDop1Value
  yearPrice.textContent = twoYearPriceDop1Value
  yearMonthPrice.textContent = twoYearMonthPriceDop1Value

  dopBtn4.hidden = true;
  dopBtn4.disabled = true;
  dopBtn3.disabled = false;

  dopBtn4.disabled = true;
  dopBtn4.hidden = true;
  dopKol3.value = 0;
  dopSel3.value = 0;
  moreProg3.hidden = true;
  dopBtn3.hidden = false;
  dopKol2.disabled = false;
  dopSel2.disabled = false;
  btnMinMain2.disabled = false;
  btnMaxMain2.disabled = false;


  dopProgMonthName3.textContent = ''
  dopProgYearName3.textContent = ''
  
  close2.hidden = false;

  dopProgMonthName3.classList.add('d-none')
  dopProgYearName3.classList.add('d-none')
  dopProgMonthName3.classList.remove('mb-1')
  dopProgYearName3.classList.remove('mb-1')
  
  dopBase3.classList.add('d-none')
  dopBase13.classList.add('d-none')
  dopBase3classList.remove('mb-1')
  dopBase13.classList.remove('mb-1')
})

close4.addEventListener('click',function(){
  monthPrice.textContent = threeMonthPriceDop1Value
  yearPrice.textContent = threeYearPriceDop1Value
  yearMonthPrice.textContent = threeYearMonthPriceDop1Value

  dopBtn5.hidden = true;
  dopBtn5.disabled = true;
  dopBtn4.disabled = false;

  dopBtn4.disabled = false;
  dopBtn3.disabled = true;
  dopBtn3.hidden = true;
  dopKol4.value = 0;
  dopSel4.value = 0;
  moreProg4.hidden = true;
  dopBtn4.hidden = false;
  dopKol3.disabled = false;
  dopSel3.disabled = false;

  btnMinMain3.disabled = false;
  btnMaxMain3.disabled = false;

  dopProgMonthName4.textContent = ''
  dopProgYearName4.textContent = ''
  
  close3.hidden = false;

  dopProgMonthName4.classList.add('d-none')
  dopProgYearName4.classList.add('d-none')
  dopProgMonthName4.classList.remove('mb-1')
  dopProgYearName4.classList.remove('mb-1')
  
  dopBase4.classList.add('d-none')
  dopBase14.classList.add('d-none')
  dopBase4classList.remove('mb-1')
  dopBase14.classList.remove('mb-1')

})

close5.addEventListener('click',function(){
  monthPrice.textContent = fourMonthPriceDop1Value
  yearPrice.textContent = fourYearPriceDop1Value
  yearMonthPrice.textContent = fourYearMonthPriceDop1Value

  dopBtn6.hidden = true;
  dopBtn6.disabled = true;
  dopBtn5.disabled = false;

  dopBtn4.disabled = true;
  dopBtn4.hidden = true;
  dopKol5.value = 0;
  dopSel5.value = 0;
  moreProg5.hidden = true;
  dopBtn5.hidden = false;
  dopKol4.disabled = false;
  dopSel4.disabled = false;
  btnMinMain4.disabled = false;
  btnMaxMain4.disabled = false;

  dopProgMonthName5.textContent = ''
  dopProgYearName5.textContent = ''
  
  close4.hidden = false;

  dopProgMonthName5.classList.add('d-none')
  dopProgYearName5.classList.add('d-none')
  dopProgMonthName5.classList.remove('mb-1')
  dopProgYearName5.classList.remove('mb-1')
  
  dopBase5.classList.add('d-none')
  dopBase15.classList.add('d-none')
  dopBase5classList.remove('mb-1')
  dopBase15.classList.remove('mb-1')

})

close6.addEventListener('click',function(){
  monthPrice.textContent = fiveMonthPriceDop1Value
  yearPrice.textContent = fiveYearPriceDop1Value
  yearMonthPrice.textContent = fiveYearMonthPriceDop1Value

  dopBtn7.hidden = true;
  dopBtn7.disabled = true;
  dopBtn6.disabled = false;

  dopBtn5.disabled = true;
  dopBtn5.hidden = true;
  dopKol6.value = 0;
  dopSel6.value = 0;
  moreProg6.hidden = true;
  dopBtn6.hidden = false;
  dopKol5.disabled = false;
  dopSel5.disabled = false;
  btnMinMain5.disabled = false;
  btnMaxMain5.disabled = false;

  dopProgMonthName6.textContent = ''
  dopProgYearName6.textContent = ''
  
  close5.hidden = false;

  dopProgMonthName6.classList.add('d-none')
  dopProgYearName6.classList.add('d-none')
  dopProgMonthName6.classList.remove('mb-1')
  dopProgYearName6.classList.remove('mb-1')
  
  dopBase6.classList.add('d-none')
  dopBase16.classList.add('d-none')
  dopBase6classList.remove('mb-1')
  dopBase16.classList.remove('mb-1')
  
})

close7.addEventListener('click',function(){
  monthPrice.textContent = sixMonthPriceDop1Value
  yearPrice.textContent = sixYearPriceDop1Value
  yearMonthPrice.textContent = sixYearMonthPriceDop1Value

  dopBtn8.hidden = true;
  dopBtn8.disabled = true;
  dopBtn7.disabled = false;

  dopBtn6.disabled = true;
  dopBtn6.hidden = true;
  dopKol7.value = 0;
  dopSel7.value = 0;
  moreProg7.hidden = true;
  dopBtn7.hidden = false;
  dopKol6.disabled = false;
  dopSel6.disabled = false;

  btnMinMain6.disabled = false;
  btnMaxMain6.disabled = false;

  dopProgMonthName7.textContent = ''
  dopProgYearName7.textContent = ''
  
  close6.hidden = false;

  dopProgMonthName7.classList.add('d-none')
  dopProgYearName7.classList.add('d-none')
  dopProgMonthName7.classList.remove('mb-1')
  dopProgYearName7.classList.remove('mb-1')
  
  dopBase7.classList.add('d-none')
  dopBase17.classList.add('d-none')
  dopBase7classList.remove('mb-1')
  dopBase17.classList.remove('mb-1')
})

close8.addEventListener('click',function(){
  console.log(123);
  monthPrice.textContent = sevenMonthPriceDop1Value
  yearPrice.textContent = sevenYearPriceDop1Value
  yearMonthPrice.textContent = sevenYearMonthPriceDop1Value

  dopBtn9.hidden = true;
  dopBtn9.disabled = true;
  dopBtn8.disabled = false;

  dopBtn7.disabled = true;
  dopBtn7.hidden = true;
  dopKol8.value = 0;
  dopSel8.value = 0;
  moreProg8.hidden = true;
  dopBtn8.hidden = false;
  dopKol7.disabled = false;
  dopSel7.disabled = false;

  btnMinMain7.disabled = false;
  btnMaxMain7.disabled = false;

  dopProgMonthName8.textContent = ''
  dopProgYearName8.textContent = ''
  
  close7.hidden = false;

  dopProgMonthName8.classList.add('d-none')
  dopProgYearName8.classList.add('d-none')
  dopProgMonthName8.classList.remove('mb-1')
  dopProgYearName8.classList.remove('mb-1')
  
  dopBase8.classList.add('d-none')
  dopBase18.classList.add('d-none')
  dopBase8classList.remove('mb-1')
  dopBase18.classList.remove('mb-1')
})

close9.addEventListener('click',function(){
  dopProgMonthName9.classList.add('d-none')
  dopProgYearName9.classList.add('d-none')
  dopProgMonthName9.classList.remove('mb-1')
  dopProgYearName9.classList.remove('mb-1')
  
  dopBase9.classList.add('d-none')
  dopBase19.classList.add('d-none')
  dopBase9.classList.remove('mb-1')
  dopBase19.classList.remove('mb-1')

  monthPrice.textContent = eightMonthPriceDop1Value
  yearPrice.textContent = eightYearPriceDop1Value
  yearMonthPrice.textContent = eightYearMonthPriceDop1Value

  dopBtn9.disabled = false;

  dopBtn8.hidden = true;
  dopKol9.value = 0;
  dopSel9.value = 0;
  moreProg9.hidden = true;
  dopBtn9.hidden = false;
  dopKol8.disabled = false;
  dopSel8.disabled = false;

  btnMinMain8.disabled = false;
  btnMaxMain8.disabled = false;

  dopProgMonthName9.textContent = ''
  dopProgYearName9.textContent = ''
  
  close8.hidden = false;
})

close10.addEventListener('click',function(){
  monthPrice.textContent = nineMonthPriceDop1Value
  yearPrice.textContent = nineYearPriceDop1Value
  yearMonthPrice.textContent = nineYearMonthPriceDop1Value

  dopBtn9.disabled = true;
  dopBtn9.hidden = true;
  dopKol10.value = 0;
  dopSel10.value = 0;
  moreProg10.hidden = true;
  dopKol9.disabled = false;
  dopSel9.disabled = false;

  dopProgMonthName10.textContent = ''
  dopProgYearName10.textContent = ''
  
})



