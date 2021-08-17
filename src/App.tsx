import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import FirstScreen from './components/common/FirstScreen';
import { MemoizedHeader as Header } from './components/common/Header';
import { MemoizedPopup as Popup } from './components/common/Popup';
import NewsFeed from './components/pages/NewsFeed';
import UserPage from './components/pages/UserPage';
import fetchResponseObject from './store/actionCreators/fetchResponseObject';


class App extends React.Component <Props,State>{

  constructor(props:Props){
    super(props);
    this.state = {
      firstScreen: true,
    }
  }

  componentDidMount = () => {
    setTimeout(() => {this.setState({firstScreen: false})}, 2000)
  }

  render(){
    
    return (
      <div>
       
        <BrowserRouter>
            {this.state.firstScreen? <FirstScreen/>: null}
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

type Props = {}

type State = {
  firstScreen: boolean;
};


export default connect (null, {fetchResponseObject})(App);
