import React from 'react';
//import './App.css';
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
import Product from './components/Product';
//import { Button, Tabs, Tab, Icon } from 'react-materialize';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles([
  root: {
    flexGrow: 1,
  }
]);


const loggedIn = true;
const name = 'Valerie';

function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="About" />
        <Tab label="Products" />
        <Tab label="Profile" />
        </Tabs>
    </Paper>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

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

