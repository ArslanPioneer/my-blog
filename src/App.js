import React, { Component } from 'react';
import Header from './common/Header';
import store from './store/index.js';
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
                <Route path='/' exact component={Home}/>
                <Route path='/details/:id' exact component={Details}/>
                <Route path="/diary" exact component={Diary}/>
                <Route path="/about" exact component={About}/>
                <Route path='/Login' exact component={Login}/>
            </div>  
           </Router>
          
      </Provider>
    );
  }
}

export default App;
