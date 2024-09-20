// var a;
// var b=5;
// console.log(a, b)
// console.log("hello hisham")


//function//
// function sameple(){
//     let a = 5;
//     let c = 6;
//     return (a+c)
// }

// console.log(sameple());



//argument passing///
// function sameple(a, b){
//     return (a+b)
// }

// console.log(sameple(10,10));



// arrrow function///
// sM = (c) => {
//     return c
// }
// console.log(sM(100));

// //if there is only one expression and one parameter
// sM = c => c
// console.log(sM(100));

// //objects///
// let user = {
//     fname: "hisham",
//     lname: "c",
//     age: "22"
// };

// document.getElementById('header').innerHTML = user.fname;

// function helo() {
//     let abc =  document.getElementById('header');
//     abc.textContent = user.fname;
// }
// helo();



// array//
// let myArray = ["hello" , "world", "good"]
// console.log(myArray)


// string methods //
// let a = "hisham"
//length
// console.log(a.length)  //to find length, include whitespace also

//indexOf, lastIndexOf
// console.log(a.indexOf('h')) //to find the specific part index        o/p = 0
// console.log(a.indexOf('z'))// Also used to search the word which is present or not. if its present 0 else -1         0/p = -1
// console.log(a.lastIndexOf('m')) //return the last index of the specified part. helloooo, so the index of 0 is 7

//search
// console.log(a.search('m')) //to find the specific part index, if it is not there it will return as -1 else index of that letter

//slice
//used to extract the content
// let a = "hisham";
// var b = a.slice(0 -4) //sham
// var b = a.slice(-5) //isham
// using - , it will taken from reverse
// console.log(b)



//number methods//
//parseInt - string to number ("123abc")   o/p 123
//Number() - covert to number ("123abc")   o/p NaN  
// let a = "5"
// let b = 6
// console.log(a+b) //    o/p 56
// console.log(parseInt(a) +b)                  //o/p 11


// //no. is odd or even////
// const a = 6;
// if(a % 2 == 0){
//     console.log(a + " is Even")
// }
// else{
//     console.log(a + " is Odd")
// }



// positive, negative or zero////
// var a = -1
// if (a>0){
//     console.log(a + " is Positive")
// }
// else if(a<0){
//     console.log(a + " is Negative")
// }
// else{
//     console.log(a + " is Zero")
// }




//largest of three///
// let a = -5;
// let b = -5;
// let c = -5;
// if (a>b && a>c){
//     console.log(a + " is the Largest")
// }
// else if (b>a && b>c){
//     console.log(b + " is the Largest")
// }
// else if (a===b && a===c){
//     console.log(a + "," + b + "," + c + " are Equal")
// }
// else{
//     console.log(c + " is the largest")
// }



// //leap year or not///
// let year = 2001
// if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0 ){
//     console.log(year + " is a Leap Year")
// }
// else{
//     console.log(year + " is not a Leap year")
// }



//find the grade///
// let mark = 39, grade;
// switch(true){
//     case (mark >= 90 && mark <= 100):
//         grade = 'S';
//         break;
//     case (mark >= 80 && mark < 90):
//         grade = 'A';
//         break;
//     case (mark >= 70 && mark < 80):
//         grade = 'B';
//         break;
//     case (mark >= 60 && mark < 70):
//         grade = 'C';
//         break;
//     case (mark >= 50 && mark < 60):
//         grade = 'D';
//         break;
//     case (mark >= 40 && mark < 50):
//         grade = 'E';
//         break;
//     case (mark < 40):
//         grade = "Student has Failed";
//         break;
//     default:
//             grade = "Invalid Marks";
// }
// console.log("Grade: " + grade)


//array//
// let myArray = ["a", "b", "c"];
// myArray[0] = "z" //update the value of 0th position to z ("a" to "z")
// myArray.push('D') //element addded to last
// myArray.pop() //element poped from last
// myArray.unshift('A'); //add element in first
// console.log(myArray.splice(0,1)) //delete the elements from the array by mentioning index
//myArray.splice(2,2,  "L", "M", "N") //add element add by postion and 2nd number is for deleting next element, if (2,0) add element in 2 and 0 element will deleted, (2,1) add two element and delete one element
//newarray = myArray.slice(1,2); /// extract the element from array. need new array to store those extracted elemts,]
//myArray.sort(); //sorting array in ascending
//myArray.reverse(); //reverse the array
// console.log(myArray);


// //object///
// let myObj = {
//     fname: "hisham",
//     lname: "caches",
//     age: 22
// }
//myObj.fname = "amal"// replaced hisham with amal
//delete myObj.lname //deleted the lname property value
// console.log(myObj)




////if///
//if else/
//print day by switch/
// 

// loop
// print 1 to 10
// for(let i=0; i<=10; i++){
//     console.log(i)
// }


// while loop//
// count 1 to 10
// let a=1;
// while(a <= 10){
//     console.log(a)
//     a++;
// }


// do while
// print 1 to 10
// let a=1;
// do{
//     console.log(a)
//     a++
// }
// while(a <= 10)


//array in loop//
// let arrayMy = ["7", "-1", "6"];
// for(i=0; i < myArray.length; i++){
//     console.log(myArray[i])
// }

// for(x of arrayMy){
//     console.log(x)
// }


// let myobj = {
//     fname: "hisham",
//     lname: "c",
//     age: 22
// }
// for(x in myobj){
//     console.log(x)
// }


// matchAll() - got all the information
//match - get only the searched word
// let str = "The quick brown fox jumps over the lazy dog";
// let matches = str.matchAll(/o\w*/g);

// for (let match in matches) {
//   console.log(match);
// }



//events////

// function onAlert(){
//     alert("Hello, Good Evening");
// }
// onAlert();

// addEventListener()
// document.getElementById("btn").addEventListener("click", alo);

// function alo() {
//     alert("good morning");
// };



// flat///  flatten the array
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);


// flatmap//       map then flatten the mapped array
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x * 10]);
// console.log(newArr);
// console.log(myArr);

//taking input from user using prompt//
// let a = prompt("enter a number");
// console.log(a)



//Find the Grade of a student using Switch
// let mark = "19", grade;
// switch(true){
//     case (mark >= 40 && mark <= 50):
//         grade = "A";
//         break;
//     case (mark >= 30 && mark < 40):
//         grade = "B";
//         break;
//     case (mark >= 20 && mark < 30):
//         grade = "C";
//         break;
//     case (mark >= 0 && mark < 20):
//         grade = "Student has Failed";
//         break;
//     default: 
//         grade = ("Invalid Marks")
// }
// console.log(grade)



// //Grade using If else
// let grade, mark = 60;
// if(mark >= 40 && mark <= 50){
//     grade = "A Grade"
// }
// else if(mark >= 30 && mark < 40){
//     grade = "B Grade"
// }
// else if(mark >= 20 && mark < 30){
//     grade = "c Grade"
// }
// else if(mark >= 0 && mark < 20){
//     grade = "Student has Failed"
// }
// else{
//     grade = "Invalid Marks!"
// }
// console.log(grade)



// Find Grade using Ternary
// let mark = "19", grade;
// grade = (mark >= 40 && mark <= 50) ? "Grade is A" : 
// (mark >= 30 && mark < 40) ? "Grade is B" : 
// (mark >= 20 && mark < 30) ? "Grade is C" : 
// (mark >= 0 && mark < 20) ? "Student has Failed" : "Invalid Marks";
// console.log(grade)



// start pattern left angled traingle
// for (let i = 1; i <= 5; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//        line += '*';
//     }
//     console.log(line);
// }



//Array with odd length and integers as elements
//Sum of the array elements by excluding the middle element
// let a = [10,20,30];
// console.log("Array with Odd elements: " + a + "\nLength of Array: " + a.length)

// let sum = 0;
// for( let i = 0; i < a.length; i++){
//  if (i !== ((a.length - 1)/2)){
//         sum += a[i];
//     }
// }
// console.log("Sum of array excluding the middle element: " + sum);



//Return square of array, extract even number from square array, sum of the new even array
// let ogArray = [1, 2, 3, 4];
// console.log("Original Array: " + ogArray);

// let squareArray = [];
// for(let i = 0; i < ogArray.length; i++){
//     squareArray.push(ogArray[i] ** 2) ;
// }
// console.log("Squared Array: " + squareArray);

// let evenArray = [];
// for(i = 0; i < squareArray.length; i++){
//     if (squareArray[i] % 2 == 0){
//         evenArray.push(squareArray[i]);
//     }   
// }
// console.log("Even Numbers from Squared Array: " + evenArray);

// let sum = 0;
// for(i = 0; i < evenArray.length; i++){
//     sum += evenArray[i];
// }
// console.log("Sum of Even Array: " + sum)



// Print the Following Pattern
// let count = 1;
// for(let i = 0; i < 4; i++){
//     let pattern = '';
//     for(let j = 0; j <= i; j++){
//         pattern += count + ' ';
//         count ++;
//     }
// console.log(pattern)
// }



//Array in descending order
// let ogArray = [13, 11, 12, -12, 100, 18, -45];
// for(let i = 0; i < ogArray.length; i++){
//     for(let j = i + 1; j < ogArray.length; j++){
//         if (ogArray[i] < ogArray[j]){
//             let temp = ogArray[i];
//             ogArray[i] = ogArray[j]
//             ogArray[j] = temp
//         }
//     }
// }
// console.log("Array in Descending Order: " + ogArray)


