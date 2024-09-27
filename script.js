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