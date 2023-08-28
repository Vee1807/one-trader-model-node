const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const PORT = process.env.PORT || 3000
const yahooFinance = require('yahoo-finance');


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.post('/api', async (req, res) => {
    console.log(JSON.stringify(req.body));
    let mySymbol = req.body.symbol;
    let startDate = req.body.from;
    let endDate = req.body.to;
    try {    
        let data = await getData(mySymbol, startDate, endDate);
        res.send(data);
    } catch(e) {
        // catch errors and send error status
        console.log(e);
        res.send('Error');
    }
})


app.use(express.static('./methods-public'))

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
})


/*function getData(symbol, from, to) {

}*/

/*async function getData() {
    let data = [];
    console.log('here')
    await yahooFinance.historical({
        symbol: 'AAPL',
        from: '2012-01-01',
        to: '2012-01-10',
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
        if (err) {
            throw err;
        }
        for (let i = 0; i < quotes.length; i++) {
            data.push(JSON.stringify(quotes[i]))
            console.log(data[i])
        }
    });
    return data;
}*/


function getData(mySymbol, startDate, endDate) {
    try {
        return yahooFinance.historical({
        symbol: mySymbol,
        from: startDate,
        to: endDate,
    });
    } 
    catch (error) 
    {
        console.error(error)
        return;
    }
}
