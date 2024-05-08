export class Person {
    public _name: string;
    public _address: string;

    constructor(name:string , address:string){
        this._name = name;
        this._address = address;
    }
}

const ironMan: Person = new Person("Tony Stark", "New York");
console.log(ironMan);