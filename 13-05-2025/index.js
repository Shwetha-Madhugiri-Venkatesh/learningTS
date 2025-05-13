var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//generic constraints
function add(a) {
    var sum = typeof a[0] == "number" ? 0 : "";
    for (var x = 0; x < a.length; x++) {
        sum += a[x];
    }
    return sum;
}
var b = ["shwetha"];
console.log(typeof b);
console.log(add([1, 2]));
console.log(add(["shwetha", 2]));
console.log(add([1, "shwetha"]));
//generic constraints
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(merge({ a: 3 }, { b: 3 }));
console.log(merge({ a: 3 }, { b: "shwetha" }));
var obj = {
    "shwetha": 2,
    name: "shwetha",
};
function prop(obj, key) {
    return obj[key];
}
console.log(prop(obj, "shwetha"));
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var john = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(john));
var student = {
    name: "shwetha",
    marks: 100,
};
var employee = {
    name: 1234,
    marks: "hundred",
};
var user_defined = /** @class */ (function () {
    function user_defined() {
        this.items = [];
    }
    Object.defineProperty(user_defined.prototype, "length", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    user_defined.prototype.push = function (o) {
        this.items.push(o);
    };
    user_defined.prototype.pop = function (o) {
        return this.items.pop();
    };
    return user_defined;
}());
var obj_user = new user_defined();
for (var x = 0; x < 10; x++) {
    obj_user.push(x);
}
console.log(obj_user);
//obj_user.pop(obj_user.length);
console.log(obj_user.length);
var obj_user1 = new user_defined();
obj_user1.push("shwetha");
console.log(obj_user1);
// obj_user1.pop(obj_user1.length);
// console.log(obj_user1);