// palindrome or not
// let s = "malay";
// let d = s.split("");
// let c = d.length - 1;
// let isPalindrome = true;

// for (let i = 0; i < d.length / 2; i++) {
//     if (d[i] !== d[c]) {
//         isPalindrome = false;
//         break;
//     }
//     c--;
// }
// if (isPalindrome) {
//     console.log( s + " is a Palindrome");
// } else {
//     console.log(s + " is not a Palindrome");
// }








// Pyramid * Pattern 
// let height = 6;

// for (let i = 0; i < height; i++) {
//     let row = '';

//     for (let j = 0; j < height - i - 1; j++) {
//         row += ' ';
//     }

//     for (let k = 0; k < i ; k++) {
//         row += '* ';
//     }

//     console.log(row);
// }






//Capitalize first letter of each word
// let string = "hello world, good morning..";
// string = string.toLowerCase();
// let newString = string.split(' ');

// for(let i = 0; i<newString.length; i++){
//     newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
// }

// string = newString.join(' ');
// console.log(string);



//Hallow Triangle
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let line = "";

//     for (let j = 1; j <= i; j++) {
//         if (j == 1 || j == i || i == n) {
//             line += "* ";
//         } else {
//             line += "  ";
//         }
//     }

//     console.log(line);
// }





//Student Scores
// let std1 = { name: "Henry",
//     score: [50, 32, 10, 48] };
// let std2 = { name: "Alex",
//     score: [23, 45, 38] };

// let totalScorestd1 = 0;
// for (let i = 0; i < std1.score.length; i++) {
//     totalScorestd1 += std1.score[i];
// }

// let totalScorestd2 = 0;
// for (let i = 0; i < std2.score.length; i++) {
//     totalScorestd2 += std2.score[i];
// }

// console.log("Total Score Achieved by Henry: " + totalScorestd1);
// console.log("Total Score Achieved by Alex: " + totalScorestd2);






// const height = 5; 

// for (let i = 1; i <= height; i++) {
//     let row = '';
//     for (let j = 0; j >= 1; j--) {
//         row += j;
//     }
//     console.log(row);
// }



// for(let i = 1; i<=10; i++){
//     if (i === 3){continue}
//     console.log(i)
// }


// let a =["av", "ac", "c"], text = '';
// for(let i =0; i<a.length; i++){
//     console.log(text = a[i]);
    
// }

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let count = 0;

// do {
//     console.log(count);
//     count++;
// } while (count < 11);


//////////////practice////////////

// sum of array with excluding the middle
// let sum = 0;
// let a = [10,20,30,40,50];

// for(i = 0; i < a.length; i++){
//     if(i != (a.length-1) / 2){
//         sum += a[i];
//     }
// }
// console.log(sum)


//sqr,even,sum
// let a = [1,2,3,4];
// let sqrArray = [];
// for(i=0; i<a.length; i++){
//     sqrArray.push(a[i] **2)
// }
// console.log(sqrArray)

// let evenArray = [];
// let oddArray = [];
// let sum = 0;
// for(i = 0; i < sqrArray.length; i++){
//     if(sqrArray[i] % 2 == 0){
//         evenArray.push(sqrArray[i])
//     }
//     else{
//         oddArray.push(sqrArray[i]);
//     }
// }
// console.log(evenArray);
// console.log(oddArray)

// for(i = 0; i < evenArray.length; i++){
//     sum += evenArray[i]
// }
// console.log(sum);



// let count = 1;
// for(i = 0; i < 5; i++){
//     row = "";
//     for(j = 0; j < i; j++){
//         row += j + " ";
//         // count++;
//     }
//     console.log(row)
// }


// for(i = 5; i >= 0; i--){
//     let row = "";
//     for(j = 1; j <= i; j++){
//         row += j
//     }
//     console.log(row)
// }


// for(i=0; i<=5; i++){
//     row = ""
//     for(j=0; j <= 5-i; j++){
//         row += " "
//     }
//         for(k = 0; k < 2*i+1; k++){
//             row += "*"
//         }
//         console.log(row)
//     }


//equal pyramid
// for(i=5; i>=1; i--){
//     row = ""
//     for(j=0; j <= 5-i; j++){
//         row += " "
//     }
//         for(k = 0; k < i; k++){
//             row += " *"
//         }
//         console.log(row)
//     }


    // for(i=5; i>=0; i--){
    //     row = ""
    //     for(j=0; j <= 5-i; j++){
    //         row += " "
    //     }
    //         for(k = 1; k <= i; k++){
    //             row += k;
    //         }
    //         console.log(row)
    //     }



    //ascending
    // let a = [2, 3, 4, -5, 28]
    // for(i = 0; i < a.length; i++){
    //     for(j=i+1; j < a.length; j++){
    //         if(a[i] > a[j]){
    //            let temp = a[i];
    //             a[i] = a[j];
    //             a[j] = temp;
    //         }
    //     }
    // }
    // console.log(a)

//palindrome//////

// function pali(a) {
//     let b = a.split("");
//     c = b.length-1
//     // console.log(b);
//     palindrome = true;

//     for(i=0; i<b.length/2; i++){
//         if(b[i] != b[c]){
//             palindrome = false;
//             break;
//         }
//         c--;
//     }
//     if (palindrome){
//         console.log("It is Palindrome");
//     }
//     else{
//         console.log("Not Palindrome");
        
//     }
// }

// pali("malayala");


    // // first letter
    // let a = "my nAME is Hisham";
    // a = a.toLowerCase()
    // let b = a.split(" ")
    // console.log(b);
    
    // for(i=0; i < b.length; i++){
    //     b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1)
    // }
    // console.log(b.join(" "))


// //camelcase
//     let a = "How Are You?";
//     a = a.toLowerCase()
//     let b = a.split(" ")
//     console.log(b);
    
//     for(i=; i < b.length; i++){
//         b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1)
//     }
//     console.log(b)
//     cd = b.join("");
//     console.log(cd);
    
//     console.log(cd.charAt(0).toLowerCase() + cd.slice(1));




// let sum = 0;
// let sum2 = 0;
//     let std1 = {name: "Henry",
//         score: [50,32,10,48]
//     };
//     let std2 = {name: "Henry",
//         score: [23,45,38]
//     };

//     for(i=0; i<std1.score.length; i++){
//         sum += std1.score[i]
//     }
//     console.log(sum);
    
//     for(i=0; i<std2.score.length; i++){
//         sum2 += std2.score[i]
//     }
//     console.log(sum2);



// for(i=1; i <= 5; i++){
//     let row = "";
//     for(j=i; j>=1; j--){
//         row += j;
//     }
//     console.log(row)
// }


// longest word
// let a = "hello bright goodmorning";
// let c = a.split(" ")
// console.log(c)

// for(i=0; i < c.length; i++){
//     for(j= i+1; j < c.length; j++){
//         if (c[i].length < c[j].length){
//             temp = c[i];
//             c[i] = c[j];
//             c[j] = temp;
//         }
//     }
// }
// console.log(c[0])





// let a = "hi how. bwi see you. good morning";
// b = a.split(". ");
// // console.log(b);
// let ab = ""
// for(i = 0; i < b.length; i++) {
//     ab += b[i].charAt(0).toUpperCase() + b[i].slice(1) + ". ";
// }
// console.log(ab)


// function my(str){
// b = str.replace("amazing", "not amazing
// console.log(b)
// }
// my("suneer is amazing")
// my("anees is amazing")


// let a = 'hellollllllllloooooooo';
// b = a.split("");
// console.log(b);
// let h = ""

// for(i=0; i<b.length; i++){
//     for (let j = i+1; j<b.length; j++){
//         if(b[i] == b[j]){
//             delete b[i]
//         }
//         else{
//             h += b[i]
//         }
//     }
// } 
// console.log(b.join(""))



// let a = "hello, how are you of bridgeon";
// b = a.split(" ")
// // console.log(b)

// let c = b.indexOf("bridgeon");
// console.log(c + 1)



// function hi (str){
//  let a = str.split("");
//  for(i=0; i<a.length; i++){
//     for(j=i+1; j<a.length; j++){
//         if(a[i] == a[j]){
//             return console.log("False")
//             break;
//         }
//     }
//  } return console.log("True")
// }
// hi("hello")



// for (i = 5; i >= 0; i--){
//     let row = "";
//     for(j=1; j<=i; j++){
//         row += j;
//     }
//     console.log(row)
// }


// for (i = 1; i <= 5; i++){
//     let row = "";
//     for(j=5; j>=i; j--){
//         row += "*";
//     }
//     console.log(row)
// }





// 1
// 21
// 321
// 4321
// 54321
// for (i = 1; i <= 5; i++){
//     let row = "";
//     for(j=i; j>=1; j--){
//         row += j;
//     }
//     console.log(row)
// }




// 54321
// 4321
// 321
// 21
// 1
// for(i=5; i>=1; i--){
//     let row = ""
//     for(j=i; j>=1; j--){
//         row += j;
//     }
//     console.log(row)
// }




// A
// AR
// ARR
// ARRA
// ARRAY
// let a = ["A", "R", "R", "A", "Y"];

// for (i = 0; i<5; i++){
//     let row = ''
//     for (j=0; j<=i; j++){
//         row += a[j] ;
//     }
//     console.log(row)
// }




// ARRAY
// ARRA
// ARR
// AR
// A
// let a = ["A", "R", "R", "A", "Y"];
// for (i = 4; i>0; i--){
//     let row = ''
//     for (j=0; j<=i; j++){
//         row += a[j] ;
//     }
//     console.log(row)
// }




