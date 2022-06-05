export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];
interface Book {
  title: string;
  author: string;
  isRead: boolean;
}

    const showStatus = (books: Book):string [] => {
      return books.map(book => book.title)
    }


   
    showStatus(library);
   








// const showStatus = (library: library[]) => {
//   library.map(book => {
//     if (book.isRead) {
//       console.log(`A lready read' ${book.title} 'by The Road Ahead.`)
//     } else {
//       console.log (`You still need to read '${book.title} by ${book.author}`)
//     }
//   })
// };
// interface library {
//   title: string;
//     author: string;
//     isRead: boolean;



/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/