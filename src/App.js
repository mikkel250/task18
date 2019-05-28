import React from 'react';
//import './App.css';
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
import Product from './components/Product';
import { Button, Tabs, Tab, Icon } from 'react-materialize';

const loggedIn = true;
const name = 'Valerie';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        
        <Header name={name} isLoggedIn={loggedIn} />
          <Tabs className="tabs z-depth-1">
            <Tab title="About">
              <About />
            </Tab>
            <Tab title="Products" active>
              <Product numbers={["Electronics", "Mobile Phones", "Data Loggers"]} />
            </Tab>
            <Tab title="Profile">
              <Profile />
            </Tab>
          </Tabs>
      </div>
    )
   }
  
}

export default App;

