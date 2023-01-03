import React from 'react'
import ReactDOM from 'react-dom';

// css
import './style.css';

// Data books
import { data } from './books';
import Book from './Book';



// Spred operator
function BookList() {
  return (
    <section className='book-list'>
      {data.map((book)=> {
        return (
          <Book key={book.id} {...book}/>
        );
      })}
    </section>
  );
}

ReactDOM.render( <BookList />, document.getElementById('root'));