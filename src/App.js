import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';

class App extends React.Component {
  render () {
    return (
      <div>
        <About>
          {About}
        </About>
      </div>
    // <Router>
    //   <Route path="/about" component={About} />
    // </Router>
    )
  };
}

export default App;
