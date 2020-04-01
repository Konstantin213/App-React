import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import store from "./redux/store";

const App = props => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => <Dialogs store={props.store}
                                           state={props.state.dialogsPage}/>}
                />
                <Route
                    path="/profile"
                    render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}/>}
                />
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route
                    path="/friends"
                    render={() => <Friends
                        state={props.state.sidebar}/>}/>
            </div>
        </div>
    );
};

export default App;
