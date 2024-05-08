//@Un decorador es una función especial que se adjuntan  a diferentes clases, propiedades y métodos que modifican su funcionamiento

function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T,
) {
    return class extends constructor{
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = "Abc123";

    print(){
        console.log("Hello Wolrd");
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);