// ARRA
// YARR
// YAR
// YA
// Y
// let a = ["A", "R", "R", "A", "Y"];

// for (i = 0; i<5; i++){
//     let row = ''
//     for (j=4; j>=i; j--){
//         row += a[j]
//     }
//     console.log(row)
// }



// Y
// YA
// YAR
// YARR
// YARRA
// let a = ["A", "R", "R", "A", "Y"];

// for (i = 5; i>=0; i--){
//     let row = ''
//     for (j=4; j>=i; j--){
//         row += a[j] ;
//     }
//     console.log(row)
// }




// **
// ***
// ****
// *****
// for(i=0; i<=5; i++){
//         row = ""
//         for(j=0; j <= 5-i; j++){
//             row += " "
//         }
//             for(k = 0; k < i; k++){
//                 row += "*"
//             }
//             console.log(row)
//         }



// * * * * * * * * * * *
//  * * * * * * * * *
//    * * * * * * *
//      * * * * *
//        * * *
//          *
// for(i=5; i>=0; i--){
//         row = ""
//         for(j=0; j <= 5-i; j++){
//             row += "  "
//         }
//             for(k = 0; k < 2*i+1; k++){
//                 row += " *"
//             }
//             console.log(row)
//         }



// *****
//  ****
//   ***
//    **
//     *
// for(i=5; i>=0; i--){
//         row = ""
//         for(j=0; j <= 5-i; j++){
//             row += " "
//         }
//             for(k = 0; k < i; k++){
//                 row += "*"
//             }
//             console.log(row)
//         }





// for(i=0; i<=5; i++){
//     row = ""
//     for(j=0; j <= 5-i; j++){
//         row += " "
//     }
//         for(k = 1; k <= i; k++){
//             row += " "+k
//         }
//         console.log(row)
//     }



// let a = ["A", "R", "R", "A", "Y"]
// for(i=0; i<=5; i++){
//     row = ""
//     for(j=0; j <= 5-i; j++){
//         row += " "
//     }
//         for(k = 0; k < i; k++){
//             row += " " + a[k]
//         }
//         console.log(row)
//     }


// let a = "helloo"


// if (a.length % 2 == 0){
//     console.log("True")
// }
// else{
//     console.log("False");
// }



// a = [-1, -2, -3];
// for(i =0; i<a.length; i++){
//     a[i] = (a[i] < 0 )? -a[i] : a[i];
// }

// console.log(a)
// let sum = 0;
// for(i =0; i<a.length; i++){
//     sum += a[i]
// }
// console.log(sum);

// for (i=1; i<=5; i++){
//     let row =""
//     for(j = i; j>0; j--){
//         row += j;
//     }
//     console.log(row)
// }




// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let line = "";
//     // line += " ".repeat((n-i))
//     for (let j = 1; j <= i; j++) {
//         if (j == 1 || j == i || i == n) {
//             line += "* ";
//         } else {
//             line += "  ";
//         }
//     }

//     console.log(line);
// }



// for(i=1; i<=5; i++){
//     let row = "";
//     for (j=i; j>=1; j--){
//         row += j;
//     }
//     console.log(row)
// }




// let a = "ARRAY";

// for(i = 0; i < 5; i++ ){
//     let row = "";
//     for (j = 0; j<=i; j++){
//         row += a.charAt(j);
//     }
//     console.log(row);
// }



// let a = "racecar"
// let b = a.split("")
// // console.log(b);
// palindrome = true;

// let c = b.length-1;
// for (i=0; i<b.length/2; i++){
//     if(b[i] != b[c]){
//         palindrome = false;
//         break;
//     }
//     c--;
// }
// if(palindrome){
//     console.log("It is Palindrome")
// }
// else{
//     console.log("It is not a Palindrome")
// }


// let n = 5;
// for (i = 1; i<=n; i++){
//     row = ""
//     for(j = 1; j<=i; j++){
//         if((j == 1) || (j == i) || (i == n)){
//             row += "* ";
//         }
//         else{
//             row += "  "
//         }
//     }
//     console.log(row);
    
// }



// let a ="my name is hisham"
// let b = a.toLowerCase();
// let c = b.split(" ");
// // console.log(c);

// for(i=0; i<c.length; i++){
//     c[i] = c[i].charAt(0).toUpperCase() + c[i].slice(1)
// }
// console.log(c.join(" "));


// let a = "hellodasdasd sfjhasfas dsadsad. hi. bei. oke. then bei"
// let c = a.split(". ");
// let sum = ""
// // console.log(c);

// for(i = 0; i < c.length; i++){
//     c[i] = c[i].charAt(0).toUpperCase() + c[i].slice(1)
// }

// console.log(c.join(". "));





// let a = "hello";
// let b = a.split("");
// console.log(b);
// let value = true

// for(i=0; i<b.length; i++){
//     for (j = i+1; j < b.length; j++){
//         if(b[i] == b[j]){
//             delete b[i];
//             break;
//         }
//     }
// }
// console.log(b.join(""));



// function my(str){
//    let b = str.split("");
//    for(i=0; i<b.length; i++){
//         for (j = i+1; j < b.length; j++){
//             if(b[i] == b[j]){
//                 return console.log("False")
//                 break;
//             }
//         }
//     }
//     return console.log("True")
// }



// my("helo");


// let sum = 0;
// let a = [-1, -2, -3, 4, -44];
// for(i = 0; i<a.length; i++){
//     a[i] = a[i] < 0? -a[i] : a[i]
// }
// console.log(a);
// for(i = 0; i<a.length; i++){
//     sum += a[i]
// }
// console.log(sum);


// let a = "ARRAY"

// for (i = 0; i < 5; i++){
//     let row = ""
//     for(j = 0; j<= i; j++){
//         row += a.charAt(j)
//     }
//     console.log(row);
    
// }


// function my (str) {
// length = str.length;
// middle = (length-1)/2

// if(str.length % 2 === 0){
//     return str.slice(middle-1, middle+1)   
// }
// else{
//     return str.charAt(middle)
// }
// }
// console.log(my("abc"));


// let n = 5
// for (i = 1; i<=n; i++){
//     let row = ""
//     row += " ".repeat((5-i)*2)
//     for(j = 1; j<=i; j++){
//         if((j == i) || (j == 1) || (i == n)){
//             row += "* "
//         }else{
//             row += "  "
//         }
//     }console.log(row);
    
// }



// for(i=0; i<=5; i++){
//     let row = ""
//     for(j = 0; j<5-i; j++){
//         row += " "
//     }
//     for(k = 0; k<= i-1; k++){
//         row += "* "
//     }
//     console.log(row);
    
// }




// for (i = 0; i<=5; i++){
//     let row = ""
//     for (j = i; j>=1; j--){
//         row += j
//     }console.log(row);
    
// }

///////////////////////////////////////////////
//splice method. - splice affects the original array
// let a = ["abc", "mango", "apple", "kiwi"]
// let c = a.splice(0,1)
// console.log(a);
// console.log(c);

//toSpliced
// let a = ["abc", "mango", "apple", "kiwi"]
// let spliced = [];
// spliced = a.toSpliced(0,2);
// console.log(a);
// console.log(spliced);

//sort with comparison function
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points);

//entries
// let a = ["apple","mango","orange","kiwi"];
//  let b = a.entries();

//  let text = ""
//  for(x of b){
//     text += x + "\n"
//  }
//  console.log(text);
//  console.log(typeof(text));
 
 

// //every()//
// let a = [17,100,30,34,43];

// function my(age) {
//     return console.log(age >= 18)
// }

// a.every(my);


// find(),findLast, index ///     find() returns the 1st element that passes the test
// let a = [17,100,30,3,43,1,1,1,1];
// let news = a.findLastIndex(my);

// function my(age) {
//     return (age >= 18)
// }
// console.log(news);


// Array.from();    //// Array.from is used to convert the string to array
// a = "hello"
// b = Array.from(a)
// console.log(b)
// console.log(typeof(b));
// console.log(a);



//filter
// let a = [17,100,30,3,43,1,1,1,1];
// let news = a.filter(my);

// function my(age) {
//     return (age >= 18)
// }
// console.log(news);


//reduce  &   reduceRight///
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myFunction, 0);

// function myFunction(total, value) {
//     console.log(total);
//     console.log(value);
    

//     return total + value;

//   }


// // console.log(sum);
// // console.log(total);

// eg -2
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,5);
// console.log(sum);

// arrow function//  used to shorten the funtion
// let myFunction = (a, b) => a * b;
// console.log(myFunction("3", 4));


// a = [2,4,5] + 1;
// console.log(a);
// function toCelsius(f) {
//     return (5/9) * (f-32);}
//     a = toCelsius
  
//     console.log(a);


// a=(function () {
//     return "Hello!!";  // I will invoke myself
//   })();
//   console.log(a);
  


// myFunction();
// console.log(carName);

// const myFunction =  Function("a", "b", "return a * b");
// console.log(myFunction("2","6"));


//factorial//
// function factorial(n) {
//     // Base case: when n is 0 or 1, the factorial is 1
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     // Recursive case: n times the factorial of (n-1)
//     return n * factorial(n - 1);
//   }
  
//   console.log(factorial(3));


// hoisting//////
// my();
// const x = 10;
// function my() {
//     console.log(x);
    
// }







/*This keyword*////////////////////

//globally
// console.log(this); ////returns the window

