import React, { useState, useEffect } from 'react';
import HomeScreen from './HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [books, setBooks] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:3033/book')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err));
  }, []);

  const handleBorrowBook = (bookId) => {
    localStorage.setItem('bookId', bookId);
    navigate('/borrow');
  };

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
                  <th scope="col">Category</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Actions</th> {/* Thêm cột "Actions" */}
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book.ID}>
                    <th scope="row">{book.ID}</th>
                    <td>{book.Name}</td>
                    <td>{book.Categories}</td>
                    <td>{book.Amount}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleBorrowBook(book.ID)}
                      >
                        Borrow
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;