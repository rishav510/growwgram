import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FirstScreen from './components/common/FirstScreen';
import { MemoizedHeader as Header } from './components/common/Header';
import LoadingScreen from './components/common/LoadingScreen';
import Page404 from './components/common/Page404';
import { MemoizedPopup as Popup } from './components/common/Popup';
import NewsFeed from './components/pages/NewsFeed';
import UserPage from './components/pages/UserPage';
import getCachedFeed from './store/actionCreators/getCachedFeed';
import ReduxState from './utils/types/ReduxState';


class App extends React.Component <Props,State>{

  constructor(props:Props){
    super(props);
    this.state = {
      firstScreen: true,
      userPageFound: false,
    }
  }

  componentDidMount = () => {
    setTimeout(() => {this.setState({firstScreen: false})}, 2000);
  }

  render(){
    
    return (
      <div className = "app-wrapper">
        <BrowserRouter>
            {this.state.firstScreen? <FirstScreen/>: null}
            <Header/>
            <Popup/>
            <Switch>
              {
                (<Route  path = {`/${this.props.username}`} component = {UserPage}/>)
              }

              <Route exact path = "/" component = {NewsFeed} /> 
              {
                !this.props.userDetailsLoading && <Route  path = "*" component = {Page404}/>
              }
              <Route path = "*" component ={LoadingScreen}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

const mapStateToProps = (state: ReduxState) => {

  return {
    username: state.currentUserDetails?.username,
    userDetailsLoading: state.userDetailsLoading,
  }
}

type Props = {
  username?: string,
  getCachedFeed: () => {},
  userDetailsLoading: boolean,
}

type State = {
  firstScreen: boolean,
  userPageFound: boolean,
};


export default connect (mapStateToProps, {getCachedFeed})(App);
