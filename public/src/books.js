 // It returns the author object that has the matching ID.
 function findAuthorById(authors, id) {
  // we need to filter out an author object that matches the the ID of the author and return that author
    const authorObject = authors.find(author => author.id === id);
  return authorObject;
  console.log(authorObject);
  }

function findBookById(books, id) {
const bookId = books.find(book => book.id === id);
console.log(bookId);
return bookId;
}

function partitionBooksByBorrowedStatus(books) {
let borrowedBooks = books.filter(book => book.borrows[0].returned === false);
 console.log(borrowedBooks)
let returnedBooks = books.filter(book => book.borrows[0].returned === true);
// console.log(returnedBooks)
return [borrowedBooks, returnedBooks];
}

// It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.

function getBorrowersForBook(book, accounts) {
//  We need to match the book.borrows.id object with the account id and return the account object.
let result = book.borrows.map(borrower => { 
 let result = accounts.find(account => borrower.id === account.id )
 result.returned = borrower.returned 
  return result
})
console.log(result)
return result.filter((borrower, i)=> result.findIndex(item => item.id === borrower.id) === i) 

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
