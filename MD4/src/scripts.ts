// TASK1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const task1 = (a: number, b: number): number => a + b;
console.log(task1(1, 2)); // -1
console.log(task1(10, 5)); // 5
console.log(task1(99, 1)); // 98

//TASK2
// Write a function that takes a value as argument
// Return the type of the value

const task2 = (a: any) => {
    return (typeof(a));
};

console.log(task2(1)); // number
console.log(task2(false)); // boolean
console.log(task2({})); // object

// TASK3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const task3 = (a: any, b: any): boolean => {
    if(typeof(a) === typeof(b) && b === a) return true;

    return false;
};

console.log(task3(2,3)); // flase
console.log(task3(3,3)); // true
console.log(task3(1,'1')); // false
console.log(task3('10','10')); // true

// TASK4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const task4 = (a: string, b: number): string => {
    if(b === 0) return a[0];

    return a[b-1];
};

console.log(task4('abcd',1)); //a
console.log(task4('zyxbwpl',5)); //w
console.log(task4('gfedcba',3)); //e

// TASK5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const task5 = (a: string): string => {

    if(a.length < 4) return '';

    return (a.slice(3));
};

console.log(task5('abcdefg')); //'defg'
console.log(task5('1234')); //'4'
console.log(task5('fgedcba')); //'dcba'
console.log(task5('dsa')); //''

// TASK6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const task6 = (a: string): string => {

    if(a.length < 4) return a;

    return (a.slice(a.length-3));
};

console.log(task6('abcdefg')); //'efg'
console.log(task6('1234')); //'234'
console.log(task6('fgedcba')); //'cba'
console.log(task6('dsa')); //'dsa'

// TASK7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const task7 = (a: string): string => {

    if(a.length < 4) return a;

    return (a.slice(0, 3));
};

console.log(task7('abcdefg')); //'abc'
console.log(task7('1234')); //'123'
console.log(task7('fgedcba')); //'fge'
console.log(task7('dsa')); //'dsa'

// TASK8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const task8 = (a: string): string => {

    if(a.length < 2) return a;

    return (a.slice(0, Math.round(a.length/2)));
};

console.log('task8');

console.log(task8('abcdefg')); //'abcd'
console.log(task8('1234')); //'12'
console.log(task8('fgedcba')); //'fged'
console.log(task8('dsa')); //'ds'

// TASK9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result


const task9 = (a: string): string => {

    if(a.length < 4) return '';

    return (a.slice(0, a.length-3));
};
console.log('task9');
console.log(task9('abcdefg')); //'abcd'
console.log(task9('1234')); //'1'
console.log(task9('fgedcba')); //'fged'
console.log(task9('dsa')); //''

// TASK10 
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a


const task10 = (a: number, b: number): number =>((a/100) * b);
console.log(task10(100, 50)); // -1
console.log(task10(10, 1)); // 5
console.log(task10(500, 25)); // 98

// TASK11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const task11 = (a: number, b: number, 
                c: number, d: number, 
                e: number, f: number): number =>Math.pow(((a+b-c) * d / e), f);

console.log('task11');             
console.log(task11(6,5,4,3,2,1)); // 10.5
console.log(task11(6,2,1,4,2,3)); // 2744
console.log(task11(2,3,6,4,2,3)); // -8

//TASK12
//Write a function that takes a number as argument
//If the number is even, return true
//Otherwise, return false

const task12 = (a: number): boolean => (a & 1) == 0;

console.log(task12(10)); // -1
console.log(task12(-4)); // 5
console.log(task12(5)); // 98
console.log(task12(-111)); // 98

// TASK13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const task13 = (a: string, b: string): number => b.split(a).length - 1;

console.log(task13('m',
 'how many times does the character occur in this sentence?')); 
 // 2
console.log(task13('h',
 'how many times does the character occur in this sentence?'));
  // 4
console.log(task13('?',
 'how many times does the character occur in this sentence?'));
  // 1
console.log(task13('z', 
'how many times does the character occur in this sentence?'));
 // 0

// TASK14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const task14 = (a: number): boolean => a % 1 === 0;

