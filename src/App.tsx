import React from 'react';

import { connect } from 'react-redux';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import FirstScreen from './components/common/FirstScreen/FirstScreen';
import Header from './components/common/Header/Header';
import Popup from './components/common/Popup/Popup';
import NewsFeed from './components/pages/NewsFeed/NewsFeed';
import UserPage from './components/pages/UserPage/UserPage';
import fetchResponseObject from './store/actionCreators/fetchResponseObject';

class App extends React.Component <Props,State>{

  constructor(props:Props){
    super(props);
    this.state = {
      firstScreen: true,
    }
  }

  componentDidMount = () => {
    console.log('app mounted');
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

type Props = any;
type State = {
  firstScreen: boolean;
};

const mapStateToProps = (state:any) => {

  return {
    postDataList: state.postDataList,
  }

}

export default connect (mapStateToProps, {fetchResponseObject})(App);
