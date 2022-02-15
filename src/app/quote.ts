export class Quote {

    showQuoteDetails:boolean;
    constructor(public id:number,public datePosted:Date,public userName:string,public author:string,public quote:string,public upvote:number,public downvote:number,public popular:boolean){

        this.showQuoteDetails=false;
    }
}