console.log(task14(4)); // true
console.log(task14(1.123)); // false
console.log(task14(1048)); // true
console.log(task14(10.48)); // false

// TASK15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const task15 = (a: number, b: number): number => {
    if(a < b){
        a /= b;
    }else{
        a*=b;
    }

    return a;
};

console.log(task15(10, 100)); // 0.1
console.log(task15(90, 45)); // 4050
console.log(task15(8, 20)); // 0.4
console.log(task15(2, 0.5)); // 1

// TASK16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const task16 = (a: string, b: string): string => {

    if(a.includes(b)) return b + a;

    return a + b;
};

console.log(task16('cheese', 'cake')); 
console.log(task16('lips', 's')); //SLIPS
console.log(task16('Java', 'script')); 
console.log(task16(' think, therefore I am', 'I')); //'I think, therefore I am'

// TASK17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const task17 = (a: number): number => parseFloat(a.toFixed(2));

console.log(task17(2.1234343)); // -1
console.log(task17(3.136)); // 5
console.log(task17(1.123465656)); // 98
console.log(task17(26.1373545)); // 98

// TASK18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
 
const task18 = (a: number): any => a.toString().split('');

console.log(task18(10)); // 1,0
console.log(task18(931)); // 9,3,1
console.log(task18(193278)); 

// TASK19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const task19 = (a: string, b: string): string => {
    
    return a.charAt(0).toUpperCase() + (a.replace("%", '') + b.replace("%", '').split("").reverse().join("")).slice(1);
};

console.log(task19('java', 'tpi%rcs')); 
console.log(task19('c%ountry', 'edis')); 
console.log(task19('down', 'nw%ot'));  //'Downtown'

// TASK20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const task20 = (a: number): number => {

    for (var i = 2; i < a; i++) { 
        if(a % i === 0){
            a++;
            i = 2;
        };
    };
    
    return a;
};

console.log(task20(38)); 
console.log(task20(7)); 
console.log(task20(115)); 
console.log(task20(2000)); 

//TASK21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const task21 = (a: number, b: number): number => {

    while(a % b != 0){
        a++;
    }
    
    return a;
};

console.log(task21(1, 23)); 
console.log(task21(23,23)); 
console.log(task21(7, 3)); 
console.log(task21(-5, 7)); 


// TASK22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const task22 = (a: string, b: string): string => {
    let c = a;
    let j = 0;

    for(let i = c.length-1; i != 0; i--){
        j++;
        if(j % 3 === 0){
            a = a.slice(0, i) + b + a.slice(i);
        }
    }
    
    return a;
};

console.log(task22('1234567','.')); 
console.log(task22('abcde','$')); 
console.log(task22('zxyzxyzxyzxyzxyz','w'));

//TASK23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const task23 = (a: string): string => {

    let c = a.split('');

    for(let i = 0; i < a.length; i++){
        let b = c[i].charCodeAt(0) + 1;
        c[i] = String.fromCharCode(b);
    }   
    
    return c.join('');
}

console.log(task23('bnchmf')); 
console.log(task23('bgddrd')); 
console.log(task23('sdrshmf'));

// TASK24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const task24 = (a: number[], b: number): number => a[--b];

console.log(task24([1,2,3,4,5],3)); 
console.log(task24([10,9,8,7,6],5)); 
console.log(task24([7,2,1,6,3],1));

// TASK25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const task25 = (a: number[]): number[] =>{

    for (let i = 0; i < 3; i++) {        
        a.shift();
    }

    return a;
};
console.log(task25([1,2,3,4,5])); 
console.log(task25([10,9,7,6,5 ,6 ,7])); 
console.log(task25([7,2,6,3]));

// TASK26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const task26 = (a: number[]): number[] =>{

    while(a.length != 3){
        a.shift();
    }

    return a;
};

console.log("TASK26")
console.log(task26([1,2,3,9,5])); 
console.log(task26([10,9,7,6,5 ,9 ,7])); 
console.log(task26([7,2,9,3]));

// TASK27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array


const task27 = (a: number[]): number[] =>{

    while(a.length != 3){
        a.pop();
    }

    return a;
};

