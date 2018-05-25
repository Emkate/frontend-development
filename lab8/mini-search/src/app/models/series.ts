export class Series {

    title: string;
    startYear: number;
    finishYear: number;
    seasons: number;

    constructor(title: string, startYear: number, finishYear: number, seasons: number, ) {
        this.title = title;
        this.startYear = startYear;
        this.finishYear = finishYear;
        this.seasons = seasons;
    }
}