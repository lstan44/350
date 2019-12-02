function movie(title,year){
  
    this.moviename = title;
    this.movieyear = year;
    this.ratingcount = 0;
    this.r1 = 0;
    this.r2 = 0;
    this.r3 = 0;
    this.r4 = 0;
    this.r5 = 0;

  this.averagerating = ()=>{
    return ( (this.r1*1) + (this.r2 *2) + (this.r3 * 3) + (this.r4 * 4) + (this.r5 * 5)) / (this.r1 + this.r2 + this.r3 + this.r4 +this.r5 );
  }
  
 this.addRating = (r)=>{
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

 this.print =()=>{
   console.log(this.moviename);
   console.log("Released in: "+this.movieyear);
   console.log("Average Rating: " + this.averagerating().toFixed(2));
   console.log("Rated by "+ this.ratingcount +" users.\n");
 }

}

let lord1 = new movie("Lord of the Rings: The Fellowship of the Ring",2001);

let lord2 = new movie("Lord of the Rings: The Return of the King",2003);

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

let mymovie1 = new movie("movie 1 Title",2019);
let mymovie2 = new movie ("movie 2 Title",1997);
let mymovie3 = new movie("movie 3 Title",1994);

mymovie1.addRating(1);
mymovie1.addRating(1);
for(let i=1; i<=5; i++){
  mymovie1.addRating(5);
}

mymovie2.addRating(2);
mymovie2.addRating(2);
for(let i=1; i<=5; i++){
  mymovie2.addRating(4);
}

mymovie3.addRating(3);
mymovie3.addRating(3);
for(let i=1; i<=5; i++){
  mymovie3.addRating(2);
}

lord1.print();
lord2.print();
mymovie1.print();
mymovie2.print();
mymovie3.print();
