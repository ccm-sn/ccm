"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 10;

var Person = function () {
    function Person(userName, userAge) {
        _classCallCheck(this, Person);

        this.name = userName;
        this.age = userAge;
    }

    _createClass(Person, [{
        key: "showName",
        value: function showName() {
            console.log(this.name);
        }
    }]);

    return Person;
}();

var Teacher = function (_Person) {
    _inherits(Teacher, _Person);

    function Teacher(userName, userAge, school) {
        _classCallCheck(this, Teacher);

        var _this = _possibleConstructorReturn(this, (Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call(this, userName, userAge));

        _this.school = school;
        return _this;
    }

    _createClass(Teacher, [{
        key: "showSchool",
        value: function showSchool() {
            console.log(this.school);
        }
    }]);

    return Teacher;
}(Person);

var teacher1 = new Teacher("小李", 30, "黑大");
console.log(teacher1.name);
console.log(teacher1.school);
teacher1.showName();
teacher1.showSchool();