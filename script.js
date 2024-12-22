








//1. Write a js program to find maximum between two numbers.
//var num1 = prompt ("Enter a 1st Number");
//var num2 = prompt ("Enter a 2nd Number");
//if(num1>=0|| num1<=0 || num2>=0|| num2<=0 ){
 //if (num1 > num2) { alert ("1st number is greater 2nd")}
 // else if(num1 < num2) { alert ("2nd number is greater 1st")}
//else if(num1 == num2) {alert ("1st number = 2nd number")}}
//else{alert("Enter a Number please.")}





//2. Write a js program to find maximum between three numbers.
//var number1 = prompt("Enter 1st Number")
//var number2 = prompt("Enter 2nd Number")
//var number3 = prompt("Enter 3rd Number")
//if (number1>number2 && number1>number3) {
 //   alert("1st Number is Greater")
//}
//else if (number1<number2 && number2>number3) {
  //  alert("2nd Number is Greater")
//}else if (number1<number3 && number2<number3) {
 //   alert("3rd Number is Greater")
//}
//else if (number2==number1==number3){
 //   alert("1st number = 2nd number = 3rd number  ")
//}






//3. Write a js program to check whether a number is negative, positive or zero.
//var userInput = prompt("Enter to Check a Number.")
//if(userInput>=0 || userInput<=0){
//if (userInput<0) {
 //   alert("Number is Negative.")
//}
//else if (userInput>0) {
 //   alert("Number is Postive.")
//}else if (userInput==0) {
 //   alert("Number is Zero.")
//}}
//else{alert("Enter a Number plaese.")}




//4. Write a js program to check whether a number is divisible by 5 and 11 or not.
//var userNumber = prompt("Enter a Number to check whether divisible by 5 or 11.")
//if (userNumber%5==0) {
//   alert("Number is divisible by '5'.")
//}
//else if (userNumber%11==0) {
//    alert("Number is divisible by '11'.")
//}
//else if (userNumber%5 !=0||userNumber%11 !=0) {
//    alert("Number is neither divisible by '5' and '11'. ")
//}





//5. Write a js program to check whether a number is even or odd.
//var NUMBER = prompt("Enter a Number to Check either Even or Odd. ")
//if (NUMBER % 2 == 0) {
 //   alert("Number is Even.")
//}
//else if (NUMBER % 2 != 0){alert("Number is Odd.")}






//6. Write a js program to check whether a year is leap year or not.a js program to check whether a character is alphabet or not.
//var leapYear = prompt("Enter a year to check it whether is it Leap year or not.")
//if (leapYear%4 == 0)
//{  alert("This is a Leap year.")}
//else 
//{alert("This is not a Leap years")}






//12. Write a js program to input month number and print number of days in that month.
// var monthNumber =  prompt("Enter a month number between (1 to 12) or ( Jan, Feb, Mar, May, Jun, Jul, Aug, Sep, oct, Nov, Dec )to find number of days in it.")
 
// if(monthNumber==1 || monthNumber=="Jan" )
// {
//   alert("31 Days")
// }
// else if(monthNumber==2  || monthNumber=="Feb" )
//   {
//     alert("28 or 29 Days") }
//  else if(monthNumber==3  || monthNumber=="Jan")
//   {
//     alert("31 Days")
//   }else if(monthNumber==4  || monthNumber=="Mar")
//     {
//       alert("30 Days")
//     }else if(monthNumber==5  || monthNumber=="May")
//       {
//         alert("31 Days")
//       }else if(monthNumber==6  || monthNumber=="Jun")
//         {
//           alert("30 Days")
//         }else if(monthNumber==7  || monthNumber=="jul")
//           {
//             alert("31 Days")
//           }else if(monthNumber==8  || monthNumber=="Aug")
//             {
//               alert("31 Days")
//             }else if(monthNumber==9  || monthNumber=="Sep")
//               {
//                 alert("30 Days")
//               }else if(monthNumber==10  || monthNumber=="Oct")
//                 {
//                   alert("31 Days")
//                 }else if(monthNumber==11  || monthNumber=="Nov")
//                   {
//                     alert("30 Days")
//                   }else if(monthNumber==12  || monthNumber=="Dec")
//                     {
//                       alert("31")
//                     }
// else{alert("Enter a valid Number.")}





//14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
//var triangle = alert("Enter three angles to check, Triangle is valid or not.")
//var a =  parseInt(prompt("Enter First anlge."))
//var b =  parseInt(prompt("Enter Second angle."))
//var c = parseInt(prompt("Enter Third angle."))
//var abc = a+b+c
//if(a>0 && b>0 && c>0){
 //if (abc === 180) {
//alert("Triangle is Valid.")
//}
//else  {
  //alert("Trianlge is not Valid.")
//}
//}
//else  {
 // alert("Trianlge is not Valid.")
//}



//15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
//var sideTri = alert("Enter three side of tiangle and Check whether a triangle is Valid or not.")
//var s1 = parseInt(prompt("Enter 1st side."))
//var s2 = parseInt(prompt("Enter 2nd side."))
//var s3 = parseInt(prompt("Enter 3rd side."))
//if (s1>0 && s2>0 && s3>0) {
  //if (s1+s2>s3 && s2+s3>s1 && s3+s1>s2) {
  // alert("Triangle is Valid.")}
  // else{alert("Triangle is not valid.")}
