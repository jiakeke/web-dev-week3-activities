import logo from './logo.svg';
import './App.css';

import Book from './components/book/Book.js';
import './components/book/Book.css';
import booksData from './booksData.js';

//function App() {
  //return (
    //<div className="App">
      //<h1>Book List</h1>
      //<div className="book-list">
  //{booksData.map(book => ( <Book key={book.id}  book={book} name="sami"/>))}
      //</div>
    //</div>
  //);
//}


function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {booksData.map((book) => ( <Book key={book.id} book={book} />))}
      </div>
    </div>
  );
}

export default App;
