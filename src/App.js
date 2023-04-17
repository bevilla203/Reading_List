import React from 'react'
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
const App = () => {
    const [books, setBooks] = useState([]);
    
    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            }

            return book;
        })
        setBooks(updatedBooks);
    }
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        }) // gives us a new array with the book.id matching the one we should delete
        setBooks(updatedBooks);
    };
    const idGenerator = () => {
        return Math.round(Math.random() * 9999);
    }
    const createBook = (title) => {
        const updatedBooks = [
            ...books, { id: idGenerator(), title: title }
        ]
        setBooks(updatedBooks);
        console.log(books);
    }
  return (
      <div className='app'>
          <h1>Reading List</h1>
          <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
          <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App

