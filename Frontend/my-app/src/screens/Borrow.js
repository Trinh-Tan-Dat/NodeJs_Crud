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
    const HandleSubmit = () => {
      //fetch data from input
      console.log(inputValue)

    }
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