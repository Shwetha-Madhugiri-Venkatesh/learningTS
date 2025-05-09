class class_name{
    constructor(public SrNo?:number,public topic?:string,public subtopics?:string,public time_spent?:number){}
    set enter_SrNo(sr:number){
        this.SrNo=sr;
    }
    set enter_topic(title:string){
        this.topic=title;
    }
    set enter_subtopics(description:string){
        this.subtopics=description;
    }
    set enter_timeSpent(time:number){
        this.time_spent=time;
    }
    show():string{
        return `I was working on ${this.SrNo}. ${this.topic} in which ${this.subtopics} for ${this.time_spent}`;
    }
}
let obj:class_name=new class_name(1,"TypeScript Training","Type Annotation",8);
console.log(obj.show());

class Employee extends class_name{
    constructor(public EmpNo:number,topic:string,subtopics:string,time_spent:number){
        super(undefined,topic,subtopics,time_spent);//to get the optional params I declared all the properties of class_name as optional
    }
    show(): string {
        return `Employee bearing empNo ${this.EmpNo} was`+super.show();
    }
}
let emp_obj:Employee=new Employee(100,"TypeScript Training","Type Annotation",8);
console.log(emp_obj.show());

class static_ex{
    static Company_name="ITORIZON";
    static no_emp:number=2000;
    static CEO:string="Shan Muthuvelu";
    constructor(public person:string){}
    show(): string{
        return `${this.person} works in ${static_ex.Company_name} which is populated with ${static_ex.no_emp} number of employees and lead by the CEO ${static_ex.CEO}`;
    }
}
let static_obj:static_ex=new static_ex("Shwetha");
console.log(static_obj.show());

abstract class abstract_ex{
    constructor(public clg_name:string,public city:string,){}
    abstract show_res():string;
    show():string{
        return `${this.clg_name} which is located in the city ${this.city}`+`and got ${this.show_res()}`;
    }
}
class student extends abstract_ex{
    constructor(public stu_name:string,public usn:string,clg_name:string,city:string,public marks:number,public result:string){
        super(clg_name,city);
    }
    show_res(): string {
        return `${this.result} with the marks ${this.marks}`;
    }
    show_student():string{
        return `${this.stu_name} bearing USN ${this.usn} studied in `+super.show();
    }
}
let stu_obj:student=new student("shwetha","1kn20cs044","KNSIT","Bangalore",600,"passed");
console.log(stu_obj.show_student());

//Interfaces
interface person{
    name:string,
    age:number,
}
class personal implements person{
    name;
    age;
    education;
   constructor(name:string,age:number,education:string){
    this.name=name;
    this.age=age;
    this.education=education;
   }
   show(){
    return `A person with the name ${this.name} at the ${this.age} pursuing ${this.education}`;
   }
}
let interface_ex:personal = new personal("Manu",20,"BCA");
console.log(interface_ex.show());

interface student{
    name:string,
    usn:string,
}
interface clg_identity extends student{
    clg_name:string,
    clg_city:string,
}

class student_data{
    constructor(public stu_name:string,public usn:string,public clg_name:string,public clg_city:string){}
    show() :string{
        return `${this.stu_name} bearing usn ${this.usn} is from ${this.clg_name} in city ${this.clg_city}`;
    }
}
let obj_student:student_data=new student_data("Manu","123456","SSIT","Tumkur");
console.log(obj_student);

//Intersection types
interface username{
    username:string,
    pattern_match:boolean,
}
interface password{
    password:string,
    pass_match:boolean,
}
type lock = username&password;
let attempt:lock={
    username:"shwetha123",
    pattern_match:false,
    password:"1234567890",
    pass_match:true,
}
if(!attempt.pass_match||!attempt.pattern_match){
    console.log("User Name and passwords are not compatible");
}else{
    console.log("welcome");
}

//type Gaurds 1.instanceof 2.typeof 3.in 4.user-defined
type params = number|string;
let res = function(a:params,b:params){
    if(typeof a=="number" && typeof b=="number"){
        return a+b;
    }else if(typeof a=="string" && typeof b=="string"){
        return a.concat(b);
    }
}

console.log(obj_student instanceof student_data);
console.log("marks" in student_data);
class user_defined_typeGaurd extends student_data{
    isStudent_data(obj:any) {
        return obj instanceof student_data;
    }
}
//console.log(student_data.isStudent_data(student));

//Generic concepts

