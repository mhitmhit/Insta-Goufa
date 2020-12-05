import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import MerchantDirectory from '../MerchantComponents/MerchantDirectoryComponent';
import MerchantInfo from '../MerchantComponents/MerchantInfoComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import MainBanner from './MainBannerComponent';
import MerchantBanner from '../MerchantComponents/MerchantBannerComponent';
import { CATEGORIES } from '../../shared/productData/categories';
import { MERCHANTS } from '../../shared/merchantsData/merchants';
import { MERCHANTREVIEWS } from '../../shared/merchantsData/merchantReviews';
import { Switch, Route, Redirect } from 'react-router-dom';

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
        const coments = this.state.merchantReviews.filter(rev => rev.merchantID===merchant.id);
        this.setState({selectedMerchantComments:coments});
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' render={()=>
                        <div>
                            <MainBanner />  
                            <Directory categories = {this.state.categories}/>
                            <MerchantDirectory merchants = {this.state.merchants} onClick={merchant => this.onMerchantSelect(merchant)}/>  
                        </div>
                    }/>
                     <Route exact path='/merchants' render={()=>
                        <div>
                            <MerchantBanner />
                            <MerchantDirectory merchants = {this.state.merchants} onClick={merchant => this.onMerchantSelect(merchant)}/>  
                            <MerchantInfo merchant={this.state.selectedMerchant} comments={this.state.selectedMerchantComments}/>
                        </div>
                    }/>
                    {/* <Redirect to='/' /> */}
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
