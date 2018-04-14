import { Movie } from "./movie";

class Series implements Movie {
    title: string = "";
    releaseYear: number = 0;
    constructor(title: string, releaseYear: number){};
}

let sopranos = <Series>{};

console.log(sopranos);