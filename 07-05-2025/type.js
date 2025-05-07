var arr = [1, 2, 3, 4];
console.log(arr);
var obj;
obj = { name: "shwetha",
    marks: 22,
};
console.log(obj);
var obj2 = {
    stu_name: "Monica",
    class: 2,
};
console.log(obj2);
var obj3 = {
    stu_name: "Monica",
    class: 2,
};
console.log(obj3);
function func(name) {
    return "Hello" + name;
}
console.log(func("shwetha"));
var func_var;
func_var = function (marks) {
    return marks;
};
console.log(func_var(10));
var obj1 = {
    cloth: "shirt",
    price: 2,
};
console.log(obj1);
var oct = parseInt("10", 8);
console.log(oct);
//boolean type
var boolean_var = false;
console.log(boolean_var);
var Boolean_var = Boolean([]);
console.log(Boolean_var);
console.log(boolean_var ? "true" : "False");
console.log(Boolean_var ? "true" : "False");
var b1 = false;
var b2 = new Boolean(false);
console.log(b2, b1, typeof b1, typeof b2);
console.log(b1 ? "Yes" : "No");
console.log(b2 ? "Yes" : "No");
var tuple_var = ["shwetha", 23]; //we can use in RGBA colors
console.log(tuple_var[0]);
var enum_var;
(function (enum_var) {
    enum_var[enum_var["Kannada"] = 0] = "Kannada";
    enum_var[enum_var["English"] = 1] = "English";
    enum_var[enum_var["Hindi"] = 2] = "Hindi";
    enum_var[enum_var["social"] = 3] = "social";
    enum_var[enum_var["science"] = 4] = "science";
})(enum_var || (enum_var = {}));
; //No matter whatever we give, it will take as strings only
var enum_const;
(function (enum_const) {
    enum_const[enum_const["shwetha"] = 0] = "shwetha";
    enum_const[enum_const["null"] = 1] = "null";
    enum_const[enum_const["undefined"] = 2] = "undefined";
})(enum_const || (enum_const = {}));
var enum_defined;
(function (enum_defined) {
    enum_defined["name"] = "shwetha";
    enum_defined[enum_defined["marks"] = 2] = "marks";
})(enum_defined || (enum_defined = {}));
console.log(enum_defined);
console.log(enum_const);
console.log(enum_var); //bidirectional mapping//use in Calender
