import React, { Component } from 'react';
import Header from './common/Header';
import store from './store/store.js';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Details from './pages/Details';
import Diary from './pages/Diary';
import About from './pages/About';
import Login from './pages/Login';
//import Register from './pages/Register';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
           <Router>
            <div>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/details' exact component={Details}></Route>
                <Route path="/diary" exact component={Diary}></Route>
                <Route path="/about" exact component={About}></Route>
            </div>  
           </Router>
           <Router>
             <div>
                <Route path='/Login' exact component={Login}></Route>
             </div>   
           </Router>
      </Provider>
    );
  }
}

export default App;
