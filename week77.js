

class Movie {

    constructor(title, director) {
      // add your code here
      this.title = title
      this.director = director
     
      
      this.rating = [];
  
    }

      

    getTitle() {
      // add your code here
      console.log( this.title)
      return this.title 
    }
      // star[] = new star

    getDirector() {
      // add your code here
      console.log(this.director);
            return this.director
    }

   

    addStar(star) {
      // add your code here
      this.star=star
      // myMovie.addStar('jack')
      
    
     // function nameStar() {
       // star.push( new star); 
   
 //}
    

     
       

      console.log(this.title + "has certain stars " + star)
      return star;
      //console.log(star);
      
    }
    getStars() {
      // add your code here
      console.log(this.star);
      return this.star;
      
    }

    
  addWriter(writer) {
    // add your code here
    this.writer=writer
    // Movie.prototype.writer="Adam"
    //   console.log(this.director + "has certain stars " + writer)
    //   return this.writer;
  }
   
  
  addRating(rating) {
    // add your code here
    this.rating=rating
   
  }
    
  //getAverageRating() 
  
    // add your code here
    


  
} 


const myMovie  = new Movie("herry portter", "Tom Beringer");
myMovie.addStar('4')
myMovie.addRating('9/10')
myMovie.addWriter("winslet")
console.log(myMovie)


    // const mymovie = new Movie ("starwars","ADAM", "jack")
    
    // console.log(mymovie);
    

    const getAverage = arr => {
      const reducer = (total,currentValue) => total + currentValue
      const sum = arr.reduce(reducer);
      return sum/arr.length;
  //sum the value from the arr
  //get the length of the arr
  //divide the arr sum byb the length

}


getAverage([3,2,3 ] );


class StaffMember {
  constructor(name, role, dateOfBirth) {
    // add your code 
    this.name = name
    this.role = role
    this.dateOfBirth = dateOfBirth
    this.movie = []
    this.Age = []

  }

addMovie(movie) {
  // add your code here
  this.movie = movie
  
  
  
}
addactor(actor) {
  this.actor=actor
}
getactor(){
  console.log(this.actor);
  return this.actor
  
}

getName() {
  // add your code here
  console.log(this.name)
  return this.name
}

getRole() {
  // add your code here
  console.log(this.role)
  return this.role
}

getAge() {
  // add your code here
  
  console.log(this.age)
  return this.age
}



}

const mystaffMember = new StaffMember("gibson","vice_chairman","23_june_1900","starwara",70);
mystaffMember.addMovie("The expendables")
mystaffMember.addactor("wiep")
console.log(mystaffMember);

//Pick your favorite movie from http://www.imdb.com/

// Make sure that the following actions work.

const myMovie1 = new Movie("joker","robie");
console.log(myMovie1);
const firstActor = new StaffMember("john");
myMovie.addStar(firstActor);




console.log(myMovie.getStars().map(actor => `${actor.getName()("gibson")} ${actor.getAge()(70)}`));

const director = myMovie.getDirector();
console.log(`Director: ${director.getName()("irene")}`);

 

                        

  

              