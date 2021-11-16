function findAccountById(accounts, id) {
  const accountFound = accounts.find(account => account.id === id);
  console.log(accountFound);
  return accountFound;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase()? -1: 1)
}

// It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
//  create a variable that will hold the total number of times the account borrowed a book.
  let totalBorrows = 0;
//   we need to filter out the borrowed books based on the id
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if(borrow.id === account.id){
        totalBorrows++
      }
    })
  });
  console.log(totalBorrows)
  return totalBorrows;
}


function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
   .map(book => { let author = authors.find(author => author.id === book.authorId)
   book.author = author; 
   return book         
              })
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
