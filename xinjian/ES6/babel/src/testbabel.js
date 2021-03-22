let a = 10;

class Person{
    constructor(userName,userAge){
        this.name = userName;
        this.age = userAge;
    }
    showName(){
        console.log(this.name);
    }
}
class Teacher extends Person{
    constructor(userName,userAge,school){
        super(userName,userAge)
        this.school = school
    }
    showSchool(){
        console.log(this.school);
    }
}

let teacher1 = new Teacher("小李",30,"黑大");
console.log(teacher1.name);
console.log(teacher1.school);
teacher1.showName();
teacher1.showSchool();
