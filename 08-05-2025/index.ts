//Unknown
let unknown_ex:unknown;
unknown_ex=12;
unknown_ex="shwetha";
unknown_ex=[1,"shwetha",3];
let len = (unknown_ex as number[]|string[]).length;
console.log(len);

type alias_type = "loading"|"loaded"|"InProgress";
//let new_type: alias_type;

const res = (new_type: alias_type): string =>{
    switch(new_type){
        case "loading": return "loading";
        case "loaded":return "loaded";
        case "InProgress":return "InProgress";
        default:const never_msg: never = new_type;
                throw new Error(`Invalid role: ${never_msg}`);
    }
};

console.log(res("loaded"));

function student(name:string, marks:number, greet?:string):string {
    return name+marks+greet;
}
console.log(student("shwetha",100));

function employee(name:string,salary:number=12000):string{
    return name+"is earning "+salary;
}

let func_res:string;
function rest(...args:string[]){
    for(let i=0;i<args.length;i++){
        func_res+=args[i];
    }
    return func_res;
}

console.log(rest("shwetha","is","23","now"));

class student_class{
    constructor(public first_name:string, public last_name:string, public salary:number){}
    student_details():string{
        return this.first_name+" "+this.last_name+" "+this.salary;
    }
}

