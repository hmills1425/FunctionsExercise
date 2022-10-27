// FUNCTIONS EXERCISE
const b = 'repeat'.repeat(25);
// 1
function fozzieBear(){
    console.log('Wocka Wocka!');
}
fozzieBear();

console.log(b);

// 2
function beaker(speak){
console.log(speak)
console.log(speak)
console.log(speak)
console.log(speak)
}
beaker('Meep');

// OR
// function beaker(speak){
//  console.log(speak.repeat(4));

// }
// beaker('Meep ');

// 3
function muppetShow(a, b){
    if (a=== 'Muppet'&& b === 'Show'){
        console.log('It's time to play the music. It's time to light the lights.');
    }
}

muppetShow('Muppet', 'Show');

console.log(b);

// 4
function kermit(){
    return 'Kermit the Frog';
}

kermit();
console.log(kermit());

console.log(b);

// 5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } else {
        return false;
    }
}

console.log(muppetSeason(5));

console.log(b);

// 6
const manOrMuppet= function (){
    console.log('Am I a man or am I a Muppet?');
}
manOrMuppet();

// 7
rainbowConnection =() => 'Someday we'll find it. The Rainbow Connection. The lovers, the dreamers, and me';
console.log(rainbowConnection());

// 8
// No

// 9
// Yes

// 10a
const newMuppetMovies = [
    'The Muppets',
    'Muppets Most Wanted'
];

// 10b

    // const upperMovies = newMuppetMovies.map(function(x){
    // return x.toUpperCase();
// });
// console.log(upperMovies);

// OR
const upperMovies = newMuppetMovies.map(movies => movies.toUpperCase());
console.log(upperMovies)


// BONUS
// 11a
const oldMuppetMovies = [
"The Muppet Movie"
"The Muppets Take Manhattan"
"The Great Muppet Caper"
"The Muppet Christmas Carol"
"Muppet Treasure Island"
"Muppets From Space"
];

// 11b
const twoMovies = oldMuppetMovies.filter(a => a.length ===22);
console.log(twoMovies)

// 12a
const charactersOne = [
    'Statler'
    'Waldorf'
];

// 12b
const charactersTwo = [
    'The Swedish Chef',
    'Animal',
    'Rowlf'
];

// 12c
randomMuppets = (characters) => {
   console.log('${characters[Math.floor(Math.random() * characters.length)]}');
    
}

// 12d
randomMuppets(charactersOne);
randomMuppets(charactersTwo);

// 13
caps = (string) => {
    let newString = '';
    for (i = 0; i < string.length; i++){
        if (i % 2 === 0) {
            newString += string[i].toUpperCase();
        } else {
            newString += string [i].toLowerCase();
        }
    }
    return newString;
}
console.log(caps ('Hello World'));

// EXTRA BONUS

caps = (string) => {
    let newString = '';
    for (i = 0; i < string.length; i++){
        if  (string[i] === ''){
            newString += '';
        } else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        }else{
            newString += string[i].toLowerCase();
            count++;
        }
    }    
    return newString;
}         
            
console.log(caps('Hello World'));