console.log("TASK27")
console.log(task27([1,2,3,9,5])); 
console.log(task27([10,9,7,6,5 ,9 ,7])); 
console.log(task27([7,2,9,3]));

// TASK28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a



const task28 = (a: number[], b: number): number[] => {

    if(a.length < b) return a;

    while(a.length != b){
        a.shift();
    }

    return a;
};

console.log('TASK28')
console.log(task28([1,2,3,4,5],3)); 
console.log(task28([10,9,8,7,6],5)); 
console.log(task28([7,2,1,6,3],1));
console.log(task28([1, 2, 3], 6));

// TASK29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array




const task29 = (a: any[], b: any): any[] => {
    let c = a.length-1;

    while(c--){
        if(a[c] === b){
            a.splice(c, 1);
        }
    }

    return a;
};

console.log('TASK29')
console.log(task29([1,2,3,4,5],3)); 
console.log(task29([5,10,9,8,7,6],5)); 
console.log(task29([7,2,1,6,1,3],1));
console.log(task29([1, 2,6,6,6, 3], 6));

// TASK30
// Write a function that takes an array (a) as argument
// Return the number of elements in a





const task30 = (a: any[]): number => a.length;

console.log('TASK30')
console.log(task30([1,2,3,4,5])); //5
console.log(task30([5,10,9,8,7,6])); //6
console.log(task30([7,2,1,6,1,3, 9])); //7
console.log(task30([1, 2,6,6,6, 3])); //6

// TASK31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array





const task31 = (a: any[]): number => {
    let c = a.length;
    let d = 0;

    while(c--){
        if(Math.sign(a[c]) === -1){
            d++;
        };
    };

    return d;
};

console.log('TASK31')
console.log(task31([1,-2, 2,-4])); 
console.log(task31([0,9,1])); 
console.log(task31([4,-3,2,1,0]));

//TASK32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order


const task32 = (a: any[]): number[] => a.reverse();

console.log('TASK32')
console.log(task32([1,2,3,4,5])); 
console.log(task32([5,10,9,8,7,6])); 
console.log(task32([7,2,1,6,1,3, 9])); 
console.log(task32([1, 2,6,6,6, 3])); 

//TASK33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result



const task33 = (a: any[]): string[] => a.sort();

console.log('TASK33')
console.log(task33(['b', 'c', 'd', 'a'])); 
console.log(task33(['a', 'a', 'c', 'd', 'w', 'y', 'z'])); 

//TASK34
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order


const task34 = (a: any[]): number => {

    let res = 0;

    a.forEach((el) =>{
        res += el;
    });

    return (res / a.length);
};

console.log('TASK34')
console.log(task34([1,2,3,4,5])); 
console.log(task34([10,100,40])); 
console.log(task34([10,100,1000])); 
console.log(task34([-50,0,50,200])); 


//TASK35
// Write a function that takes an array of strings as argument
// Return the longest string



const task35 = (a: any[]): string => {

    let res = 0;
    let answ = '';

    a.forEach((el) =>{
        if(res < el.length){
            res = el.length;
            answ = el;
        }
    });

    return answ;
};

console.log('TASK35')
console.log(task35(['help', 'me'])); 
console.log(task35(['I', 'need', 'candy'])); 

//TASK36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise




const task36 = (a: any[]): any => {

    let answ = a[0];
    let b = true;

    a.forEach((el) =>{
        if(answ !== el || typeof answ !== typeof el){
            b = false;
        }
    });

    return b;
};

console.log('TASK36')
console.log(task36([true, true, true, true])); 
console.log(task36(['test', 'test', 'test'])); 
console.log(task36([1,1,1,2])); 
console.log(task36(['10',10,10,10]));

//TASK37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays




const task37 = (...args: any[]): any => {

    let joint = args[0];

    for(let i = 1; i < args.length; i++){
       joint = joint.concat(args[i])
    };

    return joint;
};

console.log('TASK37')
console.log(task37([1, 2, 3], [4, 5, 6])); 
console.log(task37(['a', 'b', 'c'], [4, 5, 6])); 
console.log(task37([true, true], [1, 2], ['a', 'b'])); 

