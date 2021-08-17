import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FirstScreen from './components/common/FirstScreen';
import { MemoizedHeader as Header } from './components/common/Header';
import Page404 from './components/common/Page404';
import { MemoizedPopup as Popup } from './components/common/Popup';
import NewsFeed from './components/pages/NewsFeed';
import UserPage from './components/pages/UserPage';
import fetchResponseObject from './store/actionCreators/fetchResponseObject';
import ReduxState from './utils/types/ReduxState';


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
            <Switch>
              <Route exact path = "/" component = {NewsFeed}/>
              <Route path = {"/user/"+this.props.username} component = {UserPage}/> 
              <Route component = {Page404}/>
            </Switch>

            
        </BrowserRouter>
      </div>
    );
  }

}

const mapStateToProps = (state: ReduxState) => {
  return {
    username: state.currentUserDetails?.username,
  }
}

type Props = {
  username?: string,
}

type State = {
  firstScreen: boolean;
};


export default connect (mapStateToProps, {fetchResponseObject})(App);
