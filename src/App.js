import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockList from './components/StockList.js';




function App() {
  return ( //className is used because "class" is reserved word
    <div className="App">
      <div className="container">
        <div className="col-md-5 mt-5">
          <div className="card">
             <StockList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