//TASK38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array





const task38 = (a: any[]): any => {

    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length; j++) {
            if(a[i].b < a[j].b){
                let temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
        
        }
    }

    return a;
};

console.log('TASK38')
console.log(task38([{a:1,b:2},{a:5,b:4}])); 
console.log(task38([{a:2,b:10},{a:5,b:4}])); 
console.log(task38([{a:1,b:7},{a:2,b:1}])); 

//TASK39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array






const task39 = (a: any[], b: any[]): any[] => {

    a = a.concat(b)

    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length; j++) {
            if(a[i] < a[j]){
                let temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
        
        }
    }

    for(let i = 0; i < a.length; i++) {
        if(a[i] == a[i+1]){
            a.splice(i, 1);
            i--;
        }
    }

    return a;
};

console.log('TASK39')
console.log(task39([1, 2, 3], [3, 4, 5])); 
console.log(task39([-10, 22, 333, 42], [-11, 5, 22, 41, 41, 41, 42])); 


//TASK40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum







const task40 = (a: any[], b: number): number => {

    let answ = 0;

    a.forEach((el) => {
        if(el > b){
            answ += el;
        }
    });
    
    return answ;
};

console.log('TASK40')
console.log(task40([1, 2, 3, 4, 5, 6, 7], 2)); 
console.log(task40([-10, -11, -3, 1, -4], -3)); 
console.log(task40([78, 99, 100, 101, 401], 99)); 

//TASK41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max








const task41 = (a: number, b: number): number[] => {

    let answ = [];

    for(let i = a; i < b+1; i++){
        answ.push(i);
    }   
    
    return answ;
};

console.log('TASK41')
console.log(task41(2,10)); 
console.log(task41(1,3)); 
console.log(task41(-5,5)); 
console.log(task41(2,7));

//TASK42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}








const task42 = (a: string[]) => {

    let answ = {} as any;

    for (let i = 0; i < a.length; i++) {
        let currentWord = a[i];
        let firstChar = currentWord[0].toLowerCase();
        let innerArr = [];
        if (answ[firstChar] === undefined) {
            innerArr.push(currentWord);
            answ[firstChar] = innerArr;
        }else {
            answ[firstChar].push(currentWord);
        }
      }

      return answ;

};

console.log('TASK42')
console.log(task42(['Alf', 'Alice', 'Ben'])); 
console.log(task42(['Ant', 'Bear', 'Bird'])); 
console.log(task42(['Berlin', 'Paris', 'Prague'])); 

//TASK43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array









const task43 = (a: any[], b: number): number[] => {

    if(b >= 6){
        a.unshift(b)
        return a;
    }

    a.unshift(0);
    return a;
};

console.log('TASK43')
console.log(task43([1,2,3], 6)); 
console.log(task43(['a','b'], 2)); 
console.log(task43([null,false], 11)); 

//TASK44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array










const task44 = (a: any[], b: number): number[] => {

    let answ = [];

    for(let i = b-1; i < a.length; i+=b){
        answ.push(a[i]);
    }

    return answ;

};

console.log('TASK44')
console.log(task44([1,2,3,4,5,6,7,8,9,10],3)); 
console.log(task44([10,9,8,7,6,5,4,3,2,1],5)); 
console.log(task44([7,2,1,6,3,4,5,8,9,10],2)); 

// TASK45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country



type ObjectT45 = Record<string, string>;


const task45 = (a: ObjectT45) => {

    return a.country;
};

console.log('TASK45')
console.log(task45({ continent: 'Asia',  country: 'Japan'})); 
console.log(task45({ country: 'Sweden',  continent: 'Europe'})); 

// TASK45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor




type ObjectT46 = Record<string | number, string | number>;


const task46 = (a: ObjectT46) => {

    return a['prop-2'];
};

console.log('TASK45')
console.log(task46({  one: 1,  'prop-2': 2})); 
console.log(task46({  'prop-2': 'two',  prop: 'test'})); 

// TASK47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string


type ObjectT47 = Record<string, string>;


