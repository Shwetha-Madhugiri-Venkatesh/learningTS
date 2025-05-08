//Unknown
var unknown_ex;
unknown_ex = 12;
unknown_ex = "shwetha";
unknown_ex = [1, "shwetha", 3];
var len = unknown_ex.length;
console.log(len);
//let new_type: alias_type;
var res = function (new_type) {
    switch (new_type) {
        case "loading": return "loading";
        case "loaded": return "loaded";
        case "InProgress": return "InProgress";
        default:
            var never_msg = new_type;
            throw new Error("Invalid role: ".concat(never_msg));
    }
};
console.log(res("loaded"));
function student(name, marks, greet) {
    return name + marks + greet;
}
console.log(student("shwetha", 100));
function employee(name, salary) {
    if (salary === void 0) { salary = 12000; }
    return name + "is earning " + salary;
}
var func_res;
function rest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        func_res += args[i];
    }
    return func_res;
}
console.log(rest("shwetha", "is", "23", "now"));
var student_class = /** @class */ (function () {
    function student_class(first_name, last_name, salary) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.salary = salary;
    }
    student_class.prototype.student_details = function () {
        return this.first_name + " " + this.last_name + " " + this.salary;
    };
    return student_class;
}());
