/* function add(a:number, b:number): number{
    return a + b;
}

const result: number = add(1, 2);
console.log({ result });

const answerNumber = (a: number, b: number): string => {
  return `${a + b}`;
};

const answerArrow =answerNumber(5,9);
console.log("La respuesta es " + answerArrow);

const answer = (a:number, b:number): number => a + b;
console.log(answer);

function multiply(firstNumber: number, secondNUmber?: number, base: number = 2): number {
  return firstNumber * base;
}

const multiplyResult: number  = multiply(5)
console.log("Resultado de la multiplicación: ", multiplyResult);  */

interface Character{
    name: string;
    hp: number;
    showHp:() => void;
}

const healCharacter = (character:Character, amount:number):void =>{
    character.hp += amount;
}

const strider: Character ={
    name: "Strider",
    hp: 50,
    showHp(){
        console.log(`Health Points: ${this.hp}`);
    }
}

healCharacter(strider, 50);
healCharacter(strider, 50);
strider.showHp();




export {};