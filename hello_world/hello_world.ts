export{};
let message: string = 'Hello, World!';

// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;

// add the heading the document
document.body.appendChild(heading);

//number type
let num:number = 2;
let bool:boolean=true;
let null_val:null=null;
let undefined_val:undefined=undefined;
let mysymbol:symbol=Symbol("Hi");
console.log(mysymbol);
// let headings=document.querySelector("h1");
// headings?.appendChild
let heading1 = document.createElement('h1');
heading1.textContent = "Hello";

// add the heading the document
document.body.appendChild(heading1);
