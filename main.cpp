#include <iostream>
#include <string>
#include <vector>
using namespace std;


class Movie {

  private:
    string name;
    int release_year;

    int ratings_count=0;
    vector<int>ratings1,
               ratings2, 
               ratings3, 
               ratings4, 
               ratings5;

  public:
    Movie(string n, int y){
     this->name = n;
     this->release_year =y; 
    }

    double averageRating() const{
      
      double r1Weight= this->ratings1.size()*1;
      double r2Weight= this->ratings2.size()*2;
      double r3Weight= this->ratings3.size()*3;
      double r4Weight= this->ratings4.size()*4;
      double r5Weight= this->ratings5.size()*5;

      int sumSize = this->ratings1.size() + this->ratings2.size()+
                  this->ratings3.size()+this->ratings4.size()+
                  this->ratings5.size();
      double weightSum = r1Weight+r2Weight+r3Weight+r4Weight+r5Weight;
  

      double avg = weightSum/sumSize;
      return avg;

    };

    void addRating(int r){
     switch(r){
       case 1: ratings1.push_back(r);
       case 2:ratings2.push_back(r);
       case 3:ratings3.push_back(r);
       case 4: ratings4.push_back(r);
       case 5: ratings5.push_back(r);
      default:break;
     } 
     this->ratings_count++;
    };

    friend ostream &operator<<( ostream &output, const Movie &M ) {
    //OVERLOADED OUTPUT OPERATOR (do not modify)
        cout << M.name<< ", " << M.release_year <<endl;
        cout << "Avg Rating: " << M.averageRating()<<endl;
        cout << "Rated by : "<< M.ratings_count<< " users" << endl;

    return output;
 }
};


int main()
{
//Create Movie objects
Movie lord1("Lord of the Rings: The Fellowship of the Ring",2001);

Movie lord2("Lord of the Rings: The Return of the King",2003);
//lord1 RATINGS
 //Add 5 ratings of 5stars to lord1 object
 for (int i=1; i<=5; i++)
 lord1.addRating(5);
 //Add 15 ratings of 4stars to lord1 object
 for (int i=1; i<=15; i++)
 lord1.addRating(4);
 //Add 5 ratings of 3stars to lord1 object
 for (int i=1; i<=5; i++)
 lord1.addRating(3);
 //Add 2 ratings of 2stars to lord1 object
 lord1.addRating(2);
 lord1.addRating(2);
//lord2 RATINGS
 //Add 3 ratings of 4stars to lord2 object
 for (int i=1; i<=3; i++)
 lord2.addRating(4);
 //Add 1 ratings of 2stars to lord2 object
 lord2.addRating(2);
 //Add 1 ratings of 1stars to lord2 object
 lord2.addRating(1);

Movie myMovie1("Movie 1 Title",2019);
Movie myMovie2("Movie 2 Title",1997);
Movie myMovie3("Movie 3 Title",1994);

myMovie1.addRating(1);
myMovie1.addRating(1);
for(int i=1; i<=5; i++){
  myMovie1.addRating(5);
}

myMovie2.addRating(2);
myMovie2.addRating(2);
for(int i=1; i<=5; i++){
  myMovie2.addRating(4);
}

myMovie3.addRating(3);
myMovie3.addRating(3);
for(int i=1; i<=5; i++){
  myMovie3.addRating(2);
}


//PRINT MOVIES AND AVERAGE RATINGS
 cout << "FIRST MOVIE" << endl << lord1<< endl << endl;
 cout << "SECOND MOVIE" << endl << lord2 << endl << endl;

 cout << "My Movie 1" << endl << myMovie1 << endl << endl;
 cout << "My Movie 2" << endl << myMovie2 << endl << endl;
 cout << "My Movie 3" << endl << myMovie3 << endl << endl;
}