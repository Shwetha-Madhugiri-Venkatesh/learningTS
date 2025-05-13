//generic constraints
function add<T>(a:T[]){
    let sum:any=typeof a[0]=="number"?0:"";
    for(let x=0;x<a.length;x++){
        sum+=a[x];
    }
    return sum;
}
let b:string[]=["shwetha"];
console.log(typeof b);
console.log(add([1,2]));
console.log(add(["shwetha",2]));
console.log(add([1,"shwetha"]));

//generic constraints
function merge<U extends object>(obj1: U, obj2: U) {
    return {
        ...obj1,
        ...obj2
    };
}
console.log(merge({a:3},{b:3}));
console.log(merge({a:3},{b:"shwetha"}));
let obj = {
    "shwetha":2,
    name:"shwetha",
}
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
console.log(prop(obj,"shwetha"));
// function getFullName(person: {
//     firstName: string;
//     lastName: string
// }) {//here it will give error if any one of them is not there, if we use an interface it forces us to give both parameters.
//     return `${person.firstName} ${person.lastName}`;
// }

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// console.log(getFullName(person));

//like this.....
interface Person {
    firstName: string;
    lastName: string;
}//like a blueprint
function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john));

interface generic_interface<T,V>{
    name:T,
    marks:V,
}//we can assign any type of data

let student:generic_interface<string,number>={
    name:"shwetha",
    marks:100,
};

let employee:generic_interface<number,string>={
    name:1234,
    marks:"hundred",
}

interface user_defined_dataStructures<T>{
    push(o:T):void;
    pop(o:T):T|undefined;
}

class user_defined<T> implements user_defined_dataStructures<T>{
    items:T[]=[];
    get length(){
        return this.items.length;
    }
    push(o: T): void {
        this.items.push(o);
    }
    pop(o: T|number): T|undefined {
        return this.items.pop();
    }
}

let obj_user = new user_defined<number>();
for(let x=0;x<10;x++){
    obj_user.push(x);
}
console.log(obj_user);
//obj_user.pop(obj_user.length);
console.log(obj_user.length);


let obj_user1=new user_defined<string>();
obj_user1.push("shwetha");
console.log(obj_user1);
// obj_user1.pop(obj_user1.length);
// console.log(obj_user1);