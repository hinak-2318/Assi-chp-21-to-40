// Chapter 21 to 25

// Q # 1
// var first = prompt("");
// var last = prompt("");
// var fullName = console.log(first + last);



// Q # 2
// var a = prompt("");
// document.write("My favorite phone is: " + a);



// Q # 3
// var text = "Pakistani";
// var a = text.indexOf("n");
// document.write("Index of 'n': " + a);



// Q # 4
// var text = "Hello World";
// var a = text.lastIndexOf("l");
// document.write("Last index of 'l': " + a);



// Q # 5
// var myArray = "Pakistani";
// document.write( "Character at index 3: " +  myArray[3]);



// Q # 6
// var firstName = "Sarfaraz";
// var lastName = "Ahmed"
// var fullName = (firstName+ " " + lastName);
// document.write(fullName);



// Q # 7
// var a = "he lives in hyderabad"
// var b = "islamabad"
// var newText = a.replace("hyderabad", "islamabad");
// document.write( "City: hyderabad <br> After replacement: " + newText);



// Q # 8
// var text = "Ali and Sami are best friends. They play cricket and football together";
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "and") {
//     text = text.slice(0, i) + "&" + text.slice(i + 3);
//     }
// }
// document.write(text);



// Q # 9
// var integerString = "472"
// var num = Number(integerString);
// document.write( ' Value String: "472" <br> Number: ' + num);



// Q # 10
// var text = prompt("Enter a text")
// console.log(text.toUpperCase());



// Q # 11
// var text = prompt("Enter a text");
// console.log(text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase());



// Q # 12
// var num = 35.36;
// var numToString = num.toString();
// document.write( "Number: " + numToString);






// Chapter 26 to 30

// Q # 1 (a)
// var a = 3.45214
// document.write("number: 3.45214");

// // Q # 1 (b)
// var a = Math.round(3.45214);
// document.write("round off value: " + a);

// // Q # 1 (c)
// var a = Math.floor(3,45214);
// document.write("floor value: " + a);

// // Q # 1 (d)
// var a = Math.ceil(3.45214);
// document.write("ceil value: " + a);



// Q # 2 (a)
// var a = -2.673
// document.write("number: -2.673");

// Q # 2 (b)
// var a = Math.round(-2.673);
// document.write("round off value: " + a);

// Q # 2 (c)
// var a = Math.floor(-2.673);
// document.write("floor value: " + a);

// Q # 2 (d)
// var a = Math.ceil(-2.673);
// document.write("ceil value: " + a);



// Q # 3
// var value = Math.abs(-4);
// document.write("First Test Value : " + value );
// var value = Math.abs(-4);
// document.write("<br />Second Test Value : " + value );
// var value = Math.abs(5);
// document.write("<br />Third Test Value : " + value );



// Q # 4
// var dice = Math.floor(Math.random() * 6 ) + 1;
// console.log('You rolled a ' + dice);



// Q # 5
// var headsUser = prompt("Enter heads User name");
// var tailsUser = prompt("Enter tails User name");
// var number = Math.floor() * 2;
// var floor = Math.floor(number);
// if (floor ===0){
//     alert("heads " +  headsUser + " win the toss ");
// }

// else{
//     alert("tails " +  tailsUser  + " win the toss ");
// }



// Q # 6
// var bigDecimal = Math.random();
// var improvedNum = ((bigDecimal * 100) + 1);
// var numberOfStars = Math.floor(improvedNum);
// document.write(numberOfStars);



// Q # 8
// var num = Math.ceil(Math.random() * 10);
// alert(num);
//  var gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    alert('Matched');
//   else
//    alert('Not matched, the number was '+gnum);



// Chapter 31 to 34

// Q # 1
// var a = new Date();
// console.log(a);



// Q # 2
// var m = ["january","fe4bruary","march","april","may","june","july","august","september","october","november","december"];
// var a = new Date();
// var b = a.getMonth();
// var thisMonth = m[b];
// alert("Current month: " + thisMonth);



// Q # 3
// var w = ["sun","mon","tue","wed","thu","fri","sat"];
// var a = new Date();
// var b = a.getDay();
// var today = w[b];
// alert("Today is " + today);



// Q # 4
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }



// Q # 5
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === 13)



// Q # 7
// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }



// Q # 8
// var lastday = function(y,m){
// return  new Date(y, m +1, 0).getDate();
// }
// console.log(lastday(2020,0));
// console.log(lastday(2020,1));
// console.log(lastday(2020,11));



// Q # 13
// currDate = new Date();
// selectedDate = new Date();
// var a = +prompt('year');
// var b = +prompt('month');
// var c = +prompt('date');

//  selectedDate.setFullYear(a);
//  selectedDate.setMonth(b);
//  selectedDate.setDate(c);

//  var finalAge = currDate.getTime() - selectedDate.getTime();

//  var dob = finalAge / (1000 * 60 * 60 * 24 * 365);
//  document.write( "Your age is " +  Math.floor(dob));



