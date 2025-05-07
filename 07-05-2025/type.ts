let arr:number[] = [1,2,3,4];
console.log(arr);


let obj:{
    name:string,
    marks:number,
};
obj = {name:"shwetha",
    marks:22,
};
console.log(obj);
let obj2:object={
    stu_name:"Monica",
    class:2,
}
console.log(obj2);
let obj3:{}={
    stu_name:"Monica",
    class:2,
}
console.log(obj3);



function func(name:string){
    return "Hello"+name;
}
console.log(func("shwetha"));
let func_var:(marks:number)=>number;
func_var=function (marks:number){
    return marks;
}
console.log(func_var(10));
let obj1:{cloth:string,price:number}={
    cloth:"shirt",
    price:2,
};


console.log(obj1);
let oct = parseInt("10",8);
console.log(oct);
//boolean type
let boolean_var:boolean=false;
console.log(boolean_var);
let Boolean_var:Boolean=Boolean([]);
console.log(Boolean_var);
console.log(boolean_var?"true":"False");
console.log(Boolean_var?"true":"False");

const b1: boolean = false;
const b2: Boolean = new Boolean(false);
console.log(b2,b1,typeof b1,typeof b2);

console.log(b1 ? "Yes" : "No"); 
console.log(b2 ? "Yes" : "No"); 

let tuple_var :[string,number,number?]=["shwetha",23];//we can use in RGBA colors
console.log(tuple_var[0]);

enum enum_var{
    Kannada,
    English,
    Hindi,
    social,
    science,
};//No matter whatever we give, it will take as strings only
enum enum_const{
    "shwetha",
    null,
    undefined,
}
enum enum_defined{
    name="shwetha",
    marks=2,
}
console.log(enum_defined);
console.log(enum_const);
console.log(enum_var);//bidirectional mapping//use in Calender