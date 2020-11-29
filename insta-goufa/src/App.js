import React, { Component } from 'react';
import Directory from './components/MainComponents/DirectoryComponent';
import NavBar from './components/MainComponents/NavBar';
import { CATEGORIES } from './shared/categories';
import { MERCHANTS } from './shared/merchantsData/merchants';
import MerchantDirectory from './components/MerchantComponents/MerchantDirectoryComponent';
import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: CATEGORIES,
            merchants: MERCHANTS
        }
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <Directory categories = {this.state.categories}/>
                <MerchantDirectory merchants = {this.state.merchants}/>
            </div>
        );
    }
}

export default App;
