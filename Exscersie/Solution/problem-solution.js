class MovieTheatre {
  #SeatCount;
  #SoldTickets = [];

  constructor(MovieName, Duration, SeatCount) {
    this.MovieName = MovieName;
    this.Duration = Duration;
    this.#SeatCount = SeatCount;
  }

  get AvailableSeatCount() {
    return (
      this.#SeatCount -
      this.#SoldTickets.reduce((acc, current) => acc + current.amount, 0)
    );
  }

  ReturnAvailableSeats(callBack) {
    callBack(this.#SoldTickets);
  }

  BuyTicket = function (name, amount) {
    return new Promise((resolve, reject) => {
      if (this.AvailableSeatCount > amount) {
        this.#SoldTickets.push({ name, amount });
        resolve("ბილეთები წარმატებით შეიძინეთ");
      } else {
        console.error("ადგილები არ არის");
        reject("სeსიაზე საკმარისი თავისუფალი ადგილი არ არის");
      }
    });
  };
}

const DUNE = new MovieTheatre("DUNE", "1H35M", 20);

DUNE.ReturnAvailableSeats(console.log);

DUNE.BuyTicket("Zuka", 3);

DUNE.ReturnAvailableSeats(console.log);

DUNE.BuyTicket("Zuka", 18).catch((err) => console.log("ბილეთები ვერ ვიყიდე"));

DUNE.ReturnAvailableSeats(console.log);
