export class Quote {
    showAuthor: boolean;
    constructor(public title?: string,public quote?:string,public author?: string, public timePassed?: Date){
        this.showAuthor = false;
    }
}