const task47 = (a: ObjectT45, b:string) => {

    return a[b];
};

console.log('TASK47')
console.log(task47({  continent: 'Asia',  country: 'Japan'}, 'continent')); 
console.log(task47({  country: 'Sweden',  continent: 'Europe'}, 'country'));



// TASK 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise




type ObjectT48 = Record<string, string | number>;


const task48 = (a: ObjectT48, b:string) => {

    return b in a;
};

console.log('TASK48')
console.log(task48({a:1,b:2,c:3},'b')); 
console.log(task48({x:'a',y:'b',z:'c'},'a'));
console.log(task48({x:'a',y:'b',z:'c'},'z'));


// TASK49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object



type ObjectT49 = {
    [key: string]: string;
};


const task49 = (b: string) => {

    let a: ObjectT49 = {};

    a['key'] = b;

    return a['key'];
   
};

console.log('TASK49')
console.log(task49('b'));
console.log(task49('a'));
console.log(task49('z'));


// TASK50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object


type ObjectT50 = {
    [key: string]: string;
};


const task50 = (a: string, b: string) => {

    let c: ObjectT49 = {};

    c[a] = b;

    return c;
   
};

console.log('TASK50')
console.log(task50('a','b'));
console.log(task50('z','x'));
console.log(task50('b','w'));


// TASK51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object



type ObjectT51 = {
    [key: string | number]: string | number;
};


const task51 = (a: any, b: any) => {

    let c: ObjectT51 = {};

    for(let i = 0; i < a.length; i++){
        c[a[i]] = b[i];
    }

    return c;
   
};

console.log('TASK51')
console.log(task51(['a','b','c'],[1,2,3]));
console.log(task51(['w','x','y','z'],[10,9,5,2]));
console.log(task51([1,'b'],['a',2]));

// TASK52
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object



type ObjectT52 = {
    [key: string | number]: string | number;
};


const task52 = (a52: ObjectT52) => {

    return Object.keys(a52);
   
};

console.log('TASK52')
console.log(task52({a:1,b:2,c:3}));
console.log(task52({j:9,i:2,x:3,z:4}));
console.log(task52({w:15,x:22,y:13}));


// TASK53
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object



type ObjectT53 = {
    [key: string | number]: number;
};


const task53 = (a: ObjectT52) => {

    let val = 0;

    Object.keys(a).forEach((el) => {
        val += (a[el] as number);
    });

    return val;
}

console.log('TASK53')
console.log(task53({a:1,b:2,c:3}));
console.log(task53({j:9,i:2,x:3,z:4}));
console.log(task53({w:15,x:22,y:13}));

// TASK54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'




type ObjectT54 = {
    [key: string | number]: number;
};


const task54 = (a: ObjectT52) => {

    delete a.b;

    return a;
}

console.log('TASK54')
console.log(task54({a:1,b:7,c:3}));
console.log(task54({j:0,b:7,x:3,z:4}));
console.log(task54({w:15,x:22,b:13}));

// TASK55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'



type ObjectT55 = Record<string, number>

const task55 = (a: ObjectT55, b: ObjectT55) => {
    
    b.d = b.b;
    delete b.b;
    
    return {...a, ...b}
}

