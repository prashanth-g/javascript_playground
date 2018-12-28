// array destructuring

var a, b, remaining;

[a, b, ...remaining] = [15, 20, 25, 40];

console.log(a);  
console.log(b); 
console.log(remaining);  

// Destructuring nested objects

const response = {
    status: 'true',
    user: [
       {
        name: 'jlo',
        available: true,
        last_seen: '2018-12-27T01:35:21',
       }
    ],
    message: 'success'
};

let {
    status: responseCode, 
    user: [
        {
            name: fullName, 
        },
    ],
} = response;

console.log(responseCode);  
console.log(fullName); 
