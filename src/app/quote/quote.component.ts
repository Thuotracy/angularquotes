import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quote[]=[
    new Quote(1,new Date(2019,2,28),"Ruru","Oscar Wilde","Be yourself everyone else is already taken.",40,10,false),
    new Quote(2,new Date(2019,10,28),"Winnie","Frank Zappa","So many books, so little time.",20,60,false),
    new Quote(3,new Date(2020,1,26),"Jane","Mahatma Gandhi","Be the change that you wish to see in the world.",40,10,false),
    new Quote(4,new Date(2018,2,28),"Isaac","J.K. Rowling","If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",20,60,false),
    new Quote(5,new Date(2019,2,28),"Lucy","Mark Twain","If you tell the truth, you don't have to remember anything.",20,5,false),
    new Quote(6,new Date(2020,1,28),"Violet","Winston Churchill","The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",5,5,false),
    new Quote(7,new Date(2019,10,28),"Margaret","Walt Disney","The Way Get Started Is To Quit Talking And Begin Doing.",10,5,false),
    new Quote(8,new Date(2019,11,28),"Lillian","Will Rogers","Don’t Let Yesterday Take Up Too Much Of Today.",40,50,false),
    new Quote(9,new Date(2019,5,28),"Michael","Steve Jobs","If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",10,50,false),
  ];

  populars:Quote[]=[
    new Quote(1,new Date(2019,2,28),"Ruru","Oscar Wilde","Be yourself everyone else is already taken.",40,10,false),
    new Quote(3,new Date(2020,1,26),"Jane","Mahatma Gandhi","Be the change that you wish to see in the world.",40,10,false),
    new Quote(8,new Date(2019,11,28),"Lillian","Will Rogers","Don’t Let Yesterday Take Up Too Much Of Today.",40,50,false),
  
];


  

  addNewQuote(quote){
    let quotesLength=this.quotes.length+1;

    let quoteObj=new Quote(quotesLength,new Date,quote.userName,quote.author,quote.quote,0,0,false);

    this.quotes.push(quoteObj);
  }
  toggleDetails(index){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }

  deleteQuote(isDeleted,index){

    if(isDeleted){
      let remove=confirm(`Are you sure you want to delete this ${this.quotes[index].quote}?`)
      if(remove){
        this.quotes.splice(index,1)
      }
    }

  }
  upvoteFunc(index){
      var up=this.quotes[index].upvote+1;
      this.quotes[index].upvote=up;
      
  }

  
  downvoteFunc(index){
    var down=this.quotes[index].downvote+1;
    this.quotes[index].downvote=down;
  
}

mostPopular(){

  
  this.populars.splice(0,this.populars.length);

  var largest=this.quotes[0].upvote;
  var number=null;
  for (var i=0;i<this.quotes.length;i++){
    number=this.quotes[i].upvote

    largest=Math.max(largest,number)
  }
  
  for (var i=0;i<this.quotes.length;i++){
    
    if(this.quotes[i].upvote===largest){
      this.populars.push(this.quotes[i]);
    }
  }

  

}
  constructor() { }

  ngOnInit(): void {
  }

}
