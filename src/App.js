import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow.js';



function App() {
  return ( //className is used because "class" is reserved word
  <div className="App">
  <div className="container">
    <div className="col-md-5 mt-5">
      <div className="card">
        <ul className="list-group list-group-flush">
         <StockRow ticker="aapl"/>
         <StockRow ticker="goog"/>
         <StockRow ticker="msft"/>
         <StockRow ticker="tsla"/>  
          </ul>
         </div>
         </div>
      </div>
    </div>
  );
}

export default App;
