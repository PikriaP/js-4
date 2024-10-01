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


 //4
 function js_style(){
    const paragraph = document.getElementById('text');
    paragraph.style.fontsize='48px';
    paragraph.style.color='red';
    paragraph.style.fontWeight='bold';
    paragraph.style.fontFamily='Arial';
 }
    
 const button= document.getElementById('jsstyle');
 button.style.backgroundColor = 'blue';     
    button.style.color = 'white';               
    button.style.border = '2px solid darkblue'; 
    button.style.padding = '10px 20px';        
    button.style.fontSize = '16px';           
    button.style.borderRadius = '5px';        
    button.style.cursor = 'pointer';


    function createDropDownAndButton() {
        const dropdown = document.createElement('select');
        dropdown.id = 'myDropdown'; 
        const options = ['white', 'black', 'green', 'yellow'];
        options.forEach((optionText, index) => {
            const option = document.createElement('option');
            option.value = index + 1;
            option.textContent = optionText;
            dropdown.appendChild(option);
        });
    
        const button = document.createElement('button');
        button.id = 'removeButton';
        button.textContent = 'Remove Selected Item';
        button.onclick = removeSelectedItem;
    
        const container = document.getElementById('container');
        container.appendChild(dropdown);
        container.appendChild(button);
    }
    
    // Remove selected item
    function removeSelectedItem() {
        const dropdown = document.getElementById('myDropdown'); // Fixed typo here
        const selectedIndex = dropdown.selectedIndex;
        if (selectedIndex !== -1) {
            dropdown.remove(selectedIndex);
        } else {
            alert('Please select an item to remove.');
        }
    }
    
    createDropDownAndButton();


    