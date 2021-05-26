'use strict'
let score = 0;
let userName = prompt("Hello! Introduce yourself")
alert('Hello ' + userName + ' You are welcomed!')
alert("I hope you will have fun browsing this website " + userName);

let introduction = prompt('Do you think I am human?');
introduction = introduction.toLowerCase();
if(introduction === 'yes' || introduction === 'y')
{
    console.log('Yes. You are right!')
    alert('Yes. You are right!')
    score++;
} else if (introduction === 'no' || introduction === 'n'){
     console.log('No.I am human')
alert('No.I am human')
}else {
     console.log('try one more timet')
    alert('try one more time')

};

let sport = prompt('Do you think I can swim?')
sport = gender.toLowerCase();
if (sport === 'yes' || sport ==='y'){
    console.log('Yes. You are right')
    alert('Yes. You are right!')
    score++;

}else if (sport === 'no' || sport === 'n'){
    console.log('Who cant swim!')
    alert('Who cant swim!')
}else{
     console.log('Try one more time')
    alert ('Try one more time')

}







let reading = prompt('Do you think I enjoy reading?')
reading = reading.toLowerCase();
if(reading === 'yes' || reading === 'y'){
console.log('Good job!')
alert('Good job!')
score++;

}else if (reading ==='no' || reading ==='no'){
    console.log('Error')
alert('Error')
}else {
   console.log('That is not an expected answer')
    alert('That is not an expected answer')
}




let food = prompt('Do you think my favourite food is sea food?')
food = food.toLowerCase();
switch(food){
    case 'yes':
         console.log('Indeed, it is')
        alert('Indeed, it is');
    break;
    case 'no':
        console.log('wrong answer')
            alert('wrong answer');
            score++;
    break;
    default :
     console.log('Answers are yes or no')
            alert('Answers are yes or no');

let makeup = prompt('Do you think I like makeup?')
makeup = makeup.toLowerCase();
    switch(makeup){
        case 'yes':
           console.log('No, i dont')
     alert('No, i dont');
        break;
      case 'no':
        console.log('yes. right')
        alert('yes. right');
          score++;
          break;
        default :
      console.log('Think again')
         alert('Think again');
            




let age = prompt('Can you guess my age?')
for(let i = 0; i < 3; i++ ){
    if(Number(age) === 28){
        console.log('Yes. correct!')
alert('Yes. Corect!')
score++;
break;
}
else if(Number(age) < 28){
    console.log('Try a higer number')
    age = prompt('Try a higher number')


}
else if(Number(age) > 28){
    console.log('Try a lesser number')
    age = prompt('Try a lesser number')


}
 if(i === 2){
   alert('My age is 28')
 }   
}





function favNumber (){
let languages = prompt('Can you guess one of my favourite numbers?')
let correctAnswers = [1, 2, 3];

for(let i = 0; i < 5; i++ ){
    if(Number(languages) === correctAnswers[0] || Number(languages) === correctAnswers[1] || Number(languages) === correctAnswers[2]){
alert('Yes. Correct!')
console.log('Yes. Correct!')
score++;
break;
}
else {
    languages = prompt('Try another answer')
    console.log('Try another time')


}

 if(i === 4){
   alert('My favourites numbers are 1 , 2 and 3')
 }   
 alert('Your score is ' + score)
 


}}}}
favNumber();