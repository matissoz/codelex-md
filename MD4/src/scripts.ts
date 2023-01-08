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

    for (let i =0; i < a.length; i++) {
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

