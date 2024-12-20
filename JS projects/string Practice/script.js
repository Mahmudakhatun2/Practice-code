// let fullName = prompt('Enter your name :');
// let userName = `@${fullName}${fullName.length}`;
// console.log(userName);







// let name = prompt('Enter Your full name without space:');
// let first3 = name.slice(0,3);
// let last3 = name.slice(-3)
// let newsName = `${first3}${last3}`;
// if(newsName.length > 3){
//    console.log(newsName);
// }else{
//     console.log(name);
// }






// let stu_marks = [85, 97, 44, 37, 76, 60];
// let total_num = 0;
// for (let val of stu_marks){
//          total_num += val ;
//          console.log(total_num/stu_marks.length);
        
// }






// let items = [250,645,300,900,50];
 
// for (let val of items){
//    items = val * 90/100;
//    console.log(items);
// }






// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// companies.shift();
// console.log(companies);
// companies.splice(1,1,"Ola");
// console.log(companies);
// companies.push('Amazon');
// console.log(companies);





// let  vow = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
   
// let vowe;
// function vowel(str) {
//     let count = 0;
//    for(const char of str){
//       for(let i=0; i<= vow.length; i++){
//          vowe = vow[i];
//          if(char === vowe){
//             count++;
//           }
//       }
      
//    }
//    console.log(count) ;
// }

// vowel('I love to listen music and also love to watch movies and series');







// let arr = [2,3,4,5,6,7,8,9];

// arr.forEach((val)=>{
//    console.log(val**2);
// })




// let stu_marks = [65, 98, 100, 95, 87, 25, 99, 45, 99, 92 , 94];

// let newMarks = stu_marks.filter((val)=>{
//       return val > 90;
// });
// console.log(newMarks);




let n = prompt('enter a number');
let numbers = [];

for (let i = 1; i <= n ; i++){
   numbers[ i- 1] = i;
}
console.log(numbers);
 const sum = numbers.reduce((res,curr)=>{
      return res + curr;
 })
 console.log(sum);