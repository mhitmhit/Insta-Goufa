import React, { Component } from 'react';
import Directory from './components/DirectoryComponent';
import NavBar from './components/NavBar';
import { CATEGORIES } from './shared/categories';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: CATEGORIES
        }
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <Directory categories = {this.state.categories}/>
            </div>
        );
    }
}

export default App;
