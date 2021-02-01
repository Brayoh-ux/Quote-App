import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('Grace','All our dreams can come true, if we have the courage to pursue them.','Walt Disney',new Date(2020,3,14)),
    new Quote('Marya','The Best Way To Get Started Is To Quit Talking And Begin Doing.','Walt Disney',new Date(2020,12,12)),
  ]


  addNewQuote(quote){
    quote.timePassed =new Date(quote.timePassed)
    this.quotes.push(quote)
  }

  showDets(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  completeQuote(isComplete, index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }

  constructor() { 
    
  }

  ngOnInit(){
  }

}
