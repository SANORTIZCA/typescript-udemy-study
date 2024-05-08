export class Person {
  public _name: string;
  public _address: string;

  constructor(name: string, address: string) {
    this._name = name;
    this._address = address;
  }

  //MANERA CORTA DE DEFINIR CONSTRUCTOR
    /* constructor(
        public name: string, 
        public address: string = "Not Found"
    ) {
    } */
}

/* const tonyStark: Person = new Person("Tony Stark", "New York");
console.log(tonyStark); */

/* export class Hero extends Person {
    public alterEgo: string;
    public age: number;
    public realName: string;

    constructor(_name:string, _address:string, alterEgo:string, age:number, realName:string, ){
        super(_name,_address)
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    } */

    //TAMBIÉN SE PUEDE HACER DE LA SIGUIENTE MANERA
    /* constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName, address)
    }
     */
//}

export class Hero{
    public _alterEgo: string;
    public _age: number;
    public _realName: string;
    public _person: Person;

    //COMPOSICIÓN SOBRE HERENCIA

    constructor(person:Person, alterEgo:string, age:number, realName:string, ){
        //this.person = new Person(name, address);
        this._person = person;
        this._alterEgo = alterEgo;
        this._age = age;
        this._realName = realName;
    }
}

//INYECCIÓN DE DEPENDENCIAS
const person: Person = new Person("Tony Stark", "New Yorks");
const tonyStark: Hero = new Hero(person, "Iron Man", 45, "Antony Stark");
console.log(tonyStark);