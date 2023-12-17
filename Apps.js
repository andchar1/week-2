const prompt = require("prompt-sync")();
const dayjs = require("dayjs");
const fs = require("fs");

let books = [];

const showBooks = () => {
  console.clear();

  for (const book of books){
    console.log(`${book.title} (${book.interest})`);
    console.log(`Rp${book.price}`);
    console.log(book.added + "\n");
  }

  prompt ("Press enter to continue...");
};

const addBook = () => {
  console.clear();

  const title = prompt("Insert book title: ");
  const interest = prompt("Insert your interest: ");
  const price = prompt("Insert the price: ");
  const added = dayjs().format("DD/MM/YYYY HH:mm:ss");

  books.push({
  title,
  interest,
  price,
  added,  
  });
}

const getBooks = () => {
  const data = fs.readFileSync("Favorite.json");
  const books = JSON.parse(data);

  return books;
};

const save = () => {
  fs.writeFileSync("Favorite.json", JSON.stringify(books));
};

books = getBooks();

let running = true;

while (running){
  console.clear();
  console.log("Favorite Books Library");
  console.log("1. Show books");
  console.log("2. Add a book");
  console.log("3. Save & exit");

  const choice = prompt("what you want to do? ");

  if (choice == 1){
    showBooks();
  }else if (choice == 2){
    addBook();
  }else if (choice == 3){
    save();
    running = false;
  }else{
    console.log("perintah tidak tersedia")
  };

};
