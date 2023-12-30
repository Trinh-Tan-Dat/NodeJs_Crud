import React from 'react'
import HomeScreen from './HomeScreen'

function Borrow() {
    const bookId = localStorage.getItem('bookId');
    console.log(bookId);
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
                <tr>
                  <th scope="row">{bookId}</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Borrow