// Chapter 35 to 38

// Q # 1
// function myDate() {
//     var currDate = new Date();
//     document.write(currDate); 
// }
// myDate();



// Q # 2
// function myName() {
//     var firstName = "Sarfaraz"
//     var lastName = "Ahmed"
//     var fullName = firstName  +  lastName
//     document.write(fullName);
// }
// myName();



// Q # 3
// function myNum() {
//     var a = 2
//     var b = 2
//     var c = a + b
//     document.write(c);
// }
// myNum();



// Q # 4
// function abc(num1, num2, opr){
//     if(opr === "+"){
//        var c = num1 + num2;
//        return c;
//     }
//     else if(opr ==="-"){
//         var c = num1 - num2;
//         return c;
//     }
//     else if(opr ==="*"){
//         var c = num1 * num2;
//         return c;
//     }
//     else{
//         var c = num1 / num2;
//         return c;
//     }
// }
// result = abc(8, 6, "-")
// alert(result);



// Q # 5
// function square(){
//     var a = Math.sqrt( 64 );

//     return a;
// }
// var d = square();
// alert(d);



// Q # 6
// var n = +prompt("enter your number")
// var ans = n;
// function fact (num) {
//     if (num == 0 || num == 1){
//         return 1;
//     }
//     else{
//         for(var i= num -1; i>=1; i--){
//             ans = ans * i;
//         }
//         return(ans)
//     }
// }
// var c = fact(n);
// alert(c)



// Q # 7
// var start = +prompt("Enter a start value");
// var end = +prompt("Enter a end value");
// function count(){
//     for(var i = start; i <= end; i++){
//         document.write(i + "<br>")
//     }
// }
// count();



// Q # 8
// function hyp(base,per){
//     var m = Math.sqrt(base*base+per*per);
//     return m;
// }
// var b = prompt("Enter base of triangle");
// var p = prompt("Enter perpendicular of triangle");

// var calHyp = hyp(b,p);
// document.write(calHyp);



// Q # 9
// function rectangle(l,b){
//     var area = l*b;
//     alert(area)
// }
// rectangle(5,6);



// Q # 10
// function palindrome(){
//     var word = prompt("Enter your word");
//     var check = "";
//     for(var i = word.length -1; i>=0; i--){
//         check +=word[i];
//     }
//     if(word === check){
//         alert(word + " is palindrom word ")
//     }
//     else {
//         alert("your word is not a palindrom")
//     }
// }
// palindrome();



// Q # 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));



// Q # 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));



// Q # 13
// function letter(str,count){
//     str = str.toLowerCase();
//     var count = (str.match(/o/g)).length;
//     document.write(count);
// }
// letter('JSResourceS.com', 'o')



// Q # 14
// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   console.log("The circumfrence is " + y + ".");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   console.log("The area is " + x + ".");
//   }
  
//   calcCircumfrence(30);
//   calcArea(10);




// Chapter 38 to 42

// Q # 1
// function ab(){
//     var a = prompt("Enter the base.");
//     var b = prompt("Enter the power.");
//     var result = Math.pow(a,b);
//     alert("The result is: " + result);
// }
// ab();



// Q # 2
// function chk(y){
//        if((y%100!==0) && (y%4==0) || (y%400==0)){
//           alert("Leap Year")
//         }
//         else{
//             alert("Not Leap Year")
//         }
//     }
//     chk(2016);
//     chk(2017);
//     chk(2020 );



// Q # 3
// var a = 4; 
// var b = 5; 
// var c = 6; 
// var s = (a + b + c)/2;
// var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
// document.write("The area of triangle is: " + area);



// Q # 4
// var Urdu = parseInt(prompt("Enter Urdu Marks"));
// var Sindhi= parseInt(prompt("Enter Sindhi Marks"));
// var Islamiat = parseInt(prompt("Enter Islamiat Marks"));

// function percentage(num1, num2, num3){
// 	var a =num1 + num2 + num3;
// 	var c = a/300 * 100 //percentage formoula
// 	return c;
    
// }

// var Total = percentage(Urdu, Sindhi, Islamiat);
// document.write("Total Percentage is: " + Total + "%")



// Q # 6
// String.prototype.character = function() {
//         return this.replace(/[aeiou]+/g, ''); //replace a, e, i, o and u with nothing.
//       }
      
//       function submit() {
//         var input = document.getElementById('input').value;
//         document.getElementById('output').innerHTML = input.character();
//       }




// Q # 7  
// function findOccurrences() {
//         var str = "Pleases read this application and give me gratuity";
//         var count = 2;
    
//         switch (str) {
//             case 'a':
//                 count++;
//             case 'A':
//                 count++
//             case 'e':
//             case 'E':
//             case 'i':
//             case 'I':
//             case 'o':
//             case 'O':
//             case 'u':
//             case 'U':
//                 return 1;
//             default:
//                 return 2;
//         }
//     }
    
//     var str = findOccurrences();
    
//     console.log(str);