//used in funtion. but the function doesnt have any parent funtion. so it returns the window///
// function my() {
//     console.log(this);
    
// }


//here the this keyword's context is in object. so return the object

// function getName() {
//     console.log(this.name)
//     console.log(this.age);
// }
// // my();


// const person1 = {
//     name: "Hisham",
//     age: 22,
//     method: getName
// }

// const person2 = {
//     name: "Shafeeq",
//     age: 21,
//     method: getName
// }


// person1.method();  /// Hisham, 22
// person2.method();  /// SHafeeq, 21


// call keyword in this   -  it is used to set the context to this
// function getName(a,b,c) {
//     console.log(a,b,c);
    
//     console.log(this.name)
//     console.log(this.age);
// }


// const person1 = {
//     name: "Hisham",
//     age: 22,
//     method: getName
// }

// const person2 = {
//     name: "Shafeeq",
//     age: 21,
//     method: getName
// }

// getName.call(person1, "1", "2", "3"); // hisham, 22
// getName.apply(person2, ["1", "2", "3"]); // hisham, 22       //both call and apply set the context to this and it invokes the funtion. 
//                                              // so we got the values in the refered object keys

// ab = getName.bind(person2); //but in bind, it return the value, but not invoked, so we dont get it, so we need to invoke it seperately
// ab();


// bind example
// const obj = { 
//     name: 'Alice' 
// };

// function greet() {
//   console.log(`Hello, ${this.name}!`);
// }
// // greet();

// const helo = greet.call(obj);
// helo();  // here there is an error, bcz the helo have only the reference to the greet, it doesnt know about the obj
// ----------------//
// const obj = { name: 'Alice' };

// function greet() {
//   console.log(`Hello, ${this.name}!`);
// }

// const helo = greet.bind(obj);
// helo(); // here we get Hello, Alice, bcz here speicified that the funtion greet have the reference to the obj,

//this in Arrow  Funtion//
// const person = {
//     name: "Hisham",
//     age: 22, 
//     getName: () => {
//             return this;
//         },
// };

// console.log(person.getName());    /// here we get the window, bcz in arrow funtion it checks any this in its lexical environment

//this in arrow funtion (here accesing the object by setting the arrow funtion inside a funtion)
// const person = {
//     name: "Hisham",
//     age: 22, 
//     method() {
//         const getName = () => {
//             return this;
//         };
//         return getName();
//     },
// };

// console.log(person.method()); /// here we get the complete object

// const person = {
//     name: "Hisham",
//     age: 22, 
//     method() {
//         const getName = () => {
//             let a = () => {
//             return this;
//             };
//             return a();
//         };
//         return getName();
//     },
// };
// console.log(person.method());    /// here we get the complete object


// const person = {
//     name: 'Alice',
//     fb: function greet() {
//       console.log(`${this}`);
//     }
//   };
  
// person.fb();    ///here only shows the [object] [object]


// const person1 = {
//     name: 'Alice',
//     fb: function greet() {
//         return this
//     }
//   };
  
// console.log(person1.fb());   ///here shows the full object values with properties




// let a = {
//     name: "Hisham",
//     age: 22,
//     class: "hi"
// }
// const entries = [
//     ["name", 30],
//     [30, 20],
//     ['aob', 'Developer']
// ];

// // const obj = Object.fromEntries(entries);
// const obj = Object.values(entries)

// console.log(obj);






// let b = Object.assign({}, a)
// b.aaade="hai";
// console.log(b);

    
//     console.log(a.name);
// cb.name="hai"
// console.log(a.name);
// // console.log(a);  //{}

// let a=["q","w"];
// b=a;
// b[1]="s";
// b[2]="s";
// console.log(a);



// a.h = "hello";
// console.log(Object.keys(a));
// console.log(Object.assign(bb, a));







// console.log(a.toString());   when we convert an object to a string, it shows [Object Object]
// console.log(`${a}`); using interpolation, a is also converting in to a string, so its shows [object object]



// JS Object//
//using Constructor
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   // Create a Person object
//   const myFather = new Person("John", "Doe", 50, "blue");
//   console.log(myFather);
  
//Object Property
//defineProperty
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "EN"
//   };
  
//   // Add a Property
//   Object.defineProperty(person, "year", {value:"2008"})

//   console.log(person);
//   console.log(person.year);


// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "EN"
//   };
  
//   // Change a Property
//   Object.defineProperty(person, "language", {value : "NO"});
//   console.log(person);
  
  
// Object Destructuring //
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
//   };
  
//   // Destructuring
//   let {firstName, lastName} = person;

//   console.log(firstName, lastName); //John Doe
//   console.log(typeof firstName);  //error, Object Destructuring
  
  
//object Property Alias
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
//   };
  
//   let {lastName : name} = person;
//   console.log(name);
//   console.log(typeof name); //string
  
  
  
// String Destructuring
// let name = "W3Schools";
// let [a1, a2, a3, a4, a5] = name;
// console.log(a1, a5); // W h
// console.log(typeof a1); //string




// // Array Destructuring//
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// let [fruit1, fruit2] = fruits;
// console.log(fruit1);   //Bananas


// skip array element using Comma, no.of comma = no.of elementsconst 
// fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// let [fruit1,,,fruit2] = fruits;  ///no.of comma = no.of elements skip
// console.log(fruit1,fruit2);  //Bananas Mangoes
// console.log(typeof fruit1); //string

// We can pick up values from specific index locations of an array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// const {[0]:fruit1 ,[3]:fruit2} = fruits;
// console.log(fruit1, fruit2);    //Bananas Mangos


// Rest Property in Array
// const numbers = [10, 20, 30, 40, 50, 60, 70];
// const [a,b, ...rest] = numbers;
// console.log(a,b,rest); //10 20 [30, 40, 50, 60, 70]
// console.log(typeof a, typeof b, typeof rest); //number number object

// Rest in String
// let ab = 'hello'
// let [a,b, ...rest] = ab;
// console.log(a,b,rest);        //h e ['l', 'l', 'o']
// console.log(typeof a, typeof b, typeof rest);     //string string Object



// Rest in Object
// let ab = {
//     name: "Hisham",
//     age: 21,
//     city: "Edappal",
//     bb: "bei",
//     cc: "ccdf"
// }


// // let [q,w, ...rest1] = ab; 
// // console.log(q,w,rest1);  /// ab is not iteratbale

// let [a,b, ...rest] = Object.entries(ab);
// console.log(a,b,rest);
// console.log(typeof a, typeof b, typeof rest);   //object, Object, object


//Map Destructuring
// let a = new Map([["apples", 100],["banana", 200], ["orange", 300]])

// let b = "";
// for(let [key, value] of a){
//     b += (key + " is " + value + "\n")
// }

// console.log(b);       //apples is 100
//                       // banana is 200
//                       // orange is 300
// console.log(typeof a);                 //Object


// Variable Swapping  //Destructing//
// let a = "Hisham";
// let b = "Shafeeq";
// console.log(a,b);     //Hisham Shafeeq
// // Destructing
// [a, b] = [b, a];
// console.log(a,b);     //Shafeeq Hisham



// week 3 practice
//number sign
// function oddEven(numbers){
//     let total = numbers.reduce((acm, num) => 
//         acm + num, 0)
//     if (total > 0){
//         console.log(numbers + "   ---->   " + "Positive");
//     }
//     else if (total < 0){
//         console.log(numbers + "    ---->   " + "Negative");        
//     }
//     else {
//         console.log(numbers + "    ---->   " + "Zero");
        
//     }
// }
// oddEven([-10,-20,30]);

// method -2
// function oddEven(number) {
//     let a = number.reduce((total, val) => total + val,0) 
//     a>0 ? console.log("Postive") : (a<0) ? console.log("Negative") : console.log("Zero")
// }
// oddEven([-10,-20,30]);


//sum of salaries

// function totalSalary(salary){
//     let total = salary.reduce((acm, num) => acm + num.salary, 0)
//     console.log("--->    " + total);
// }

// totalSalary([
//     {name: "Hisham", salary: -10},
//     {name: "Shafeeq", salary: -20},
//     {name: "Hakkem", salary: -100}
// ]);

// function totalSalary(salaries){
//     let a = salaries.reduce((acm,val) => acm + val.salary,0)
//     console.log(a);
    
// }
// totalSalary([
//         {name: "Hisham", salary: 10},
//         {name: "Shafeeq", salary: -20},
//         {name: "Hakkem", salary: 100}
//     ]);

//longest word within the array
// function longest(word){
//     let largest = word.reduce((largestword, currentword) => currentword.length > largestword.length ? currentword : largestword);      
//     console.log(largest);
    
// }

// longest(["a","bbbbb","ccccccc","dddd"]);

// practice//
// function longest(arr) {
//     let a = arr.reduce((lw,sw) => (lw.length>sw.length)?lw:sw)
//     console.log(a);
    
// }
// longest(["a","bbbbb","cccccccc","dddd"]);


//swap method find the largest
// function longest(a){
//     for(i = 0; i<a.length; i++){
//         for (j=i+1; j<a.length; j++){
//             if (a[i].length < a[j].length){
//                 temp = a[i];
//                 a[i] = a[j];
//                 a[j] = temp;
//             }
            
//         }
//     }
//     console.log(a[0]);
    
// }
// longest(["a","bb","cccccc","ddd"])


// function longest(arr){
//     let a = arr.reduce((acm, val) => acm.length > val.length ? acm : val)
//     console.log(a);
    
