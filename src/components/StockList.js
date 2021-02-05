// import React, { Component } from 'react';
// import {stock} from '../resources/stock.js';
// import StockRow from './StockRow.js';


// class StockList extends Component {
//     //constructors tell objects how we want to build them
//     constructor (props) { //props allows characteristics to be passed through objects
//         super(props) //calls the component
//         this.state = {
//             lastTradingDate: null
              
//         }
//     }

//     componentDidMount() { 
//         stock.getLastTradingDate().then((data) =>{
//             this.setState({
//                 lastTradingDate: data[0].date
//             })

//         })
        
//     }


//     render() {
//         const lastTradingDate = this.state.lastTradingDate;
//         return ( //this.state - when the state changes, data that is dislayed changes
//             <ul className="list-group list-group-flush">
//             <StockRow ticker="aapl" lastTradingDate={lastTradingDate}/>
//             <StockRow ticker="goog" lastTradingDate={lastTradingDate}/>
//             <StockRow ticker="msft" lastTradingDate={lastTradingDate}/>
//             <StockRow ticker="tsla" lastTradingDate={lastTradingDate}/>
//             <StockRow ticker="gme" lastTradingDate={lastTradingDate}/>
//            </ul>
        
//         )
//     }
// } 


// export default StockList;