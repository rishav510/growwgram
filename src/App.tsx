import React from 'react';

import { connect } from 'react-redux';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Header from './components/common/Header/Header';
import Popup from './components/common/Popup/Popup';
import NewsFeed from './components/pages/NewsFeed/NewsFeed';
import UserPage from './components/pages/UserPage/UserPage';
import fetchResponseObject from './store/actionCreators/fetchResponseObject';

class App extends React.Component <Props,State>{

  constructor(props:Props){
    super(props);
    this.state = {
      imageObject: null,
      imageDataArray: [],
    }
  }

  componentDidUpdate = () => {
    console.log('App component updated ...');
  }

  render(){
    
    return (
      <div>
       
        <BrowserRouter>
            <Header/>
            <Popup/>
            <div className = "newsfeed-wrapper">
              <Route path = "/" exact component = {NewsFeed}/>
            </div>
            <Route path = "/user" component = {UserPage}/> 
        </BrowserRouter>
      </div>
    );
  }

}

type Props = any;
type State = {
  imageObject?: any,
  imageDataArray?: any,
};

const mapStateToProps = (state:any) => {
  console.log(state);
  return {
    postDataList: state.postDataList,
  }

}

export default connect (mapStateToProps, {fetchResponseObject})(App);
