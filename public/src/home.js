const getTotalBooksCount = (books => {
  return books.length;
}) 

const getTotalAccountsCount = (accounts => {
return accounts.length;
})


function getBooksBorrowedCount(books) {
  // We need an empty variable to store the totalBooks
    let totalBooks = 0;
  //   We need to loop through the book objects
    books.forEach(book => {
   //     Loop through borrows array inside or books array
      book.borrows.forEach(borrow => {
         //   Create an if statement that pulls all the books that have not been returned
        if(borrow.returned === false){
        //   Increment the books into the totalBooks array
        totalBooks++
      }
      })
       })
  //   return totalBooks array
    return totalBooks;
  }

  function sortedBooks(obj){
    const keys = Object.keys(obj);
    return keys.sort((keyA, keyB) => {
      if(obj[keyA] > obj[keyB]){
        return -1;
      } else if (obj[keyB] > obj[keyA]){
        return 1;
      } else {
        return 0;
      }
        })
  }
  
  // It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
  // Each object in the returned array has two keys:
  // - The `name` key which represents the name of the genre.
  // - The `count` key which represents the number of times the genre occurs.
  function getMostCommonGenres(books) {
    const count = books.reduce((acc, {genre}) => {
      if(acc[genre]){
        acc[genre] += 1;
      } else {
        acc[genre] = 1;
      }
      return acc;
    }, {});
   const sorted = sortedBooks(count);
    return sorted.map((name) => ({
      name, count: count[name]
    })).slice(0, 5);
  }

  function getMostPopularBooks(books) {
    const mostPopular = [];
      books.sort((first, second) => second.borrows.length - first.borrows.length);
      books.forEach(book => {
      mostPopular.push({name: book.title, count: book.borrows.length});
      })
      return mostPopular.slice(0,5);
    }

    function getMostPopularAuthors(books, authors) {
      let popularAuthors = [];
      authors.forEach(author => {
        let authorObject = { name: `${author.name.first} ${author.name.last}`, count: 0}
        books.forEach(book => {
          if(book.authorId === author.id){
            authorObject.count += book.borrows.length
          }
        });
        popularAuthors.push(authorObject)
      })
      return popularAuthors.sort((first, second) => second.count - first.count).slice(0, 5)
    };

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
