'use strict' ;
/*let userName=prompt('what\'s your name ?')
alert('welcome to our site '+userName)

let age= prompt('my age is 26 yes or no ?')
age= age.toLowerCase();
if (age=='yes') {alert('that\'s true') }
else {alert('that\'s false')}

//console.log('my age is 26')

let food= prompt('my favourite food is mansaf yes or no ?')
food= food.toLowerCase();
if (food=='yes') {alert('that\'s true') }
else {alert('that\'s false')}

//console.log('my favourite food is mansaf')

let hobbie=prompt('my favourite hobbie is playing cards yes or no ?')
hobbie= hobbie.toLowerCase();
if (hobbie=='yes') {alert('that\'s true') }
else {alert('that\'s false')}

//console.log('my favourite hobbie is playing cards')

let team=prompt('my favourite team is Real madrid yes or no ?')
team= team.toLowerCase();
if (team=='no') {alert('that\'s true my favourite team is barcelona') }
else {alert('that\'s false my favourite team is barcelona')}

//console.log('my favourite team is barcelona')

let movie=prompt('my favourite movie is sherlock holmes yes or no ?')
movie= movie.toLowerCase();
if (movie=='yes') {alert('that\'s true') }
else {alert('that\'s false')}

//console.log('my favourite movie is sherlock holmes')

alert('thank you for visiting our site '+userName) */





/*for (let i = 0; i < 4; i++) {
  let number=prompt('guess a number between 0 and 10') ;
   if (number<=5) {alert('too low!'); }else if (number>=9) {alert('too high!');}
       else if (number==6 || number==8) {alert('too close!');}
       else if (number==7) {alert('correct!')
       break;
   } 
       if (i==3) {
           alert('the answer is 7')
       }    
   }
*/






for (let i = 0; i <6; i++) {

    for (let j = 0; j < 3; j++) {
        let typesOffood=['mansaf','shawerma','burger','fried chicken']

    let favouriteFood=prompt('guess what is my favourite food ?')
        if (favouriteFood==typesOffood[j]) {alert('correct!')
         break;
         ;
             
         }
            

    }

}



