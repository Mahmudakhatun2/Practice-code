const quoteDisplay = document.getElementById('Quote');
const button= document.getElementById('button');
const quotes = ["The truth is, no one of us can be free until everybody is free.",
                "Smile, it's free therapy.",
                "Nothing in life is free, you always pay in the end.",
                "I hope for nothing, i fear nothing, i am free.",
                "If you can dream it, then you can do it."
];

let randomQuote = "";
let count = 0;
generateQuotes = () => {
    
    // for(let i=0; i<quotes.length; i++){
    //      const ran =  Math.floor(Math.random()*5);
    //      randomQuote = quotes[ran];
        
    //  }

    //  quoteDisplay.innerText = randomQuote;
   if(count<quotes.length){
    randomQuote=quotes[count];
    count = count + 1;
   }
   if(count>=quotes.length){
    
    count = 0;
    
    count= count+1;
    randomQuote=quotes[count];
   }
   quoteDisplay.innerText = randomQuote;
}