//}
//else{alert("Triangle is not valid.")}




//16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

//var triAngle = alert("Check Triangle is either equilateral, isosceles or scalene triangle. ")
//var Ang1 = prompt("Enter Length of 1st side.")
//var Ang2 = prompt("Enter Length of 2nd side.")
//var Ang3 = prompt("Enter Length of 3rd side.")
//if(Ang1>0 && Ang2>0 && Ang3>0)
//{
//if (Ang1==Ang2==Ang3)
//{
 // alert("Triangle is Eqilateral.")
//}
//else if(Ang1==Ang2||Ang2==Ang3||Ang3==Ang1)
//{alert("Triangle is Isoscele.")}
//else if(Ang1 !=Ang2 && Ang2 !=Ang3 &&Ang3 !=Ang1)
//{alert("Trianlge is Scalene.")}
//}
//else{alert("Tianlge does not exist.")}




 
//18. Write a js program to calculate profit or loss.
//var calculate = alert("Enter amounts to check are you in Profit or Loss")
//var invest = prompt("Enter Invest amount.")
//var sales = prompt("Enter Sales amount.")
//var cal = sales - invest
// alert(cal )
//if(invest>=0 && sales>=0){
 // if(invest<sales){
 //   alert("you are in profit.")
 //}
 //   else if(invest>sales){
 //      alert("you are in loss.")
 //     }
 //     else if(invest == sales){
 //       alert("you are not in profit or loss.")
 //    }}
 //     else{alert("Enter a valid number. ")}


 //19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
//Percentage >= 90% : Grade A
//Percentage >= 80% : Grade B
//Percentage >= 70% : Grade C
//Percentage >= 60% : Grade D
//Percentage >= 40% : Grade E
//Percentage < 40% : Grade F


//physics
// var per = alert("Enter marks of subjects and calculate percentage and grade also.")
// var physics = prompt("Enter Physics marks.")
// var tphy = prompt ("total")
// var phy = physics * 100 / tphy
// alert(phy)
//  if(phy>=90 && phy<=100) {alert( "Grade A")}
// else if (phy>=80 && phy<=89){alert("Grade B")}
// else if (phy>=70 && phy<=79){alert("Grade C")}
// else if (phy>=60 && phy<=69){alert("Grade D")}
// else if (phy>=40 && phy<=59){alert("Grade E")}
// else if (phy<40 && phy>=0){alert("Grade F")}


// //chemistry
// var per = alert("Enter marks of subjects and calculate percentage and grade also.")
// var chemistry = prompt("Enter Chemistry marks.")
// var tchm = prompt ("total")
// var chm = physics * 100 / tchm
// alert(chm)
//  if(chm>=90 && chm<=100) {alert( "Grade A")}
// else if (chm>=80 && chm<=89){alert("Grade B")}
// else if (chm>=70 && chm<=79){alert("Grade C")}
// else if (chm>=60 && chm<=69){alert("Grade D")}
// else if (chm>=40 && chm<=59){alert("Grade E")}
// else if (chm<40 && chm>=0){alert("Grade F")} 


//math
// var per = alert("Enter marks of subjects and calculate percentage and grade also.")
// var math = prompt("Enter Math marks.")
// var tmth = prompt ("total")
// var mth = physics * 100 / tmth
// alert(mth)
//  if(mth>=90 && mth<=100) {alert( "Grade A"  )}
// else if (mth>=80 && mth<=89){alert("Grade B")}
// else if (mth>=70 && mth<=79){alert("Grade C")}
// else if (mth>=60 && mth<=69){alert("Grade D")}
// else if (mth>=40 && mth<=59){alert("Grade E")}
// else if (mth<40 && mth>=0){alert("Grade F")}


//computer
// var per = alert("Enter marks of subjects and calculate percentage and grade also.")
// var computer = prompt("Enter Computer marks.")
// var tcmp = prompt ("total")
// var cmp = physics * 100 / tcmp
// alert(cmp)
//  if(cmp>=90 && cmp<=100) {alert( "Grade A")}
// else if (cmp>=80 && cmp<=89){alert("Grade B")}
// else if (cmp>=70 && cmp<=79){alert("Grade C")}
// else if (cmp>=60 && cmp<=69){alert("Grade D")}
//else if (cmp>=40 && cmp<=59){alert("Grade E")}
//else if (cmp<40 && cmp>=0){alert("Grade F")}



// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
 
// var charge = prompt("Enter electricity unit charges and Calculate the bill in Rupees.")
// var unit50 =  charge* 0.50 
// var bill1 = 20*unit50 / 100 + unit50

// var unit100 = charge* 0.75
// var bill2 = 20*unit100/100+unit100

// var unit250 = charge* 1.20
// var bill3 = 20* unit250/100 + unit250

// var unit = charge* 1.50
// var bill4 = 20* unit/ 100 + unit
// if(charge>=0 || charge <=0){
// if(charge>=0 && charge<=50)
// {
//   alert(bill1)
// }
// if(charge>=51 && charge<=100)
//   {
//     alert(bill2)
//   }
// if(charge>=101 && charge<=250)
// {
//   alert(bill3)
// }
// if(charge>250)
// {
//   alert(bill4)
// }}
// else{alert("Enter a Valid number.")}