// }
// longest(["a","bb","cccccc","dddddddd"])


// max value in each individual array of array///
// function findLargest (value) {
//     return value.map(newarray => Math.max(...newarray));
// }
// console.log(findLargest([[1, 2, 3], [1, 2, 4], [1,2,1]]));

//practice//
// function findLargest(arr){
//     let a = arr.map(val => Math.max(...val))
//     console.log(a);
    
// }
// findLargest([[1, 2, 3], [11, 2, 4], [1,2,1]]);

// function findLargest(arr){
//     let a = arr.map(x => Math.max(...x));
//     console.log(a);
    
// }
// findLargest([[1, 2, 3], [11, 2, 4], [1,2,1]]);

// //map example-1//
// a = [1,2,3,4]
// let b = a.map(hi => hi+1)
// console.log(b);

//map example-2
// a = [1,2,3,4]
// let b = a.map(plus);
// function plus(value, index){
//     c = value + index;
//     console.log(c);    
// }



// avg marks of the student
// function sum(marks){
//     let length = marks.mark.length
//     let b = marks.mark.reduce((acm, val) => (acm + val))
//     c = b/length
//     console.log(c);
// }
// sum({name: "Hisham", mark: [30, 30, 30]})
// sum({name: "Hisham", mark: [25, 45, 10, 30]})

//practice//
// function sum (obj) {
//     let length = obj.mark.length
//     let a = obj.mark.reduce((acm,val) => acm + val,0)
//     console.log(a/length);
// }
// sum({name: "Hisham", mark: [20, 30, 30]})


// function sum (obj){
//     let a = obj.mark.length;
//     let b = obj.mark.reduce((acm, val) => acm + val, 0)
//     console.log(b/a);
    
// }
// sum({name: "Hisham", mark: [30, 30, 30]})


//sum is even or odd
// function evenOdd(numbers){
//     let sum = numbers.reduce((acm, val) => acm + val, 0)
//     if (sum % 2 == 0){
//         console.log("Even")    
//     }
//     else{
//         console.log("Odd")
//     }
// }
// evenOdd([0,-1,-2]);

//practice//
// function evenOdd(numbers){
//     let a = numbers.reduce((acm,val) => acm+val ,0);
//     (a == 0)?console.log("zero"):(a % 2 == 0)?console.log("Even"): console.log("Odd");    
// }
// evenOdd([0,3,-5]);



//longest word in the string
// function longest(word){
//     let b = word.split(" ");
//     let c = b.reduce((longestword, currentword) => { return currentword.length > longestword.length ? currentword : longestword})
//         console.log(c);     
// }
// longest("Web Development Tutorial");

//practice//
// function longest(word){
//     let b = word.split(" ").reduce((acm,val) => acm.length>val.length?acm:val)
//     console.log(b);
    
// }
// longest("Web Development Tutorial");

//Array.from//
// let a = "12345"
// let b = Array.from(a)
// console.log(a, b);

// multiplies with until length
// function mul(num, length){
//     let result = []
//     for(i=1; i<=length; i++){
//         result.push(num * i)
//     }
//     console.log(result)
// }
// mul(12, 10);

// function mul(num, length){
//     let a = Array.from({length}, (_,i) => num*(i+1))
//     console.log(a);
    
// }
// mul(12, 10);

//method - 2
// function mul(num, length){
//     let c = Array.from({length}, (_,i) => num * (i+1));    
//     console.log(c);
// }
// mul(7, 5);

// //practice
// function mul(num, length) {
//     let result = [];
//     for (i = 1; i<=length; i++){
//         result.push(i*num)
//     }
//     console.log(result);
// }
// mul(7,5);

// practice//
// function mul (num, length){
//     let a = Array.from({length}, (_,i) => num*(i+1));
//     console.log(a);
// }
// mul(7,5);


//largest in subarray
// function maxvalue(val){
//     return val.map((val) => Math.max(...val))
// }
// console.log(maxvalue([[11,2],[1,2,3,4],[1,22,3]]));


// //reverse the string - method-1
//  function rev(str) {
//     a = str.split(" ").filter(word => word.length > 0).reverse().join(' ')
//     console.log(a);
    
//  }
// rev("         hello iam     hisham          ");

// function rev(str){
//     let a = str.split(" ").filter(x => (x.length>0)).join(" ")
//     console.log(a);
    
// }
// rev("         hello iam     hisham          ");

//practice//
// function rev (string){
//     let a = string.trim().split(" ").filter(word => word.length > 0).reverse().join(" ")
//     console.log(a);
// }
// rev("         hello iam     hisham  ");


// // method - 2
// let a = "  a      good     example"
// let b = a.trim().split(" ");
// // console.log(b);
// let result = [];
// for(let i = 0; i < b.length; i++){
//     if(b[i].length > 0){
//         result.push(b[i])
//     }
// }
// d = result.reverse().join(" ");
// console.log(d);

//highest mark - method 1///
// function highestmark(mark){
//     a = mark.marks.reduce((acm, val) =>
//         { return acm > val ? acm : val })
//     console.log(a);   
// }
// highestmark({name: "john", marks: [-10,-2,-30]});

// function highestmark(obj){
//     let a = obj.marks.reduce((acm, val) => acm > val ? acm:val)
//     console.log(a);
    
// }
// highestmark({name: "john", marks: [-10,-2,30]});

//practice
// function highestmark(mark){
//     let a = mark.marks.reduce((acm, val) => acm > val ? acm :val);
//     console.log(a);
    
// }
// highestmark({name: "john", marks: [-10,-2,-30]});


//highest mark - method 2
// function highestmark(mark) {
//     let high = Math.max(...mark.marks) 
//     console.log(high);
    
// }
// highestmark({name: "Hisham", marks: [100, 20, 30]});


////practice//
// function highestmark(obj){
//     let a = Math.max(...obj.marks)
//     console.log(a)
// }
// highestmark({name: "Hisham", marks: [100, 120, 130]});


//age difference
//  function familyAge(age) {
//     let x = age.map(ages => ages.age)
//     // console.log(x);
//     let maxage = Math.max(...x)
//     // console.log(maxage);
//     let minage = Math.min(...x)
//     // console.log(minage);
//     let difference = maxage - minage
//     // console.log(difference);
//     return console.log([minage, maxage, difference])    
//  }

//  familyAge([{name: "Hisham", age: 38}, {name: "Shibil", age: 10}, {name: "Basheer", age: 25}]);


 //age difference - method 2
//  function  familyAge(family){
//     let x = family.map(age => age.age)
//     return [Math.min(...x), Math.max(...x), Math.max(...x) - Math.min(...x)]
//  }
//  console.log(familyAge([{name: "Hisham", age: 38}, {name: "Shibil", age: 10}, {name: "Basheer", age: 25}]));


//practice//
// function familyAge(arr){
//     let a = arr.map(ages => ages.age);
//     console.log(`${Math.min(...a)} ${Math.max(...a)} ${Math.max(...a) - (Math.min(...a))}`);
    
// }
// familyAge([{name: "Hisham", age: 40}, {name: "Shibil", age: 10}, {name: "Basheer", age: 25}]);




// //divisible by 4 and their sum///
// function mul (number){
//     let sum;
//     let a = number.filter(number => number % 4 == 0)
//     return console.log(a.reduce((acm, val) => acm + val));
// }
// mul([1,4,8,5,16])
// mul([16,12,3,1,8])

// //divisible by 4 and their sum  -   method 2///
// function mul (number){
//     let a = number.reduce((acm, val) => (val % 4 == 0 ? acm+val : acm ), 0)
//     console.log(a);
// }
// mul([1,2,3])
// mul([16,12,3,1,8])


//practice
// function mul (arr){
//     let a = arr.reduce((acm, val) => val % 4 == 0 ? acm + val : acm ,0)
//     console.log(a);
    
// }
// mul([1,2,3,4,8,12])


//Array.from example
// let a = "abc"
// let b = Array.from({length: 5}, () => a)
// console.log(b);

//palindrome array
// function palindrome(str){
//     let a = str.filter(word => word === word.split("").reverse().join(""));
//     console.log(a);
// }
// palindrome([" deed ", "malayalam", 'ab', 'bb', 'a', "racecar", "dsaasf"]);


// function palindrome (arr){
//     let a = arr.filter(x => x == x.split("").reverse().join(""))
//     console.log(a);
    
// }
// palindrome([" deed ", "malayalam", 'ab', 'bb', 'a', "racecar", "dsaasf"]);


// practice//
// function palindrome(str){
//     let a = str.filter(word => word == word.split("").reverse().join(""))
//     console.log(a);
    
// }
// palindrome([" deed ", "malayalam", 'ab', 'bb', 'a', "racecar", "dsaasf"]);

//sum of scores//
// function sum(student) {
//     let a = student.map(val => val.score).reduce((acm, val) => acm + val);
//     console.log(a);
// }
// sum([{name: "Hisham", score: 22}, {name: "Hisham", score: 555}]);

//practice
// function sum(student) {
//     return console.log(student.reduce((acm, val) => acm + val.score,0));
// }
// sum([{name: "Hisham", score: 222}, {name: "Hisham", score: 555}]);


// multiply untill length reaches//
// function mul (num, length){
//     let a = Array.from({length}, (_,i) => num * (i+1))
//     console.log(a)
// }
// mul(7,5)

//method - 2 for multiplication
// function mul (num, length){
//     let a = [];
//     for(i = 1; i<=length; i++){
//         a.push(num * i)
//     }console.log(a);    
// }
// mul(7,5)

