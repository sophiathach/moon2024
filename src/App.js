import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SpaceChoice from './SpaceChoice.js';
import Colony1 from './Colony1';
import Colony2 from './Colony2.js';
import Home from './Home.js';
import Carousel1 from "./carousel1";
import Carousel2 from "./carousel2";

interface AppProps {
    history: History;
}
function App (props: AppProps) {

        return (
            <div className="App">

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={({history})=> {return (<Home history={history}/>);}
                        }
                    />
                    <Route
                        exact
                        path="/space"
                        render={({history})=> {return (<SpaceChoice history={history}/>);}
                        }
                    />
                    <Route
                        exact
                        path="/space/colony1"
                        render={({history})=> {return (<Colony1 history={history}/>);}
                        }
                    />
                    <Route
                        exact
                        path="/space/colony1/carousel1"
                        render={({history})=> {return (<Carousel1 history={history}/>);}
                        }
                    />
                    <Route
                        exact
                        path="/space/colony2/carousel2"
                        render={({history})=> {return (<Carousel2 history={history}/>);}
                        }
                    />
                    <Route
                        exact
                        path="/space/colony2"
                        render={({history})=> {return (<Colony2 history={history}/>);}
                        }
                    />

                </Switch>

                <p> 2019SpaceAppsChallenge.</p>
            </div>
        );
}

export default App;
