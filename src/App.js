import React, { Component } from 'react';
import { Provider} from "react-redux"
import {BrowserRouter,Route} from 'react-router-dom'
import store from "./store"
import Header from "./components/header"
import Home from "./components/home"
import Detele from "./components/detele"
import From from "./components/form"

class App extends Component {
 
  render() {
    return (
      <Provider store={store} className="App">
          <BrowserRouter>
              <div>
                <Header/>
                <Route path="/" exact component={ Home }></Route>
                <Route path="/detele:id" exact component={ Detele }></Route>
                <Route path="/from" exact component={ From }></Route>
              </div>
            </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
