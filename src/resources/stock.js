import {iex} from '../config/iex.js';

export const stock = {
    latestPrice: (ticker, callback) => {
        //const url = 
        fetch(stock.latestPriceURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)))
    },

    latestPriceURL: (ticker) => {
       return  `${iex.base_url}/stock/${ticker}
       /intraday-prices?chartLast=1&token=${iex.api_token}`
    },

    formatPriceData: (data) => {
            const stockData = data[data.length - 1]
            const formattedData = {}
            formattedData.price = stockData.close //these are the only real dependencies after refactoring
            formattedData.date = stockData.date
            formattedData.time = stockData.label
            return formattedData
    },

getYesterdaysClose: (ticker, date, callback) => {
    fetch(stock.yesterdaysCloseURL(ticker, date))
    .then((response) => response.json())
    .then((data) => callback(stock.formatPriceData(data)))
},

yesterdaysCloseURL: (ticker, date) => {
    return  `${iex.base_url}/stock/${ticker}
    /intraday-prices?chartLast=1&exactDate=20210202&token=${iex.api_token}`
    //&exactDate=20210202

}

}