console.log('TASK55')
console.log(task55({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(task55({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// TASK56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object




type ObjectT56 = Record<string, number>

const task56 = (a: ObjectT56, b: number) => {

    let key = Object.keys(a);
    
    a[key[0]] *= b;

    return a;
}

console.log('TASK56')
console.log(task56({a:1,b:2,c:3},3));
console.log(task56({j:9,i:2,x:3,z:4},10));
console.log(task56({w:15,x:22,y:13},6));

// TASK57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object





type ObjectT57 = Record<string | number, number | string>

const task57 = (a: ObjectT57) => {

    const b: ObjectT57 = {};
    Object.keys(a).forEach(key => {
      b[a[key]] = key;
    });

    return b;
}

console.log('TASK57')
console.log(task57({z:'a',y:'b',x:'c',w:'d'}));
console.log(task57({2:'a',4:'b',6:'c',8:'d'}));
console.log(task57({a:1,z:24}));


// TASK58
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object





type ObjectT58 = Record<string | number, number | string>

const task58 = (a: ObjectT58) => {

    Object.keys(a).forEach(key => {
        if(a[key] === '' || a[key] === ' ')
        a[key] = null;
    });

    return a;
}

console.log('TASK58')
console.log(task58({ a: 'a', b: 'b', c: '' }));
console.log(task58({ a: '', b: 'b', c: ' ', d: 'd' }));
console.log(task58({ a: 'a', b: 'b ', c: ' ', d: '' }));


// TASK59
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in






type ObjectT59 = Record<string | number, number | string>

const task59 = (a: ObjectT59) => {

    let res: ObjectT59 = {};

    Object.keys(a).forEach(key => {

        if(key === 'fn' || key === 'ln'){
            res[key] = a[key];
        }

        if(key === 'size'){
            a[key] = a[key] + 'cm';
            res[key] = a[key];

        }

        if(key === 'weight'){
            a[key] = a[key] + 'kg';
            res[key] = a[key];
        }
        
    });

    return res;
}

console.log('TASK59')
console.log(task59({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(task59(({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})));
console.log(task59({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(task59({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));


// TASK60
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array







type ObjectT60 = {
    [key: string | number]: string | number;
};

const task60 = (a: ObjectT60[],  c: string) => {

    let res:any = [];
    for(let i = 0; i < a.length; i++){
        a[i]['continent'] = c;
    }
    return a;
}

console.log('TASK60')
console.log(task60([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(task60([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));
console.log(task60([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));
 

// TASK61
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array






type ObjectT61 = Record<string | number, number | string>

const task61 = (a: number[]) => {

    let res: ObjectT61 = {};

    a.forEach((el) => {
        let count = 0;
        a.forEach((bl) => {
            if(el == bl) count++;
        })  

        res[el] = count;
    })

    return res;

}

console.log('TASK61')
console.log(task61([1,2,2,3]));
console.log(task61([9,9,9,99]));
console.log(task61([4,3,2,1]));


// TASK62
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise








const task62 = (a: Date, b: Date) => a.getTime()==b.getTime();

console.log('TASK62')
console.log(task62(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(task62(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(task62(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));


// TASK63
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates









const task63 = (a: Date, b: Date) => Math.abs((a.getTime()-b.getTime()) / (24*60*60*1000));

console.log('TASK63')
console.log(task63(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(task63(new Date('2000-01-01'), new Date('2020-06-01')));


// TASK64
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise










const task64 = (a: Date, b: Date) => a.getTime()==b.getTime();

console.log('TASK64')
console.log(task64(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(task64(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(task64(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(task64(new Date('2000/11/01'), new Date('2000/01/01')));


// TASK65
// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays











const task65 = (a: number[], b: number[]) => [...a, ...b];

console.log('TASK65')
console.log(task65([1, 2], [3, 4]));
console.log(task65([1, 2], [3, 4, 5, 6]));

// TASK66
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element












const task66 = (a: string[], b: string) => [...a, b];

console.log('TASK66')
console.log(task66(['Apple', 'Orange', 'Banana'], 'Kiwi'));


// TASK67
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element












const task67 = (a: string[], b: string) => [b, ...a];

console.log('TASK67')
console.log(task67(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// TASK68
// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects









type ObjectT68 = {
    [key: string | number]: string | number;
};

let c: ObjectT68 = {}
const task68 = (a: ObjectT68,  b: ObjectT68) => c = {...a, ...b};

console.log('TASK68')
console.log(task68({ a:1, b:2 }, { c:3, d:4 }));
console.log(task68({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }));

// TASK69
// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string










type ObjectT69 = {
    [key: string | number]: string | number;
};


const task69 = (a: ObjectT68,  b: string) => {
    return {...a, 'favoriteMovie':b};
};

console.log('TASK69')
console.log(task69({ eyeColor: 'green', age: 10 }, 'Garfield') );
console.log(task69({ eyeColor: 'blue', age: 15 }, 'Twilight'));
