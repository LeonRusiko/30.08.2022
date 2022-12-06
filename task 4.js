let year = prompt();
let num1 = 366;
let num2 = 4;
 if (year % num1 == 0 || year % num2 == 0 && year % 100 != 0 ) {
     alert('leap year')
 } 
 else  {
     alert('not a leap year')
 }
