let select_symbol = Symbol.for("select_ele");
let select=document.createElement("select");
let option = document.createElement("option");
let text = document.createTextNode("Hi");
option.appendChild(text);
select.appendChild(option);
window[select_symbol]=select;
document.body.appendChild(select);
var mysymbol = Symbol("Hi");
console.log(mysymbol);
// let headings=document.querySelector("h1");
// headings?.animate