//multiples of 3 and their sum
// function mul(numbers){
//     let a = numbers.reduce((acm, val) => val % 3 == 0 ? acm+val : acm, 0)
//     console.log(a);
    
// }
// mul([1,2,3,4,5]);

//multiples of 3 and their sum - method 2
// function mul(numbers){
// let a = numbers.filter((val) => val % 3 == 0).reduce((acm, val) => acm+val)
// console.log(a);

// }
// mul([1,3,8,5,9]);

//practice
// function mul(numbers){
//     return console.log(numbers.filter(num => (num % 3 == 0)).reduce((acm, val) => acm+val));
// }
// mul([1,3,8,5,9]);


//reverse the word in the string if it contains >= 5 letters////
// function rev(string){
//     let ab = string.split(" ").map(b => (b.length >= 5) ? b.split("").reverse().join("") : b);
//     console.log(ab.join(" "));
    
// }
// rev("helo iam Hisham");

// function rev(str){
//     let a = str.split(" ").map(x => (x.length>5) ? x.split("").reverse().join(""):x)
//     console.log(a.join(" "));
    
// }
// rev("helo iam Hisham");

//practice
// function rev(string){
//     return console.log(string.split(" ").map(word => (word.length >= 5) ? word.split("").reverse().join("") : word).join(" "));
// }
// rev("helo iam Hisham");


//div by 357 and their sum
// function div357 (num) {
//     let sum = 0;
//     for (i=1; i<=num; i++){
//         if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
//             sum += i
//         }
//     } 
//     console.log(sum);   
// }
// div357(9);

//practice
// function mul(num) {
//     let sum = 0;
//     for(i = 1; i<=num; i++){
//         if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
//             sum += i
//         }
//     }console.log(sum);
// }
// mul(9);

//practice
// function mul (num){
//     let a = Array.from({length:num}, (_,i) => i+1).filter(i =>i % 3 == 0 || i % 5 == 0 || i % 7 == 0).reduce((acm, val) => acm + val,0)
//     console.log(a);   
// }
// mul(7);

//toggle conndition
// function bridgeonSwitch(arr){
//     let a = true;
//     let b = arr.map(word => {
//         (word == "bridgeon") ? (a = !a) : a
//         console.log(a);
        
//     })

// }
// bridgeonSwitch(["bridgeon", "on", "bridgeon", "v"]);


//practice
// function bS(arr){
//     let a = true;
//     console.log(arr.map(word => word == "bridgeon" ? a = !a : a))
    
// }
// bS(["bridgeon", "on", "bridgeon", "v"]);


//no.of true values in the aray//
// function numOfTrue(value){
//     let a = value.filter(val => (val == true))
//     console.log(a.length);
// }
// numOfTrue([false,false, false, false]);

//method - 2//
// function truevalue(ar){
//     let a = ar.filter(Boolean).length
//     console.log(a);
// }
// truevalue([false,false,false, false]);

//practice
// function truevalue (val) {
//     return console.log(val.filter(Boolean).length)
// }
// truevalue([true,false,false,false,true,false]);

//object values extract
// function join(obj) {
//     let a = Object.entries(obj) 
//     // console.log(a);
//     let b = []
//     a.map(word => b.push(word[1]));
//     console.log(b.join(" "));
// }
// join({1: "code", 2: "your", 3: "future"})

// function join(obj){
//     let a = Object.values(obj)
//     console.log(a .join(" "));
    
// }
// join({1: "code", 2: "your", 3: "future"})

// method - 2
// function join(obj) {
//     let a = Object.values(obj).join(" ");
//     console.log(a);
// }
// join({1: "code", 2: "your", 3: "future"})


////Practice////
// function join(obj) {
//     return console.log(Object.values(obj).join(" "))
// }
// join({1: "code", 2: "your", 3: "future"})


//cap and small
// function sC (letters){
//     let c = ''
//     let s = ''
//     for(let char of letters){
//         if(char == char.toUpperCase()){
//             c += char;
//         }
//         else{
//             s += char;
//         }
//     }
//     return console.log([[s],[c]]);
// }
// sC("bridGEON");
// sC("HIshAm");

// method -2
// function sC (letters){
//     let s = letters.split("").filter(char => char == char.toUpperCase()).join(" ");
//     let c = letters.split("").filter(char => char == char.toLowerCase()).join(" ");
//     return console.log([[s],[c]]);
// }
// sC("bridGEON");
// sC("HIshAm");

// function sC(str){
//     let a = str.split("").filter(x => x == x.toUpperCase()).join("")
//     let b = str.split("").filter(x => x == x.toLowerCase()).join("")
//     console.log([[b],[a]]);
    
// }
// sC("bridGeON");

// function sC (letters){
//     let s = letters.split("").filter(letter => letter == letter.toLowerCase()).join(" ")
//     let c = letters.split("").filter(letter => letter == letter.toUpperCase()).join(" ")
//     return console.log([[s],[c]])
// }
// sC("bridGEON");


// given string of numbers with space. find low and high //
// function highLow (string) {    
//     let a = string.split(" ");    
//     console.log(`${Math.max(...a)} ${Math.min(...a)}`);    
// }
// highLow("10 30 2 -5 6");

// practice
// function hl (str){
//     let a = str.split(" ")
//     console.log(`${Math.max(...a)} ${Math.min(...a)} `);
    
// }
// hl("10 20 30 -40");

// method - 2
// function highLow (string) {    
//     let a = string.split(" ");
//     let maxi = Math.max(...a);
//     let mini = Math.min(...a);
//     a = [maxi, mini].join(" ")
//     console.log(a);
// }
// highLow("10 3 20 -5 6");


//respective operations for each characters("d" "s" i")//
// function isd (string) {
//     let a = string.split("").reduce((total, val) => (val == "i") ? total+1 : (val == "d") ? total-1 : total*total ,0)
//     console.log(a);
// }
// isd("iiss");
// isd("iiisd");
// isd("dsdi");


// mul (7, 5)//
// function mul(num, length) {
//     let a = Array.from({length}, (_,i) => (num*(i+1)))
//     console.log(a);
    
// }
// mul(12, 10);


// map example
// let a = [10,2,3,4]
// let b = a.map((val,i) => console.log(i,val))
// Output//
// 0 10
// 1 2
// 2 3
// 3 4

//mirror
// function mirror (arr) {
//    return console.log(arr.concat(arr.slice(0, -1).reverse()));
// }
// mirror([0,1,2]);

//practice mirror
// function mirror (arr){
//     return console.log(arr.concat(arr.slice(0, -1).reverse()))
// }
// mirror([1,2,3]);


//sorting
// function sorting(val, way){
//     return console.log(val.sort((a, b) => way? a.length - b.length : b.length - a.length))
//     }
// sorting(["apple", "Watermelon", "Banana"], true);
// sorting(["apple", "Watermelon", "Banana"], false);


//neat sentance//
// function cleanSentance (str) {
//     return console.log(str.trim().split(" ").filter(letter => letter.length > 0).join(" "))
    
// }
// cleanSentance("       The film           starts     at         midnight.                    ");

// digit join //
// function digitjoin(num){
//     return console.log(Array.from({length:num}, (_,i) => i+1).join("").split("").join("-"))
// }
// digitjoin(11)


//switching
// function switching (arr){
//     let a = true;
//     return console.log(arr.map(val => val == "flick" ? a = !a : a))
// }
// switching(["flick", "hi", "flick", "ab", "bab"]);


//array flatten
// function flattenArray (arr){
//     return console.log(arr.flat(Infinity));
    
// }
// flattenArray([1, [2, 3], [4, [5, 6]]]);
// flattenArray([[1, 2], [3, 4], [5, 6]]);
// flattenArray([1, [2, [3, [4, 5]]]]);


// remove the repeated digit and made a unique array

// function unique (arr){
//     let a = [...new Set(arr)]
//     console.log(a);
    
// }
// unique([1,2,2,2,3,3,3,3,4,4,4,5,5,6,7,8,9,9]);

// function unique (arr){
//     let a = arr.filter((a, b, self) => self.indexOf(a) == b)
//     console.log(a);
// }
// unique([1,2,2,2,3,3,3,3,4,4,4,5,5,6,7,8,9,9]);



// function pass(arr) {
//     let fil = arr.filter(person => person.age >= 18).filter(person => person.score.reduce((acc, curr) => acc + curr, 0) >= 100)
//     .map(person => person.name.split(" ").map(word => word.at(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));   

//     console.log(fil);
// }
// pass([{ name: "hishAm mohd", age: 22, gender: "male", score: [50, 50, 40] }, 
//     { name: "sunner", age: 14, gender: "male", score: [50, 50, 40] }, 
//     { name: "sunitha", age: 22, gender: "female", score: [50, 50, 40] },
//     { name: "amal", age: 24, gender: "female", score: [5, 50, 40] }]);


// function pass(arr) {
//     const filarr = arr
//         .filter(person => person.age >= 18 && person.score.reduce((a, b) => a + b) >= 100)
//         .map(person => (person.gender.toLowerCase() === "male" ? "Mr. " : "Ms. ") + person.name.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" "));
//     console.log(filarr);
// }

// pass([{ name: "hishAm mohd", age: 22, gender: "MaLe", score: [50, 50, 40] }, 
//     { name: "sunner", age: 14, gender: "male", score: [50, 50, 40] }, 
//     { name: "sunitha", age: 22, gender: "female", score: [50, 50, 40] },
//     { name: "amal", age: 24, gender: "female", score: [5, 50, 40] }]);


