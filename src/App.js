import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';







const App = (props) => {
  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
      <Header />
      <Navigation />
     <div className ='app-wrapper-content'>
       <Route exact path = '/dialogs' component = {Dialogs} />
       <Route exact path = '/profile' component = {Profile} />
       <Route exact path = '/news' component = {News} />
       <Route exact path = '/music' component = {Music} />
       <Route exact path = '/settings' component = {Settings} />
     </div>
      </div>
      </BrowserRouter>
    );
}



export default App;