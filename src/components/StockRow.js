import React, { Component } from 'react';
import {stock} from '../resources/stock.js'; //this class removes dependency on former iex class



class StockRow extends Component {
    //constructors tell objects how we want to build them
    constructor (props) { //props allows characteristics to be passed through objects
        super(props) //calls the component
        this.state = {
            price: null,
            date: null,
            time: null,
            dollar_change: null,
            percent_change: null   
        }
    }

    changeStyle() {
        // var color; this is refacored below
        // if (this.state.dollar_change > 0) {
        //     color = '#4caf50'
        // } else {
        //     color = 'e53935'
        // }
        return {
        color: (this.state.dollar_change > 0) ? '#4csf50' : 'e53935',
        fontSize: '0.8rem',
        marginLeft: 5
        }
      }

    applyData(data) { 
        const formattedPrice = (data.price == undefined) ? null :
        data.price.toFixed(2)

        console.log (data)
        this.setState({ 
            price: formattedPrice,
            date: data.date,
            time: data.time,
        });//The setState function "changes" the state (in this case, the data)  
        
    }


    componentDidMount() { //Lifecycle event once component has loaded.  This is triggered whenever the page has loaded.
        //query the API
        //const url = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        
        //fetch(url)
        //.then((response) => response.json())
        stock.latestPrice(this.props.ticker, this.applyData.bind(this)) //research why .bind makes work
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.lastTradingDate == null) {
            stock.getYesterdaysClose(this.props.ticker, this.props.lastTradingDate, (yesterday) => {
                const dollar_change = (this.state.price - yesterday.price).toFixed(2);
                const percent_change = (100 * dollar_change / yesterday.price).toFixed(2);
                this.setState({
                    dollar_change: `${dollar_change}`,
                    percent_change: ` (${percent_change}%)`
             })

        })
      
        }
    }



    render() {
        return ( //this.state - when the state changes, data that is dislayed changes
            <li className="list-group-item">
            <b>{this.props.ticker}</b> ${this.state.price}
            <span className="change" style={this.changeStyle()}>
              {this.state.dollar_change}
              {this.state.percent_change}
            </span>
            </li>
        
        // <tr> 
        //     {this.state.data && (
        //     // <React.Fragment>
        //     // <td></td>
        //     // <td></td>
        //     // <td>{this.state.data.date}</td>
        //     // <td>{this.state.data.time}</td>
        //     // </React.Fragment>
        // )}
        // </tr>
        // );
        )
    }
} 








export default StockRow;