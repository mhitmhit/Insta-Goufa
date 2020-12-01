import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import NavBar from './NavBar';
import MerchantDirectory from '../MerchantComponents/MerchantDirectoryComponent';
import MerchantInfo from '../MerchantComponents/MerchantInfoComponent';
import { CATEGORIES } from '../../shared/productData/categories';
import { MERCHANTS } from '../../shared/merchantsData/merchants';
import { MERCHANTREVIEWS } from '../../shared/merchantsData/merchantReviews';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: CATEGORIES,
            merchants: MERCHANTS,
            selectedMerchant: null,
            merchantReviews: MERCHANTREVIEWS,
            selectedMerchantComments: null
        }
    }

    onMerchantSelect(merchant) {
        this.setState({selectedMerchant:merchant});
        this.getMerchantReviews(merchant)
    }

    getMerchantReviews(merchant){
        const coments = this.state.merchantReviews.filter(rev => rev.merchantID==merchant.id);
        this.setState({selectedMerchantComments:coments});
    }

    render() {
        return (
            <div>
                <NavBar />
                <Directory categories = {this.state.categories}/>
                <MerchantDirectory merchants = {this.state.merchants} onClick={merchant => this.onMerchantSelect(merchant)}/>
                <MerchantInfo merchant={this.state.selectedMerchant} comments={this.state.selectedMerchantComments}/>
            </div>
        );
    }
}

export default Main;
