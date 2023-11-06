// import logo from './logo.svg';
import classes from  './App.module.css';

import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import React, { Component } from 'react';
import ProductData from './Utils/ProductData';



class App extends Component {
  state ={
    ProductData:ProductData,
    // currentPreviewImage:'https://imgur.com/xSIK4M8.png',
    currentPreviewImagePos:0,
    // showHeartBeatSection:false,
    currentSelectedFeature: 0,

  }
 onColorOptionClick= (pos) =>{
  const updatedPreviewImage = this.state.ProductData.colorOptions[pos].imageUrl
  console.log(updatedPreviewImage);
    this.setState({currentPreviewImagePos:pos});
  }

  onFeatureItemClick =(pos) =>{
    // let updatedstate =false;
    // if(pos==1){
    //   updatedstate=true;
    // }
    // this.setState({showHeartBeatSection:updatedstate});
    this.setState({currentSelectedFeature:pos});

  }
  // shouldComponentUpdate(nextProps,nextState){
  //   // console.log('Next State =>',nextState);
  //   // console.log('Current  State => ',this.state);
  //   console.log('inside ShouldComponentUpdate');
  //   if(nextState.currentPreviewImagePos ===  this.state.currentPreviewImagePos){
  //     return false;
  //   }
  //   return true;
    
  // }
  render() {
    console.log('Rendering AppJs')
    return (
      <div className="App">
          <Topbar />
        <div className={classes.MainContainer}>
          
          
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
          
          
          
          <div className={classes.ProductData}>
           <ProductDetails data={this.state.ProductData} onColorOptionClick={this.onColorOptionClick} 
           currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} 
           currentSelectedFeature={this.state.currentSelectedFeature}/>
           </div>
  
        </div>
      </div>
    );

  }

}

export default App;
