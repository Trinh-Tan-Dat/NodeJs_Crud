import React from 'react'
import HomeScreen from './HomeScreen'
import {useState, useEffect} from 'react'
function Borrow() {
    const bookId = localStorage.getItem('bookId');
    const [book, setBook] = useState([])
    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
      fetch('http://localhost:3033/book/' + bookId)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setBook(data)
        })
      }, [])
      // const data = { book_ID: bookId, quantity: inputValue, book_Name: book.Name, borrowing_date: new Date(), borrowing_date: new Date() + 30};
      const HandleSubmit = () => {
        if (book.length > 0) {
          const borrowingDate = new Date();
          const dueDate = new Date();
          dueDate.setDate(dueDate.getDate() + 30);
      
          const data = {
            book_ID: bookId,
            quantity: inputValue,
            book_Name: book[0].Name,
            borrowing_date: borrowingDate.toISOString(),
            expiration_date: dueDate.toISOString(),
          };
      
          fetch('http://localhost:3033/addbook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
        
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
                </tr>
              </thead>
              <tbody>
                {book.map(book => (
                    <tr key={book.ID}>
                      <th scope="row">{book.ID}</th>
                      <td>{book.Name}</td>
                      <td>{book.Categories}</td>
                      <td>{book.Amount}</td>
                      {/* add 1 input */}
                      <td>
                        <input type="text" className="form-control" placeholder="Enter quantity" value ={inputValue} onChange={e => setInputValue(e.target.value)} />
                      </td>
                    </tr>
                  ))}
                
                
              </tbody>
                  {/* add 1 button submit with white color*/}
                  <button type="button" className="btn btn-dark"
                    onClick={()=>{HandleSubmit()}}
                  >Submit</button>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Borrow