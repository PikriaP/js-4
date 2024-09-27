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
