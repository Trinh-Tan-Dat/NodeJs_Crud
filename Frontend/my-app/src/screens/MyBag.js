import React from 'react'
import HomeScreen from './HomeScreen'
import { useState } from 'react';
function MyBag() {
    const userName = localStorage.getItem('mail');
    const [books, setBooks] = useState([]);
    fetch('http://localhost:3033/borrowed/' + userName, {
        method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err));
  return (
    <div>
      <HomeScreen />
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Borrowing date</th> 
                  <th scope="col">Expiration date</th>
                </tr>
              </thead>
                <tbody>
                    {books.map(book => (
                    <tr key={book.ID}>
                        <th scope="row">{book.book_ID}</th>
                        <td>{book.book_Name}</td>
                        <td>{book.quantity}</td>
                        <td>{book.borrowing_date}</td>
                        <td>{book.expiration_date}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBag