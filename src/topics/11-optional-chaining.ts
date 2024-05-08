export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "John",
}

const passenger2: Passenger = {
  name: "Andres",
  children: ["Sara", "Alex"],
};

/* const printChildren = (passenger: Passenger):void => {
  //passenger.children?.length; en donde el signo de interrogación indica que si existen hijos entonces se obtiene la longitud de la lista de hijos, si no, se obtiene un valor nulo
  const {name, children} = passenger;
  const howManyChildren:number | undefined = children?.length || 0;
  console.log(name, howManyChildren);
}

printChildren(passenger1);
 */

const returnChildren = (passenger: Passenger):number => {
  //passenger.children!.length; en donde el signo de admiración indica que siempre va a llegar un children
  // children! = simbolo (!) NOT NULL ASSERTION OPERATOR
  const { name, children } = passenger;
  //if(!children) return 0;
  const howManyChildren: number = children!.length; //Seguridad de que siempre va a recibir ese hijo/valor
  console.log(name, howManyChildren);
  return howManyChildren;
}

returnChildren(passenger2);