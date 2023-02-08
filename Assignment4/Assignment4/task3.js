var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
   }];
   
   for (var i = 0; i < library.length; i++) {
    var book = library[i];
    console.log("Book Name: " + book.title + ", Author: " + book.author + ", Reading Status: " + (book.readingStatus ? "Already Read" : "Not Read Yet"));
   }
   