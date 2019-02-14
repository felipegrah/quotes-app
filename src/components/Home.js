import React, {Component} from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(){
        super();
        this.state = {
            quotes: [],
            dataLoaded: false
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: '/api/quotes'
        })
        // Saves the data to state. Only way to change the state is with setState
        .then(data => {
            this.setState({
                quotes: data.data.data,
                dataLoaded: true
            });
        })
        // logs an error
        .catch(err => {
            console.log(err);
        })
    }

    renderQuotes() {
        if(this.state.dataLoaded) {
            return this.state.quotes.map(quote => {
                return (
                    <div key={quote.id}>
                        <Link to={`/${quote.id}`}>"{quote.quote}"</Link>
                        <p className="author">{quote.author}</p>
                    </div>
                )
            })
        }
        else {
            <p>Loading...</p>
        }
    }

    render(){
        return (
            <div className="Home">
                <h1>These are my favorite quotes</h1>
                {this.renderQuotes()}
            </div>
        )
    }
}

export default Home;