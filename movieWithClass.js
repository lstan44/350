class Movie{
  constructor(title,year){
    this.moviename = title;
    this.movieyear = year;
    this.ratingcount = 0;
    this.r1 = 0;
    this.r2 = 0;
    this.r3 = 0;
    this.r4 = 0;
    this.r5 = 0;
  };
  get averagerating(){
    return ( (this.r1*1) + (this.r2 *2) + (this.r3 * 3) + (this.r4 * 4) + (this.r5 * 5)) / (this.r1 + this.r2 + this.r3 + this.r4 +this.r5 );
  }
  
 addRating(r){
   switch(r){
     case 1: this.r1 += r;
     case 2: this.r2 += r;
     case 3: this.r3 += r;
     case 4: this.r4 += r;
     case 5: this.r5 += r;
     default:break;
   }
   this.ratingcount++;
 }

 print(){
   console.log(this.moviename);
   console.log("Released in: "+this.movieyear);
   console.log("Average Rating: " + this.averagerating.toFixed(2));
   console.log("Rated by "+ this.ratingcount +" users.\n");
 }

}

let lord1 = new Movie("Lord of the Rings: The Fellowship of the Ring",2001);

let lord2 = new Movie("Lord of the Rings: The Return of the King",2003);

for (let i=1; i<=5; i++){
 lord1.addRating(5);}

 for (let i=1; i<=15; i++)
 lord1.addRating(4);
 //Add 5 ratings of 3stars to lord1 object
 for (let i=1; i<=5; i++)
 lord1.addRating(3);
 //Add 2 ratings of 2stars to lord1 object
 lord1.addRating(2);
 lord1.addRating(2);
//lord2 RATINGS
 //Add 3 ratings of 4stars to lord2 object
 for (let i=1; i<=3; i++)
 lord2.addRating(4);
 //Add 1 ratings of 2stars to lord2 object
 lord2.addRating(2);
 //Add 1 ratings of 1stars to lord2 object
 lord2.addRating(1);

let myMovie1 = new Movie("Movie 1 Title",2019);
let myMovie2 = new Movie ("Movie 2 Title",1997);
let myMovie3 = new Movie("Movie 3 Title",1994);

myMovie1.addRating(1);
myMovie1.addRating(1);
for(let i=1; i<=5; i++){
  myMovie1.addRating(5);
}

myMovie2.addRating(2);
myMovie2.addRating(2);
for(let i=1; i<=5; i++){
  myMovie2.addRating(4);
}

myMovie3.addRating(3);
myMovie3.addRating(3);
for(let i=1; i<=5; i++){
  myMovie3.addRating(2);
}

lord1.print();
lord2.print();
myMovie1.print();
myMovie2.print();
myMovie3.print();

