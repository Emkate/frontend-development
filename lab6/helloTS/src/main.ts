interface Person {
    name: string;
    yob: number;
}



class Student {
    constructor( public name: string, public yob: number ) {
        this.name = name;
        this.yob = yob;
    }
}

function sayHello (person: Person) {
    console.log(`Hello ${person.name}`);
}

let zenek = new Student( 'Zenon', 1995 );
console.log(zenek.name);

let ziutek = { name: 'Ziutek', yob: 1963 };

let myList: Person[] = [ ziutek, zenek ];
let myTuple: [string, number] = [ "Fiat", 1998 ];
console.log(myTuple[0]);

sayHello(ziutek);

enum Color { Red, Green, Blue };

console.log(Color.Red);

let smthing: any = 5;   // any - jakikolwiek typ
smthing = "Hello";
smthing = false;

// zadanie