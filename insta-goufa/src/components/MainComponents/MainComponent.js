import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import NavBar from './NavBar';
import { CATEGORIES } from '../../shared/productData/categories';
import { MERCHANTS } from '../../shared/merchantsData/merchants';
import MerchantDirectory from '../MerchantComponents/MerchantDirectoryComponent';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: CATEGORIES,
            merchants: MERCHANTS,
            selectedMerchant: null
        }
    }

    onMerchantSelect(merchant) {
        this.setState({selectedMerchant:merchant});
    }

    render() {
        return (
            <div>
                <NavBar />
                <Directory categories = {this.state.categories}/>
                <MerchantDirectory merchants = {this.state.merchants} onClick={merchant => this.onMerchantSelect(merchant)}/>
                {/* <MerchantInfo merchant={this.state.selectedMerchant}/> */}
            </div>
        );
    }
}

export default Main;