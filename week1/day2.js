class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    salutation(name){
        console.log(`hello! my name is ${this.name}`);
    }
}
const Person = new person('amina',22);
console.log("name : "+ Person.name + " age : "+ Person.age +" years old");

Person.salutation("amina");