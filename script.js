const person= {
    name: 'pikria',
    age: 35,
    height: 168,
    profession: 'Jurnalist',
    };

for (const key in person){
    console.log(`${key}: ${person[key]}`);
    
    
}


// Homework
// 1
const sortedLetters = (word) => {
    return word.split('').sort().join(''); 
};


console.log(sortedLetters('webmaster')); 

// 2
function makeId(length){
    
let text= "";
const textString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < length; i++) {
    text += textString.charAt(Math.floor(Math.random()*textString.length));
}
return text;
}

console.log(makeId(5));


//3
const numbersArray = [1, 24, 28, 25, 72, 6, 496, 12];

 function isNumPerfect(num) {
    let sum=0;
   for (let i = 1; i < num; i++) {
     if(num % i === 0){
        sum+=i;
     }
    
   } 
   if (sum===num){
    return true;
   }else {
    return false;
   }
 }


 const checker = function numberCecker (arr){
    arr.forEach(num=>{
       if (isNumPerfect(num)) {
        console.log(num + ' is perfect number');
       }else{
        console.log(num + " isn't perfect number");
       }
    });
 }
 checker(numbersArray);