// function pass(arr) {
//     let fillarray = arr.filter(val => val.age >= 18 && val.score.reduce((acm, val) => acm + val) >= 100)
//     .map(person => (person.gender.toLowerCase() === "male" ? "Mr. " : "Ms. ") + person.name.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" "));
//     console.log(fillarray);
// }
// pass([{ name: "hishAm mohd", age: 22, gender: "MaLe", score: [50, 50, 40] }, 
//         { name: "sunner", age: 17, gender: "male", score: [50, 50, 40] }, 
//         { name: "sunitha", age: 18, gender: "female", score: [50, 50, 40] },
//         { name: "amal", age: 24, gender: "female", score: [5, 50, 40] }]);


// const longestPalindrome = (s) => {
//     let res = '', n = s.length;
//     for (let i = 0; i < n; i++) {
//         for (let j of [i, i + 1]) {
//             for (let x = i, y = j; s[x] && s[x] === s[y]; x--, y++) 
//                 res = (y - x + 1 > res.length) ? s.slice(x, y + 1) : res;
//         }
//     }
//     return console.log(res);
// };



// function truevalue(ar){
//     let a = ar.filter(Boolean)
//     console.log(a);
// }
// truevalue([true, true, false,false,false, false]);


// var longestPalindrome = function(str) {
//     if(str.length < 1 || str === null) return "";
//     let longest = "";
//     for(let i = 0; i<str.length; i++){
//         let oddPalindrome = expandFromCenter(str, i, i);
//         let evenPalindrome = expandFromCenter(str, i-1, i);

//         if(oddPalindrome.length > longest.length){
//             longest = oddPalindrome;
//         }
//             if(evenPalindrome.length > longest.length){
//             longest = evenPalindrome;
//         }
//     }
//             return longest;
// }
// function expandFromCenter(str, left, right){
//     let i = 0;
//     while (str[left - i] && str[left - i] === str[right + i]){
//         i++;
//     }
//     i--;
//     return console.log(str.slice(left - i, right + i + 1));
// }

// longestPalindrome("racecar")


//palindrome in string
// function longestPalindrome(str){
//     if(str.length < 1 || str === null) return "";
//     let longest = "";
//     for(let i = 0; i<str.length; i++){
//         let oddPalindrome = expandFromCenter(str, i, i);
//         let evenPalindrome = expandFromCenter(str, i-1, i);

//         if(oddPalindrome.length > longest.length){
//             longest = oddPalindrome;
//         }
//             if(evenPalindrome.length > longest.length){
//             longest = evenPalindrome;
//         }
//     }
//             return longest;
// }
// function expandFromCenter(str, left, right){
//     let i = 0;
//     while (str[left - i] && str[left - i] === str[right + i]){
//         i++;
//     }
//     i--;
//     return str.slice(left - i, right + i + 1);
// }

// console.log(longestPalindrome("aracecarbabb"));



///
// function longestPalindrome(str) {
//     if (str.length < 1) return "";
    
//     let longest = "";
    
//     for (let i = 0; i < str.length; i++) {
//         let oddPalindrome = expandFromCenter(str, i, i);
//         let evenPalindrome = expandFromCenter(str, i, i + 1);


//         if (oddPalindrome.length > longest.length) {
//             longest = oddPalindrome;
//         }
//         if (evenPalindrome.length > longest.length) {
//             longest = evenPalindrome;
//         }
//     }
    
//     return longest;
// }

// function expandFromCenter(str, left, right) {
//     while (left >= 0 && right < str.length && str[left] === str[right]) {
//         left--;
//         right++;
//     }
//     return str.slice(left + 1, right);
// }

// console.log(longestPalindrome("aba"));




// function ab(){
//     let a = 5
//     function cb(){
//         return console.log(a);
        
//     }
//     return cb();
// }

// ab();


// ab();
// var a= 5;
// function ab(){
// console.log(a);

// }



// function ab(arr){
//     let a = arr.map(x =>x.reduce((acm, val) => acm+val))
//     console.log(a);
    

// }
// ab([[100,100,100],[20,30,40],[10,10,20]])

// function ab(arr){
//     let a = arr.score.map(x =>x.reduce((acm, val) => acm+val))
//     console.log(a);
    

// }

// ab({score: [[100,100,100],[20,30,40],[10,10,20]]});



// Practice qns
//repeat
//  function repeat (str){
//     let a = str.split("").map(a => a.repeat(2)).join("")
//     console.log(a);
    
//  }
//  repeat("String");
//  repeat("Hello World");


//reverse
// function rev(str){
//     let a = str.split("").reverse().join(" ")
//     console.log(a);
    
// }
// rev("trams era uoy")


// 54321
// 4321
// 321
// 21
// 1
// for(i=5; i>=1; i--){
//     let row = ""
//     for(j=i; j>=1; j--){
//         row += j
//     }
//     console.log(row);
    
// }


// 54321
// 5432
// 543
// 54
// 5
// for(i=1; i<=5; i++){
//     let row = ""
//     for(j=5; j>=i; j--){
//         row += j
//     }
//     console.log(row);
// }


// multiples to n
// function mul(num, length){
//     let a = Array.from({length}, (_,i) => i+1).map(x => x * num)
//     console.log(a);
// }
// mul(7,5);
// mul(12,10);


//largest
// function findLargest(arr) {
//     let a = arr.map(x => Math.max(...x))
//     console.log(a);
    
// }
// findLargest([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
// findLargest([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]);



// hallow triangle
// * 
// * * 
// *   * 
// *     * 
// * * * * * 
// for(i = 1; i<=5; i++){
//     let row = ""
//     for(j = 1; j<=i; j++){
//         if(j == 1 || j == i || i == 5){
//             row += "* "
//         }
//         else{
//             row += "  "
//         }
//     }console.log(row);
    
// }


// age difference
// function ageMembers(arr){
//     let a = arr.map(x => x.age)
//     console.log(`${Math.min(...a)} ${Math.max(...a)} ${Math.max(...a) - Math.min(...a)}`);
// }
// ageMembers([
//     { name: "Mark", age: 38 },
//     { name: "Charlie", age: 10 }, 
//     { name: "Anna", age: 25 }
//     ]);
// ageMembers([
//     { name: "Rachel", age: 20 }, { name: "Jennifer", age: 45 }, { name: "Jack", age: 43 },
//     { name: "Maria", age: 3 }
//     ])

//price
// function totalPrice(arr) {
//     let a = arr.reduce((total, item) => total + (item.quantity * item.price),0);
//     console.log(a);
// }
// totalPrice([{ product: "Milk", quantity: 3, price: 10 },{ product: "Biscuit", quantity: 1, price: 20 }]);



//price
// function ab(arr) {
//     let a = arr.reduce((acm, val) => acm + (val.quantity * val.price),0)
//     console.log(a);
    
// }
// ab([{ product: "Milk", quantity: 3, price: 10 },{ product: "Biscuit", quantity: 1, price: 20 }]);
// ab([
//     { product: "Milk", quantity: 1, price: 10 },
//     { product: "Eggs", quantity: 12, price: 5 },
//     { product: "Bread", quantity: 2, price: 20 }, { product: "Cheese", quantity: 1, price: 30 }
//     ])


// function pass(arr) {
//     let fillarray = arr.filter(val => val.age <= 18 && val.score.reduce((acm, val) => acm + val) >= 100)
//     .map(person => (person.gender.toLowerCase() === "male" ? "Mr. " : "Ms. ") + person.name.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" "));
//     console.log(fillarray);
// }

// pass([{ name: "hishAm mohd", age: 12, gender: "MaLe", score: [50, 50, 40] }, 
//         { name: "sunner", age: 17, gender: "male", score: [50, 50, 40] }, 
//         { name: "sunitha", age: 18, gender: "female", score: [50, 50, 40] },
//         { name: "amal", age: 24, gender: "female", score: [5, 50, 40] }]);



// function odd(arr){
//     for(i=0; i<arr.length; i++){
//     if(!arr.includes(i)){
//     console.log(i);
//     }
    
// }}
// odd([0,1,3,4,5]);





// function rev(string){
//     let a = string.split(" ").map(word => (word.length > 2) ? word[0].toUpperCase() + word.slice(1) : word).join(" ");
//     console.log(a);
    
// }
// rev("apple of banana");
// // 


// Week 4 qns
// 54321
// 5432
// 543
// 54
// 5
// for (i = 0; i<=5; i++){
//     let row = "";
//     for(j=5; j>i; j--){
//         row += j
//     }console.log(row);
    
// }


//operator in string
// function calculator(num1, operator, num2) {
//     if (operator === "+") {
//         return num1 + num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "*") {
//         return num1 * num2;
//     } else if (operator === "/") {
//         return num1 / num2;
//     } else {
//         return "Invalid operator";
//     }
// }
// console.log(calculator(2, "+", 2));
// console.log(calculator(2, "*", 2));
// console.log(calculator(4, "/", 2));
// console.log(calculator(2, "-", 2));

//method 2//
// function calculator(num1, operator, num2) {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//         default:
//             return "Invalid operator";
//     }
// }


//find the odd one
// function oddOne(arr) {
//     let a = arr.filter(x => arr.indexOf(x) == arr.lastIndexOf(x)).join("")
//     console.log(a);
    
