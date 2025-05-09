var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class_name = /** @class */ (function () {
    function class_name(SrNo, topic, subtopics, time_spent) {
        this.SrNo = SrNo;
        this.topic = topic;
        this.subtopics = subtopics;
        this.time_spent = time_spent;
    }
    Object.defineProperty(class_name.prototype, "enter_SrNo", {
        set: function (sr) {
            this.SrNo = sr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_name.prototype, "enter_topic", {
        set: function (title) {
            this.topic = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_name.prototype, "enter_subtopics", {
        set: function (description) {
            this.subtopics = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_name.prototype, "enter_timeSpent", {
        set: function (time) {
            this.time_spent = time;
        },
        enumerable: false,
        configurable: true
    });
    class_name.prototype.show = function () {
        return "I was working on ".concat(this.SrNo, ". ").concat(this.topic, " in which ").concat(this.subtopics, " for ").concat(this.time_spent);
    };
    return class_name;
}());
var obj = new class_name(1, "TypeScript Training", "Type Annotation", 8);
console.log(obj.show());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(EmpNo, topic, subtopics, time_spent) {
        var _this = _super.call(this, undefined, topic, subtopics, time_spent) || this; //to get the optional params I declared all the properties of class_name as optional
        _this.EmpNo = EmpNo;
        return _this;
    }
    Employee.prototype.show = function () {
        return "Employee bearing empNo ".concat(this.EmpNo, " was") + _super.prototype.show.call(this);
    };
    return Employee;
}(class_name));
var emp_obj = new Employee(100, "TypeScript Training", "Type Annotation", 8);
console.log(emp_obj.show());
var static_ex = /** @class */ (function () {
    function static_ex(person) {
        this.person = person;
    }
    static_ex.prototype.show = function () {
        return "".concat(this.person, " works in ").concat(static_ex.Company_name, " which is populated with ").concat(static_ex.no_emp, " number of employees and lead by the CEO ").concat(static_ex.CEO);
    };
    static_ex.Company_name = "ITORIZON";
    static_ex.no_emp = 2000;
    static_ex.CEO = "Shan Muthuvelu";
    return static_ex;
}());
var static_obj = new static_ex("Shwetha");
console.log(static_obj.show());
var abstract_ex = /** @class */ (function () {
    function abstract_ex(clg_name, city) {
        this.clg_name = clg_name;
        this.city = city;
    }
    abstract_ex.prototype.show = function () {
        return "".concat(this.clg_name, " which is located in the city ").concat(this.city) + "and got ".concat(this.show_res());
    };
    return abstract_ex;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(stu_name, usn, clg_name, city, marks, result) {
        var _this = _super.call(this, clg_name, city) || this;
        _this.stu_name = stu_name;
        _this.usn = usn;
        _this.marks = marks;
        _this.result = result;
        return _this;
    }
    student.prototype.show_res = function () {
        return "".concat(this.result, " with the marks ").concat(this.marks);
    };
    student.prototype.show_student = function () {
        return "".concat(this.stu_name, " bearing USN ").concat(this.usn, " studied in ") + _super.prototype.show.call(this);
    };
    return student;
}(abstract_ex));
var stu_obj = new student("shwetha", "1kn20cs044", "KNSIT", "Bangalore", 600, "passed");
console.log(stu_obj.show_student());
var personal = /** @class */ (function () {
    function personal(name, age, education) {
        this.name = name;
        this.age = age;
        this.education = education;
    }
    personal.prototype.show = function () {
        return "A person with the name ".concat(this.name, " at the ").concat(this.age, " pursuing ").concat(this.education);
    };
    return personal;
}());
var interface_ex = new personal("Manu", 20, "BCA");
console.log(interface_ex.show());
var student_data = /** @class */ (function () {
    function student_data(stu_name, usn, clg_name, clg_city) {
        this.stu_name = stu_name;
        this.usn = usn;
        this.clg_name = clg_name;
        this.clg_city = clg_city;
    }
    student_data.prototype.show = function () {
        return "".concat(this.stu_name, " bearing usn ").concat(this.usn, " is from ").concat(this.clg_name, " in city ").concat(this.clg_city);
    };
    return student_data;
}());
var obj_student = new student_data("Manu", "123456", "SSIT", "Tumkur");
console.log(obj_student);
var attempt = {
    username: "shwetha123",
    pattern_match: false,
    password: "1234567890",
    pass_match: true,
};
if (!attempt.pass_match || !attempt.pattern_match) {
    console.log("User Name and passwords are not compatible");
}
else {
    console.log("welcome");
}
var res = function (a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    else if (typeof a == "string" && typeof b == "string") {
        return a.concat(b);
    }
};
console.log(obj_student instanceof student_data);
console.log("marks" in student_data);
var user_defined_typeGaurd = /** @class */ (function (_super) {
    __extends(user_defined_typeGaurd, _super);
    function user_defined_typeGaurd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    user_defined_typeGaurd.prototype.isStudent_data = function (obj) {
        return obj instanceof student_data;
    };
    return user_defined_typeGaurd;
}(student_data));
//console.log(student_data.isStudent_data(student));
//Generic concepts
