export function whatsMyType<T>(argument:T):T{
    return argument;
}

const amIString:string = whatsMyType<string>("Hello World");
const amINumber:number = whatsMyType<number>(42);
const amIArray: number[] = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));