// }
// oddOne([2, 2, 1]);
// oddOne([4, 1, 2, 1, 2]);
// oddOne([3]);

//nearestChapter
// function nearestChapter(chapters, currentPage) {
//     return Object.keys(chapters).reduce((a, b) =>
//         Math.abs(chapters[a] - currentPage) < Math.abs(chapters[b] - currentPage) ||
//         (Math.abs(chapters[a] - currentPage) === Math.abs(chapters[b] - currentPage) && chapters[a] > chapters[b]) ? a : b
//     );
// }

// // Examples
// console.log(nearestChapter({ chapter1: 1, chapter2: 15, chapter3: 20 }, 10)); 
// console.log(nearestChapter({ HTML: 7, CSS: 10, JavaScript: 15 }, 12));
// console.log(nearestChapter({ A: 5, B: 1}, 3));


//Write a function that reverses all the words in a sentence that start with a particular letter
// function specialReverse(str, char) {
//     let a = str.split(" ").map(word => (word[0] == "s")? word.split("").reverse().join("") : (word[0] == "m")? word.split("").reverse().join("") : (word[0] == "p")? word.split("").reverse().join("") : word).join(" ")
//     console.log(a);
// }
// specialReverse("word searches are super fun", "s")
// specialReverse("first man to walk on the moon", "m")
// specialReverse("peter piper picked pickled peppers", "p")e

//remove duplicates
// var removeDuplicates = function(nums) {
//     return nums.filter((x,index,arr) => arr.indexOf(x) == index)
// };
// console.log(removeDuplicates([1,1,2,3,3,4]));


//is pali return true else false
// var isPalindrome = function(x) {
//     let a = String(x).split(" ").filter(word => word == word.split("").reverse().join(""))
//     if(a.length === 0){
//         console.log(false);
        
//     }
//     else{
//         console.log(true);
        
//     }
// };
// isPalindrome(123)

// length last word
// var lengthOfLastWord = function(s) {
//     let a = s.split(" ")
//     let b = a.length
//     return a[b-1].length;
// };
// console.log(lengthOfLastWord("hello world"))

// reverse integer



//median of two
// var findMedianSortedArrays = function(nums1, nums2) {
//     let a = nums1.concat(nums2).sort((a,b) => a-b)
//     let length = a.length
//     if (length % 2 === 1) {
//         return a[Math.floor(length / 2)];
//     } else {
//         let mid1 = a[length / 2 - 1];
//         let mid2 = a[length / 2];
//         return (mid1 + mid2) / 2;
//     }
    
// };
// findMedianSortedArrays([1,3],[2])

//roman to integer
// var romanToInt = function(s) {
//     let map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
//     return s.split('').reduce((acc, char, i) => {
//         let value = map[char];
//         return acc + (value < map[s[i + 1]] ? -value : value);
//     }, 0);
// };
// console.log(romanToInt("IIIV"));


// area of circle
// function area(radius) {
//     let a = radius.map((x) => Math.PI * x * x)
//     console.log(a);    
// }
// area([3,1,2,4])

//into binary
// let arr = [3,2];
// function binary(arr){
//     let a = arr.map((x) => x.toString(2));
//     console.log(a);    
// }
// binary(arr)


// const users = [
//     {firstName: "akshay", lastName: "saini", age: 26 },
//     {firstName: "donald", lastName: "trump", age: 75},
//     {firstName: "elon", lastName: "musk", age: 50 },
//     {firstName: "deepika", lastName: "padukone", age: 26 }
// ]

// let op = users.reduce(function (acc, val){
//     if(val.age < 30){
//         acc.push(val.firstName)
//     }
//     return (acc);
// },[])
// console.log(op);


// let op = users.reduce(function(acc,val){
//     if(acc[val.age]){
//         acc[val.age] = ++acc[val.age]
//     }
//     else{
//         acc[val.age] = 1
//     }
//     return acc
// },{})

// console.log(op);

// //largest number from a array
// var largestNumber = function(nums) {
//     let a = nums.map(x => x.toString()).sort((a,b) => (b+a) - (a+b)).join("");
//     if(a[0] === '0') return '0'
//     else return a
// };
// console.log(largestNumber([3,30,34,5,9]));

//find the first missing positive number
// function odd(val){
//     let a = val.filter(x => x>0).sort((a,b) => a-b);
//     let b = new Set(a)
//     let c = [...b]
//     console.log(c);
    
//     for(i=0; i<Infinity; i++){
//     if(c[i] != i+1) return i+1
//     }
// }
// console.log(odd([6,3,2]));


//secondlargest
// secondLargest([5,2,9,-7])
// function secondLargest(arr){
//     l = -Infinity; sl = -Infinity
//     for(i=0; i<arr.length; i++){
//         if(arr[i] > l){
//             sl = l;
//             l = arr[i]
//         }
//         else if(arr[i]>sl && arr[i]<l){
//             sl = arr[i]
//         }
//     }
//     console.log(sl);
    
// }

// lowest in an array using oneloop
// lowest([-1,3,1,-5])
// function lowest(arr){
//     low = Infinity
//     for(i = 0; i<arr.length; i++){
//         if(arr[i] < low){
//             low = arr[i]
//         }
//     }console.log(low);
    
// }



//secondlowest
// secondLargest([5,2,-9,-7])
// function secondLargest(arr){
//     l = Infinity; sl = Infinity
//     for(i=0; i<arr.length; i++){
//         if(arr[i] < l){
//             sl = l;
//             l = arr[i]
//         }
//         else if(arr[i]>l && arr[i]<sl){
//             sl = arr[i]
//         }
//     }
//     console.log(sl);
    
// }


// search the string
// var strStr = function(haystack, needle) {
//     let a = haystack.search(needle)
//     console.log(a);
    
// };
// strStr("leetcode", "leeto")

//plusone and return the number in array
// function plusOne (digits) {
//     let a = Number(digits.join("")) + 1;
//     let b = [a].join("").split("").map((Number))
//     return b
// };
// plusOne([9])

//binary add
// var addBinary = function(a, b) {
//     let q = parseInt(a, 2)
//     let w = parseInt(b, 2)
//     let sum = (q+w).toString(2)
//     console.log(sum);
// };
// addBinary('11','1')

// console.log("hello\fworld");

 

// i = 0
// while(i<=5){
//     console.log(i);
//     i++
// }

// i=1
// do {
//     console.log(i);
//     i++    
// } while (i<=5);



// function first() {
//     console.log('First');
//     second();
//     console.log('First again');
//   }
  
//   function second() {
//     console.log('Second');
//     third();
//   }
  
//   function third() {
//     console.log('Third');
//   }
  
//   first();


// //microstack queue example
// console.log('Start');

// Promise.resolve().then(() => {
//   console.log('Promise 1');
// }).then(() => {
//   console.log('Promise 2');
// });

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// console.log('End');

//closure
// function outer(){
//     function inner(){
//         console.log(a);
//     } 
//     var a=5
//     return inner;
// }
// outer()()


// data encapsulation
//hide variables from the global scope
// function counter(){
//     let count = 0
//     return function ab(){
//         count += 1
//         return count 
//     };
// }
// let a = counter()
// console.log(a());//1
// console.log(a());//2
// console.log(a());//3

//this is arrow funtion
// let a = {
//     fname: "Hisham",
//     lname: "C",
//     age: 20,
//     fullName: ()=>{return this.fname + " " + this.lname}
//     }

// console.log(a.fullName()); //undefined


//recursion
// function fact(n){
//     if(n===0) return 1;
//     return n * fact(n-1)
// }
// console.log(fact(5));

//callback example
// function callback1(callback){
//     callback();
// }

// callback1(()=> console.log("hi"));

// impure function
// let count = 0;
// function increment() {
//   count += 1;  // Modifies external state (count variable)
//   return count;
// }
// console.log(increment());
// console.log(increment());


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`hello im ${this.name}. ${this.age} years old`);
//     }
// }

// let person1 = new Person("Alice", 21)
// person1.greet()


//impure funtion
// let globalCounter = 0;
// function incrementCounter() {
//     globalCounter += 1;
//     return globalCounter;
// }

// // Example usage
// console.log(incrementCounter());
// console.log(incrementCounter());
// console.log(globalCounter);


// let a = setInterval(() => {
//     console.log("hello");
    
// }, 2000);

// setTimeout(() => {
//     clearInterval(a)
// }, 5000);


// const multilineString = `This is a string
// that spans 
// multiple lines.`;
// console.log(multilineString);

// let arr = [1, 2, 3];
// arr.fill(0, 1, 2); // [1, 0, 3]
// console.log(arr);


//Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   console.log(fruits);
//   console.log(fruits.size);
//   console.log(fruits.has("banana"));
//   console.log(fruits.keys());
  
  
  
  

//Map and methods
// const fr = new Map();
// fr.set("apple",500);
// fr.set("ap",100);
// fr.set("ape",600);
// console.log(fr);



//Set and set methods
// let a = new Set([1,2,3,4])
// a.add("d")
// a.delete("d")
// console.log(a);
// console.log(a.size);
// console.log(a.has("a"));
// console.log(a.values());
// console.log(a.keys());
// let b = Array.from(a).map((x)=>x)
// console.log(b);


//currying example
// function add(a,b,c){
//     return a+b+c
// }
// function curriedAdd(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// let sum = curriedAdd(2)(3)(4);
// console.log(sum);

// //bom
// console.log(screen.width);
// console.log(location.href);
// console.log(navigator.platform);


